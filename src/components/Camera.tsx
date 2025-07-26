// src/components/Camera.tsx
// README: src/components/Camera.md
// This component provides a user interface for capturing or uploading images.
// It allows users to take photos with their device camera or upload existing images.
// The component handles image processing and cropping to ensure consistent dimensions.
// The generated image is then passed to the generateImage function for further processing.

// Imports
import React, { useRef } from 'react';
import styled from 'styled-components';

const CameraButton = styled.button`
  background: ${({ theme }) => theme.colors.accent};
  color: ${({ theme }) => theme.colors.textInverse};
  padding: ${({ theme }) => `${theme.spacing[3]} ${theme.spacing[6]}`};
  border-radius: ${({ theme }) => theme.borderRadius.lg};
  font-size: ${({ theme }) => theme.typography.fontSize.base};
  font-weight: ${({ theme }) => theme.typography.fontWeight.medium};
  border: none;
  cursor: pointer;
  transition: background-color ${({ theme }) => theme.transitions.fast};
  display: flex;
  align-items: center;
  gap: ${({ theme }) => theme.spacing[2]};
  margin: ${({ theme }) => theme.spacing[4]} 0;

  &:hover {
    background: ${({ theme }) => theme.colors.accentDark};
  }
`;

const FileInput = styled.input`
  display: none;
`;

const ButtonContainer = styled.div`
  display: flex;
  gap: ${({ theme }) => theme.spacing[4]};
  justify-content: center;
`;

interface ImageAnalysisResult {
  description: string;
  objects: string[];
  text: string[];
  colors: string[];
  mood: string;
  context: string;
  suggestions: string[];
}

interface CameraProps {
  setUserImage: (image: string) => void;
  setError: (error: string) => void;
  generateImage: (image: string) => Promise<void>;
  onImageAnalysis?: (analysis: ImageAnalysisResult) => void;
}

const Camera: React.FC<CameraProps> = ({ setUserImage, setError, generateImage, onImageAnalysis }) => {
  const fileInputRef = useRef<HTMLInputElement>(null);

  const analyzeImage = async (imageData: string): Promise<ImageAnalysisResult> => {
    try {
      const response = await fetch('/api/analyze-image', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ imageData }),
      });

      if (!response.ok) {
        throw new Error('Failed to analyze image');
      }

      const result = await response.json();
      return result.analysis;
    } catch {
      throw new Error('Failed to analyze image');
    }
  };

  const handleFileUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = async (e) => {
        const imageData = e.target?.result as string;
        try {
          const croppedImage = await cropImageToWidth(imageData, 600);
          setUserImage(croppedImage);
          
          // Analyze the image
          if (onImageAnalysis) {
            const analysis = await analyzeImage(croppedImage);
            onImageAnalysis(analysis);
          }
          
          await generateImage(croppedImage);
        } catch (err) {
          setError(err instanceof Error ? err.message : "Failed to process image");
        }
      };
      reader.readAsDataURL(file);
    }
  };

  const cropImageToWidth = (dataUrl: string, targetWidth: number): Promise<string> => {
    return new Promise((resolve, reject) => {
      const img = new Image();
      img.onload = () => {
        const canvas = document.createElement('canvas');
        const ctx = canvas.getContext('2d');
        
        if (!ctx) {
          reject(new Error('Failed to get canvas context'));
          return;
        }

        const aspectRatio = img.height / img.width;
        canvas.width = targetWidth;
        canvas.height = targetWidth * aspectRatio;

        ctx.drawImage(img, 0, 0, canvas.width, canvas.height);
        resolve(canvas.toDataURL('image/jpeg', 0.9));
      };
      img.onerror = () => reject(new Error('Failed to load image'));
      img.src = dataUrl;
    });
  };

  const handleCameraCapture = () => {
    console.log('Camera capture');
  };

  return (
    <ButtonContainer>
      <CameraButton onClick={handleCameraCapture}>
        Take Photo
      </CameraButton>
      
      <CameraButton onClick={() => fileInputRef.current?.click()}>
        Upload Photo
      </CameraButton>
      
      <FileInput
        ref={fileInputRef}
        type="file"
        accept="image/*"
        onChange={handleFileUpload}
      />
    </ButtonContainer>
  );
};

export default Camera;
