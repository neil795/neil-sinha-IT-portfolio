import { glob } from 'astro/loaders';
import { defineCollection, z } from 'astro:content';

const metricSchema = z.object({
  label: z.string(),
  before: z.string(),
  after: z.string(),
  timeframe: z.string(),
  confidence: z.enum(['exact', 'approx', 'directional']).default('exact'),
});

const caseStudies = defineCollection({
  loader: glob({ pattern: '**/*.json', base: './src/content/case-studies' }),
  schema: z.object({
    title: z.string(),
    slug: z.string(),
    companyContext: z.string(),
    problem: z.string(),
    intervention: z.string(),
    tradeoffs: z.string(),
    impact: z.array(metricSchema).min(1),
    tech: z.array(z.string()).default([]),
    featured: z.boolean().default(false),
    order: z.number().int().default(100),
  }),
});

const experience = defineCollection({
  loader: glob({ pattern: '**/*.json', base: './src/content/experience' }),
  schema: z.object({
    company: z.string(),
    title: z.string(),
    period: z.string(),
    summary: z.string(),
    highlights: z.array(z.string()).min(1),
    order: z.number().int().default(100),
  }),
});

const aiGovernance = defineCollection({
  loader: glob({ pattern: '**/*.json', base: './src/content/ai-governance' }),
  schema: z.object({
    title: z.string(),
    failureMode: z.string(),
    blastRadius: z.string(),
    guardrailAdded: z.string(),
    riskReduction: z.string(),
    order: z.number().int().default(100),
  }),
});

const meta = defineCollection({
  loader: glob({ pattern: '**/*.json', base: './src/content/meta' }),
  schema: z.object({
    heroTitle: z.string(),
    heroSubtitle: z.string(),
    ctaPrimary: z.string(),
    ctaRecruiter: z.string(),
    ctaFounder: z.string(),
    ctaConsulting: z.string(),
  }),
});

export const collections = {
  'case-studies': caseStudies,
  experience,
  'ai-governance': aiGovernance,
  meta,
};
