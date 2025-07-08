import type { NextApiRequest, NextApiResponse } from 'next';
import OpenAI from 'openai';
import { uploadFile } from '@/lib/upload';

// Configure the body parser to accept larger payloads
export const config = {
  api: {
    bodyParser: {
      sizeLimit: '10mb'
    }
  }
};

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
});

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method !== 'POST') {
    return res.status(405).json({ success: false, error: 'Method not allowed' });
  }

  try {
    const { audio } = req.body;

    if (!audio) {
      return res.status(400).json({ success: false, error: 'No audio data provided' });
    }

    // Remove the data URL prefix (e.g., "data:audio/wav;base64,")
    const base64Audio = audio.split(',')[1];

    // Convert base64 to buffer
    const audioBuffer = Buffer.from(base64Audio, 'base64');

    // Upload audio file to S3
    const timestamp = new Date().getTime();
    const fileName = `recording-${timestamp}.webm`;
    const audioUrl = await uploadFile(audioBuffer, fileName, 'audio/webm', 'recordings');

    // Create a temporary file for OpenAI
    const tempFile = new File([audioBuffer], 'audio.wav', { type: 'audio/wav' });

    // Transcribe the audio using OpenAI's Whisper model
    const transcription = await openai.audio.transcriptions.create({
      file: tempFile,
      model: 'whisper-1',
    });

    return res.status(200).json({
      success: true,
      transcript: transcription.text,
      audioUrl
    });
  } catch (error) {
    console.error('Error transcribing audio:', error);
    return res.status(500).json({
      success: false,
      error: 'Error transcribing audio',
    });
  }
}