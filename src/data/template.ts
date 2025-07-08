export interface Template {
    id: string;
    name: string;
    tag: string;
    description?: string;
    icon?: string;
    questions?: string[];
  }
  
  export const getQuestionsForTemplate = (template: Template) => {
    return templateQuestions[template.id as keyof typeof templateQuestions] || [];
  };

  // Function to fetch templates from database
  export const getTemplatesFromDatabase = async () => {
    try {
      const { db } = await import("../db/index");
      const { templates } = await import("../db/schema");
      
      const dbTemplates = await db.select().from(templates);
      
      return dbTemplates.map(template => ({
        id: template.templateId,
        name: template.name,
        tag: template.tag,
        description: template.description,
        icon: template.icon,
        questions: template.questions ? JSON.parse(template.questions) : [],
      }));
    } catch (error) {
      console.error("Error fetching templates from database:", error);
      // Fallback to default templates if database is not available
      return defaultTemplates;
    }
  };
  
  // Template-specific questions
  export const templateQuestions = {
    event: [
      "What is the name of your event?",
      "When will the event take place?",
      "What is the location of your event?",
      "How many attendees do you expect?",
      "What is the main goal of your event?",
      "Do you need any special equipment or resources?",
    ],
    artwork: [
      "What type of collaborative artwork are you creating?",
      "What materials will be needed?",
      "How many people will be contributing to the artwork?",
      "What is the timeline for completion?",
      "Where will the final artwork be displayed or shared?",
      "Are there any specific themes or guidelines for contributors?",
    ],
    contest: [
      "What type of contest or raffle are you running?",
      "What are the prizes?",
      "How will entries be submitted and judged?",
      "What is the timeline for the contest?",
      "How will you promote the contest?",
      "What are the eligibility requirements?",
    ],
    fundraise: [
      "What cause or project are you fundraising for?",
      "What is your fundraising goal?",
      "What methods will you use to collect donations?",
      "What is the timeline for your campaign?",
      "How will you recognize donors or supporters?",
      "What marketing channels will you use to promote the campaign?",
    ],
    workshop: [
      "What is the topic of your workshop?",
      "Who is the target audience?",
      "What are the learning objectives?",
      "How long will the workshop last?",
      "What materials or preparation will participants need?",
      "Will there be any follow-up activities or resources?",
    ],
    webproduct: [
      "What is the name of your web product?",
      "What problem does your web product solve?",
      "Who is your target user or audience?",
      "What are the key features and functionality?",
      "What is your timeline for development and launch?",
      "How will you measure success and user satisfaction?",
      "What technologies or platforms will you use?",
    ],
  };
  
  export const defaultTemplates = [
    {
      id: "event",
      name: "Host an Event",
      tag: "Popular",
      description:
        "Plan and organize gatherings, conferences, or meetups with collaborative input from all stakeholders.",
    },
    {
      id: "artwork",
      name: "Create a Collaborative Artwork",
      tag: "Creative",
      description:
        "Coordinate artistic projects where multiple contributors can add their creative input to a shared vision.",
    },
    {
      id: "contest",
      name: "Run a Raffle or Contest",
      tag: "Engagement",
      description:
        "Organize competitions, giveaways, or raffles with transparent rules and participant management.",
    },
    {
      id: "fundraise",
      name: "Fundraise / Plan a Campaign",
      tag: "Impact",
      description:
        "Coordinate donation drives and fundraising efforts with goal tracking and supporter recognition.",
    },
    {
      id: "workshop",
      name: "Facilitate a Workshop",
      tag: "Education",
      description:
        "Design and deliver interactive learning experiences with clear objectives and participant resources.",
    },
    {
      id: "webproduct",
      name: "Build a Web Product",
      tag: "Technology",
      description:
        "Develop user-focused web applications with collaborative planning, feature prioritization, and user feedback integration.",
    },
  ].map((t) => ({
    ...t,
    questions: getQuestionsForTemplate(t),
  }));
  