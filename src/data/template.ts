export interface Template {
    id: string;
    name: string;
    tag: string;
    description?: string;
    icon?: string;
    questions?: string[];
    workflow?: {
      steps: string[];
      category: string;
    };
  }
  


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
        workflow: template.workflow ? JSON.parse(template.workflow) : undefined,
      }));
    } catch (error) {
      console.error("Error fetching templates from database:", error);
      // Fallback to default templates if database is not available
      return defaultTemplates;
    }
  };
  

  
  export const defaultTemplates = [
    {
      id: "event",
      name: "Host an Event",
      tag: "Popular",
      description:
        "Plan and organize gatherings, conferences, or meetups with collaborative input from all stakeholders.",
      icon: "🎉",
      questions: [
        "What is the name of your event?",
        "When will the event take place?",
        "What is the location of your event?",
        "How many attendees do you expect?",
        "What is the main goal of your event?",
        "Do you need any special equipment or resources?",
      ],
      workflow: {
        category: "Events",
        steps: [
          "Define event concept and goals",
          "Set budget and timeline",
          "Choose venue and date",
          "Plan logistics and vendors",
          "Create marketing materials",
          "Manage registrations and attendees",
          "Execute event and follow up"
        ]
      }
    },
    {
      id: "artwork",
      name: "Create a Collaborative Artwork",
      tag: "Creative",
      description:
        "Coordinate artistic projects where multiple contributors can add their creative input to a shared vision.",
      icon: "🎨",
      questions: [
        "What type of collaborative artwork are you creating?",
        "What materials will be needed?",
        "How many people will be contributing to the artwork?",
        "What is the timeline for completion?",
        "Where will the final artwork be displayed or shared?",
        "Are there any specific themes or guidelines for contributors?",
      ],
      workflow: {
        category: "Creative",
        steps: [
          "Define artistic concept and theme",
          "Select materials and techniques",
          "Recruit contributors and assign roles",
          "Create timeline and milestones",
          "Coordinate collaboration process",
          "Document and showcase final piece"
        ]
      }
    },
    {
      id: "contest",
      name: "Run a Raffle or Contest",
      tag: "Engagement",
      description:
        "Organize competitions, giveaways, or raffles with transparent rules and participant management.",
      icon: "🏆",
      questions: [
        "What type of contest or raffle are you running?",
        "What are the prizes?",
        "How will entries be submitted and judged?",
        "What is the timeline for the contest?",
        "How will you promote the contest?",
        "What are the eligibility requirements?",
      ],
      workflow: {
        category: "Engagement",
        steps: [
          "Define contest rules and prizes",
          "Set up entry and judging criteria",
          "Create promotional materials",
          "Launch and manage entries",
          "Select winners and distribute prizes",
          "Document results and feedback"
        ]
      }
    },
    {
      id: "fundraise",
      name: "Fundraise / Plan a Campaign",
      tag: "Impact",
      description:
        "Coordinate donation drives and fundraising efforts with goal tracking and supporter recognition.",
      icon: "💝",
      questions: [
        "What cause or project are you fundraising for?",
        "What is your fundraising goal?",
        "What methods will you use to collect donations?",
        "What is the timeline for your campaign?",
        "How will you recognize donors or supporters?",
        "What marketing channels will you use to promote the campaign?",
      ],
      workflow: {
        category: "Fundraising",
        steps: [
          "Define cause and fundraising goal",
          "Create campaign messaging and materials",
          "Set up donation collection methods",
          "Launch campaign and track progress",
          "Engage with donors and supporters",
          "Report results and impact"
        ]
      }
    },
    {
      id: "workshop",
      name: "Facilitate a Workshop",
      tag: "Education",
      description:
        "Design and deliver interactive learning experiences with clear objectives and participant resources.",
      icon: "📚",
      questions: [
        "What is the topic of your workshop?",
        "Who is the target audience?",
        "What are the learning objectives?",
        "How long will the workshop last?",
        "What materials or preparation will participants need?",
        "Will there be any follow-up activities or resources?",
      ],
      workflow: {
        category: "Education",
        steps: [
          "Define learning objectives and outcomes",
          "Design workshop structure and activities",
          "Prepare materials and resources",
          "Recruit and register participants",
          "Facilitate workshop and gather feedback",
          "Follow up with resources and next steps"
        ]
      }
    },
    {
      id: "webproduct",
      name: "Build a Web Product",
      tag: "Technology",
      description:
        "Develop user-focused web applications with collaborative planning, feature prioritization, and user feedback integration.",
      icon: "🚀",
      questions: [
        "What is the name of your web product?",
        "What problem does your web product solve?",
        "Who is your target user or audience?",
        "What are the key features and functionality?",
        "What is your timeline for development and launch?",
        "How will you measure success and user satisfaction?",
        "What technologies or platforms will you use?",
      ],
      workflow: {
        category: "Technology",
        steps: [
          "Define product requirements and user needs",
          "Create product roadmap and timeline",
          "Design user experience and interface",
          "Develop MVP and test with users",
          "Iterate based on feedback",
          "Launch and monitor performance"
        ]
      }
    },
    {
      id: "projectplanning",
      name: "Project Planning",
      tag: "Management",
      description:
        "Organize and structure a new project with clear milestones and deliverables.",
      icon: "📋",
      questions: [
        "What is the name of your project?",
        "What are the main objectives?",
        "Who are the key stakeholders?",
        "What is your timeline?",
        "What resources do you need?",
        "How will you measure success?",
      ],
      workflow: {
        category: "Project Management",
        steps: [
          "Define project scope and objectives",
          "Create project timeline and milestones",
          "Identify key stakeholders and roles",
          "Set up project tracking tools",
          "Plan resource allocation and budget",
          "Monitor progress and adjust as needed"
        ]
      }
    },
    {
      id: "marketingcampaign",
      name: "Marketing Campaign",
      tag: "Marketing",
      description:
        "Launch a comprehensive marketing campaign across multiple channels.",
      icon: "📢",
      questions: [
        "What is your campaign goal?",
        "Who is your target audience?",
        "What channels will you use?",
        "What is your budget?",
        "How will you measure results?",
        "What is your timeline?",
      ],
      workflow: {
        category: "Marketing",
        steps: [
          "Define target audience and personas",
          "Create campaign messaging and creative",
          "Choose marketing channels and tactics",
          "Set up tracking and analytics",
          "Plan content calendar and execution",
          "Monitor performance and optimize"
        ]
      }
    },
    {
      id: "productdevelopment",
      name: "Product Development",
      tag: "Product",
      description:
        "Bring a product idea from concept to market-ready solution.",
      icon: "⚙️",
      questions: [
        "What problem does your product solve?",
        "Who is your target user?",
        "What are the key features?",
        "What is your development timeline?",
        "How will you test and validate?",
        "What is your launch strategy?",
      ],
      workflow: {
        category: "Product",
        steps: [
          "Define product requirements and user stories",
          "Create product roadmap and feature prioritization",
          "Design user experience and interface",
          "Develop MVP and conduct user testing",
          "Iterate based on feedback and data",
          "Plan launch strategy and go-to-market"
        ]
      }
    },
    {
      id: "contentcreation",
      name: "Content Creation",
      tag: "Content",
      description:
        "Create engaging content for blogs, social media, or marketing materials.",
      icon: "✍️",
      questions: [
        "What type of content are you creating?",
        "Who is your target audience?",
        "What is your content goal?",
        "What platforms will you use?",
        "How will you measure engagement?",
        "What is your content calendar?",
      ],
      workflow: {
        category: "Content",
        steps: [
          "Research topics and keywords",
          "Create content outline and structure",
          "Write and edit content",
          "Add visuals and media",
          "Plan distribution strategy",
          "Monitor engagement and performance"
        ]
      }
    },
    {
      id: "researchanalysis",
      name: "Research & Analysis",
      tag: "Research",
      description:
        "Conduct thorough research and analysis on a topic or market.",
      icon: "🔍",
      questions: [
        "What is your research question?",
        "What data sources will you use?",
        "What is your research methodology?",
        "How will you analyze the data?",
        "What deliverables do you need?",
        "What is your timeline?",
      ],
      workflow: {
        category: "Research",
        steps: [
          "Define research objectives and questions",
          "Gather data and sources",
          "Analyze findings and patterns",
          "Create insights report and recommendations",
          "Present findings to stakeholders",
          "Plan next steps and implementation"
        ]
      }
    },
    {
      id: "socialmedia",
      name: "Social Media Strategy",
      tag: "Digital",
      description:
        "Develop and execute a comprehensive social media presence and engagement strategy.",
      icon: "📱",
      questions: [
        "What platforms will you focus on?",
        "What is your content strategy?",
        "Who is your target audience?",
        "How often will you post?",
        "What is your engagement goal?",
        "How will you measure success?",
      ],
      workflow: {
        category: "Digital Marketing",
        steps: [
          "Audit current social media presence",
          "Define target audience and platforms",
          "Create content strategy and calendar",
          "Develop brand voice and guidelines",
          "Implement posting schedule and automation",
          "Monitor engagement and adjust strategy"
        ]
      }
    },
    {
      id: "businessplan",
      name: "Business Plan Development",
      tag: "Business",
      description:
        "Create a comprehensive business plan with market analysis, financial projections, and growth strategy.",
      icon: "💼",
      questions: [
        "What is your business concept?",
        "Who is your target market?",
        "What is your revenue model?",
        "What are your startup costs?",
        "Who is your competition?",
        "What is your growth strategy?",
      ],
      workflow: {
        category: "Business",
        steps: [
          "Define business concept and value proposition",
          "Conduct market research and competitive analysis",
          "Develop financial projections and funding needs",
          "Create marketing and sales strategy",
          "Plan operations and team structure",
          "Write executive summary and pitch deck"
        ]
      }
    },
  ];
  