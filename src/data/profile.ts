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
    'Senior Backend Engineer with 5+ years building distributed enterprise SaaS on Ruby on Rails, Sidekiq, Redis, and Kafka. Team lead for 4 engineers at DispatchTrack on AI-operable platform (MCP, domain agents, Jira-to-PR automation) and Rails 2 to Rails 8 migration, consolidating Delayed Job, Resque, and RabbitMQ into Sidekiq across ~80 background workloads. Experience across logistics, healthcare, fintech, and fleet platforms.',

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
        'MCP',
        'Agent workflows',
        'Domain playbooks',
        'Guardrail layering',
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
        'Built AI-operable harness with AGENTS.md manifest, MCP integrations (Jira, Bitbucket, Confluence), governed tool-callable surfaces, and Explore-Planner-Generator-Evaluator agent layers.',
        'Automated Jira-to-merged-PR pipeline with RSpec, Vitest, Playwright validation, AI diff review, changelog/ADR, Overcommit hooks, and Bitbucket CI.',
        'Rewrote Rails 2 monolith into Rails 8, migrating 50+ controller surfaces into domain-driven modules with parallel-stack coexistence during live cutover.',
        'Consolidated Delayed Job, Resque, and RabbitMQ into Sidekiq Pro across ~80 workloads; 3-tier queue isolation (realtime / imports / background), cache twin invalidation, and JWT routing APIs; building event-driven automation on Kafka.',
        'Lead a team of 4 engineers; own sprint planning, backlog prioritization, and agile delivery for migration and platform engineering work.',
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
        'Engineered Rails 6.1 + PostgreSQL backend for care-coordination workflows; designed Sidekiq async pipelines to decouple long-running clinical operations from synchronous request paths under peak load.',
        'Tuned PostgreSQL performance with pgHero and production observability (Sentry, New Relic, Grafana) on Aptible-hosted infrastructure.',
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
        'Designed Rails 6 multi-tenant SaaS backend with MongoDB, REST APIs, and idempotent webhook handlers syncing Zoho Books, CRM, and Inventory on AWS.',
        'Developed Rails 5 fintech APIs with JWT/OAuth and Smallcase Gateway; tuned MongoDB and MySQL query paths for transaction-heavy operations.',
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
        'Led backend delivery for Upshift Cars (Rails 6, PostgreSQL, Stripe, Chekr) and Fleetwaze truck logistics APIs (Rails 3.2) with Docker deployment.',
        'Designed stateful trip lifecycle workflows with AASM and Sidekiq for high-volume booking and status transitions.',
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
        'Built Rails 5.1.7 + PostgreSQL backend for legal case management with filing workflows and third-party integrations (Documo, Nylas, mFax).',
        'Designed facade-based data access layers to optimize high-volume matter and document retrieval across complex schemas.',
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
        'Strangler-fig migration: domain-driven modules in Rails 8 running parallel to the legacy stack. 50+ controller surfaces migrated incrementally with coexistence routing during live cutover.',
      outcomes: [
        '50+ controller surfaces migrated into domain modules',
        'Parallel-stack routing — zero big-bang cutover',
        'Team of 4 delivering sprint-by-sprint migration',
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
        'Unified on Sidekiq Pro with 3-tier queue isolation (realtime / imports / background), cache twin invalidation, JWT routing APIs, and Kafka for event-driven automation.',
      outcomes: [
        '~80 workloads consolidated into Sidekiq Pro',
        '3-tier queue isolation by latency SLA',
        'Kafka pipeline for event-driven automation',
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
        'Engineering workflow scattered across Jira, Bitbucket, Confluence, and CI — manual handoffs slowed delivery and made AI assistance unsafe without guardrails.',
      approach:
        'Built AI-operable harness: AGENTS.md manifest, MCP tool integrations, governed callable surfaces, and Explore-Planner-Generator-Evaluator agent layers. Automated Jira-to-merged-PR with full test gates.',
      outcomes: [
        'MCP integrations: Jira, Bitbucket, Confluence',
        'Jira → merged PR with RSpec, Vitest, Playwright gates',
        'E-P-G-E agent layers with guardrail layering',
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
