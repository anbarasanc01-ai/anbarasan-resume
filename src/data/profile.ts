export const profile = {
  name: 'Anbarasan C',
  title: 'Senior Backend Engineer',
  tagline: 'Rails · Sidekiq · Kafka · AI Platform',
  location: 'Chennai, India',
  email: 'anbarasanc01@gmail.com',
  phone: '+91 8939673184',
  linkedin: 'https://linkedin.com/in/anbarasanc',
  github: 'https://github.com/anbarasanc01-ai',
  siteUrl: 'https://anbarasan-resume.vercel.app',
  pdfUrl: '/Anbarasan_Resume_FInal.pdf',
  yearsExperience: 5,

  summary:
    'Senior Backend Engineer with 5+ years on distributed enterprise SaaS (Rails, Sidekiq, Redis, Kafka). Team lead for 4 at DispatchTrack—owning Rails 2→8 modernization, Sidekiq consolidation (~80 workloads), and AI-assisted engineering platform (Jira-to-PR automation). Logistics, healthcare, fintech, and fleet.',

  metrics: [
    { label: 'Years', value: '5+' },
    { label: 'Team led', value: '4' },
    { label: 'Sidekiq workloads', value: '~80' },
    { label: 'Rails controllers migrated', value: '50+' },
  ],

  skills: [
    {
      category: 'Languages',
      items: ['Ruby', 'JavaScript', 'TypeScript', 'SQL'],
    },
    {
      category: 'Backend',
      items: [
        'Ruby on Rails (2.x–8.x)',
        'REST APIs',
        'Sidekiq Pro',
        'Kafka',
        'JWT',
        'OAuth',
        'AASM',
      ],
    },
    {
      category: 'AI Platform',
      items: [
        'LLM tool calling',
        'MCP integrations',
        'Agent workflows',
        'Governed SDLC automation',
      ],
    },
    {
      category: 'Databases',
      items: ['PostgreSQL', 'MySQL', 'MongoDB', 'Redis', 'Cassandra'],
    },
    {
      category: 'Cloud & DevOps',
      items: ['AWS (EC2, S3)', 'Docker', 'Kubernetes', 'Jenkins', 'CI/CD'],
    },
    {
      category: 'Testing',
      items: ['RSpec', 'Vitest', 'Playwright', 'Jest'],
    },
    {
      category: 'Observability',
      items: ['Sentry', 'New Relic', 'Grafana', 'SigNoz', 'pgHero'],
    },
    {
      category: 'AI Dev Tools',
      items: ['Cursor', 'Claude Code', 'Codex', 'Antigravity'],
    },
  ],

  experience: [
    {
      id: 'dispatchtrack',
      role: 'Software Engineer',
      company: 'DispatchTrack',
      location: 'Hyderabad',
      period: 'May 2024 – Present',
      project: 'B2B & B2C Enterprise logistics SaaS',
      highlight: true,
      bullets: [
        'Built governed AI-assisted platform with LLM integrations (Jira, Bitbucket, Confluence)—automating ticket-to-code with test-gated, reviewable changes.',
        'Automated Jira-to-merged-PR with RSpec, Vitest, Playwright, AI diff review, and Bitbucket CI—reducing SDLC handoffs from ticket to release.',
        'Led Rails 2→8 migration of 50+ controllers into domain modules with parallel-stack live cutover—incremental rollout without big-bang downtime.',
        'Consolidated Delayed Job, Resque, and RabbitMQ into Sidekiq Pro (~80 workloads); 3-tier queue isolation and cache twin invalidation—improving async reliability; extending to Kafka.',
        'Lead team of 4; own sprint planning, backlog prioritization, and technical direction for platform modernization.',
      ],
    },
    {
      id: 'sysvine',
      role: 'Software Engineer III',
      company: 'Sysvine Technologies',
      location: 'Chennai',
      period: 'Nov 2023 – May 2024',
      project: 'Thoroughcare (Healthcare care coordination)',
      bullets: [
        'Built Rails 6.1 + PostgreSQL care-coordination backend; Sidekiq pipelines isolate long clinical jobs from sync paths—keeping peak-load workflows responsive.',
        'Tuned PostgreSQL with pgHero and observability (Sentry, New Relic, Grafana) on Aptible—improving reliability under clinical peak load.',
      ],
    },
    {
      id: 'presto',
      role: 'Software Engineer',
      company: 'Presto Apps',
      location: 'Bengaluru',
      period: 'Feb 2023 – Oct 2023',
      project: 'Presto Web App (Marketplace SaaS), Presto Finance (Fintech)',
      bullets: [
        'Rails 6 multi-tenant SaaS with idempotent Zoho webhook sync (Books, CRM, Inventory) on AWS—consistent billing and inventory across tenants.',
        'Rails 5 fintech APIs (JWT/OAuth, Smallcase); tuned MongoDB/MySQL for transaction-heavy investment flows.',
      ],
    },
    {
      id: 'justmind',
      role: 'Senior Ruby on Rails Developer',
      company: 'Just Mind Work Pvt Ltd',
      location: 'Indore',
      period: 'Sep 2022 – Jan 2023',
      project: 'Upshift Cars, Fleetwaze, Budget Countertops',
      bullets: [
        'Led backend for Upshift Cars (Rails 6, Stripe, Chekr) and Fleetwaze logistics APIs (Rails 3.2) with Docker—shipping rental and fleet booking to production.',
        'Designed AASM + Sidekiq trip lifecycle workflows for high-volume bookings—reliable concurrent state transitions under load.',
      ],
    },
    {
      id: 'veezolvian',
      role: 'Software Engineer',
      company: 'Veezolvian Technologies',
      location: 'Trichy',
      period: 'Sep 2020 – Aug 2022',
      project: 'Growpath (Legal case management)',
      bullets: [
        'Built Rails 5.1 legal case-management backend with filing workflows and integrations (Documo, Nylas, mFax)—supporting high-volume matter operations.',
        'Facade-based data access over complex schemas—faster matter and document retrieval for large caseloads.',
      ],
    },
  ],

  education: {
    degree: 'B.E. Mechanical Engineering',
    school: 'Anna University, Chennai',
    period: '2013 – 2017',
    detail: 'CGPA: 8.83 / 10',
  },

  domains: ['Logistics', 'Healthcare', 'Fintech', 'Fleet', 'Legal SaaS'],

  caseStudies: [
    {
      id: 'rails-migration',
      title: 'Rails 2 → Rails 8 Migration',
      company: 'DispatchTrack',
      role: 'Team Lead · Platform Engineering',
      problem:
        'Legacy Rails 2 monolith blocked modern features, security patches, and team velocity. Full rewrite risked production downtime on a live B2B/B2C logistics platform.',
      approach:
        'Strangler-fig migration: domain-driven modules in Rails 8 running parallel to the legacy stack. 50+ controller surfaces migrated incrementally with coexistence routing—shipping production cutovers without a big-bang release.',
      outcomes: [
        '50+ controller surfaces migrated into domain modules',
        'Parallel-stack routing enabled incremental live cutover',
        'Team of 4 delivering sprint-by-sprint migration with continued feature delivery',
      ],
      stack: ['Ruby on Rails 2.x', 'Rails 8', 'PostgreSQL', 'Redis', 'RSpec'],
      diagram: `┌─────────────────┐         ┌────────────────────────────────────┐
│  Rails 2        │         │  Rails 8 — Domain Modules          │
│  Monolith       │ ──────▶ │  Orders │ Dispatch │ Billing │ …   │
│  (legacy stack) │ routing │  parallel-stack coexistence        │
└─────────────────┘         └────────────────────────────────────┘
         │                              │
         └──────── live traffic ────────┘`,
    },
    {
      id: 'sidekiq-consolidation',
      title: 'Async Consolidation (~80 Workloads)',
      company: 'DispatchTrack',
      role: 'Backend / Platform',
      problem:
        'Background processing split across Delayed Job, Resque, and RabbitMQ — fragmented observability, inconsistent retry semantics, and operational overhead.',
      approach:
        'Unified on Sidekiq Pro with 3-tier queue isolation (realtime / imports / background), cache twin invalidation, JWT routing APIs, and Kafka for event-driven automation—simplifying ops across a single async substrate.',
      outcomes: [
        '~80 workloads consolidated into Sidekiq Pro',
        '3-tier queue isolation reduced cross-workload contention',
        'Clearer operability and path to Kafka event automation',
      ],
      stack: ['Sidekiq Pro', 'Redis', 'Kafka', 'Ruby', 'JWT APIs'],
      diagram: `  Delayed Job ──┐
  Resque      ──┼──▶  Sidekiq Pro  (~80 workloads)
  RabbitMQ    ──┘            │
                    ┌────────┼────────┐
                    ▼        ▼        ▼
               realtime  imports  background
                    │                 │
                    └──────▶ Kafka events`,
    },
    {
      id: 'ai-platform',
      title: 'AI-Operable Engineering Platform',
      company: 'DispatchTrack',
      role: 'Platform / AI Engineering',
      problem:
        'Engineering workflow scattered across Jira, Bitbucket, Confluence, and CI—manual handoffs slowed delivery and made AI-assisted changes risky without governance.',
      approach:
        'Built AI-assisted engineering platform with governed LLM tool integrations and agent workflows. Automated Jira-to-merged-PR with RSpec, Vitest, Playwright, AI diff review, and CI gates.',
      outcomes: [
        'Jira ticket to merged PR with governed tool access',
        'RSpec, Vitest, and Playwright gating every automated change',
        'Reduced manual SDLC handoffs while keeping changes reviewable',
      ],
      stack: ['MCP', 'LLM tool calling', 'RSpec', 'Vitest', 'Playwright', 'Bitbucket CI'],
      diagram: `  Jira ticket
      │
      ▼
  ┌─────────┐    ┌────────┐    ┌───────────┐    ┌──────────┐
  │ Explore │───▶│  Plan  │───▶│ Generate  │───▶│ Evaluate │──▶ Merged PR
  └─────────┘    └────────┘    └───────────┘    └──────────┘
      │               │               │
      └───────────────┴───────────────┘
              MCP tools (Bitbucket, Confluence, CI)`,
    },
  ],
} as const

export type Experience = (typeof profile.experience)[number]
export type CaseStudy = (typeof profile.caseStudies)[number]
