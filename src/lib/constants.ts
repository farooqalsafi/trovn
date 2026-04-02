export const NAV_LINKS = [
  { href: "#about", label: "About" },
  { href: "#services", label: "Services" },
  { href: "#approach", label: "Approach" },
  { href: "#contact", label: "Contact" },
] as const;

export const TECH_LOGOS = [
  { name: "OpenAI", icon: "Bot" },
  { name: "Python", icon: "Code2" },
  { name: "AWS", icon: "Cloud" },
  { name: "Salesforce", icon: "BarChart3" },
  { name: "HubSpot", icon: "Target" },
  { name: "Slack", icon: "MessageSquare" },
  { name: "Zapier", icon: "Zap" },
  { name: "Notion", icon: "BookOpen" },
  { name: "Teams", icon: "Users" },
  { name: "LangChain", icon: "Link" },
  { name: "Docker", icon: "Container" },
  { name: "PostgreSQL", icon: "Database" },
] as const;

export const SERVICES = [
  {
    icon: "Brain",
    title: "AI Strategy & Discovery",
    description:
      "We assess your business landscape, identify high-impact AI opportunities, and build a prioritised roadmap. No fluff, just actionable strategy tied to real outcomes.",
    features: ["Opportunity mapping", "Feasibility analysis", "Data pipeline planning"],
  },
  {
    icon: "PenTool",
    title: "Solution Design",
    description:
      "We architect AI solutions that fit your existing systems and workflows. Every design is production-ready from day one, not a proof of concept that gathers dust.",
    features: ["Architecture design", "Data pipeline planning", "Proof of concept"],
  },
  {
    icon: "Code2",
    title: "Custom AI Development",
    description:
      "From intelligent automation to natural language systems, we build bespoke AI solutions tailored to your business. Designed to integrate, scale, and deliver.",
    features: ["Custom model development", "LLM integration", "API development"],
  },
  {
    icon: "Plug",
    title: "Integration & Deployment",
    description:
      "We embed AI into your live operations, connecting to your data, your tools, and your team. Smooth deployment with zero disruption to your business.",
    features: ["System integration", "Cloud deployment", "Testing & QA"],
  },
  {
    icon: "Headphones",
    title: "AI Operations & Support",
    description:
      "It doesn't end at launch. We monitor performance, retrain models, and continuously optimise your systems so they keep delivering value long after deployment.",
    features: ["Performance monitoring", "Model retraining", "Continuous optimisation"],
  },
  {
    icon: "GraduationCap",
    title: "Training & Enablement",
    description:
      "We upskill your teams to own and evolve AI internally. Workshops, documentation, and hands-on training so your people become confident AI operators.",
    features: ["Team workshops", "Documentation", "Knowledge transfer"],
  },
] as const;

export const CRM_FEATURES = [
  {
    icon: "LayoutDashboard",
    title: "Custom Dashboards",
    description:
      "Real-time views of the metrics that matter to your team. No more wrestling between tools or drowning in empty reports.",
  },
  {
    icon: "Workflow",
    title: "Smart Integrations",
    description:
      "Connect your CRM to email, calendars, accounting, and any tools your team already uses. Everything in one place.",
  },
] as const;

export const VOICE_FEATURES = [
  {
    icon: "Phone",
    title: "AI Call Handling",
    description:
      "Intelligent call routing, automated responses, and 24/7 availability. Never miss a customer call again, even outside business hours.",
    features: ["Smart routing", "Auto-response", "24/7 availability"],
  },
  {
    icon: "Mic",
    title: "Voice Assistants",
    description:
      "Custom AI voice assistants that understand your business context. Handle inquiries, book appointments, and qualify leads automatically.",
    features: ["Natural language", "Context aware", "Multi-language"],
  },
  {
    icon: "FileText",
    title: "Transcription & Analytics",
    description:
      "Automatic call transcription, sentiment analysis, and conversation intelligence. Turn every call into actionable data.",
    features: ["Real-time transcription", "Sentiment analysis", "Topic extraction"],
  },
] as const;

export const PROCESS_STEPS = [
  {
    number: 1,
    title: "Discover",
    description:
      "We start by understanding your business, your data, and where AI can make the biggest impact. A focused discovery phase that maps opportunity to feasibility.",
  },
  {
    number: 2,
    title: "Design",
    description:
      "We architect a solution that fits your world. Your systems, your team, your constraints. Every design decision is grounded in what will actually work in production.",
  },
  {
    number: 3,
    title: "Build",
    description:
      "Agile development with continuous feedback. We build in sprints, demo regularly, and iterate fast. You see progress weekly, not quarterly.",
  },
  {
    number: 4,
    title: "Deploy",
    description:
      "Seamless integration into your live environment. We handle the migration, testing, and rollout so your team can focus on what they do best.",
  },
  {
    number: 5,
    title: "Support",
    description:
      "Ongoing monitoring, optimisation, and support. We stay with you post-launch to ensure your AI systems keep delivering results.",
  },
] as const;

export const WHAT_HAPPENS_NEXT = [
  "We review your inquiry and get back within 24 hours",
  "A 30-minute discovery call to understand your needs",
  "A tailored proposal with clear scope and outcomes",
] as const;

export const FOOTER_SERVICES = [
  "AI Strategy & Discovery",
  "Solution Design",
  "Custom AI Development",
  "Bespoke CRM Solutions",
  "AI Voice Tools",
  "Integration & Deployment",
  "AI Operations & Support",
  "Training & Enablement",
] as const;

export const FOOTER_COMPANY = [
  { label: "Services", href: "#services" },
  { label: "Our Approach", href: "#approach" },
  { label: "About", href: "#about" },
  { label: "Contact", href: "#contact" },
] as const;
