import { defineCollection } from 'astro:content';
import { glob } from 'astro/loaders';
import { z } from 'zod';

const speakers = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/data/speakers' }),
  schema: z.object({
    slug: z.string(),
    name: z.string(),
    role: z.string(),
    bio: z.string(),
    talkTitle: z.string().optional(),
    talkAbstract: z.string().optional(),
    tracks: z.array(z.string()).default([]),
    links: z
      .object({
        web: z.url().optional(),
        twitter: z.string().optional(),
        linkedin: z.string().optional(),
        github: z.string().optional(),
      })
      .default({}),
    photo: z.string().optional(),
    locale: z.enum(['ca', 'en', 'es']).default('ca'),
  }),
});

const talks = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/data/talks' }),
  schema: z.object({
    slug: z.string(),
    title: z.string(),
    abstract: z.string(),
    speakerSlug: z.string(),
    track: z.enum(['open-source', 'devops-sre', 'ai-data', 'web-dev']),
    level: z.enum(['beginner', 'intermediate', 'advanced']).optional(),
    room: z.string().optional(),
    time: z.string().optional(),
    lang: z.enum(['ca', 'en', 'es']).default('ca'),
    locale: z.enum(['ca', 'en', 'es']).default('ca'),
  }),
});

const tracks = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/data/tracks' }),
  schema: z.object({
    slug: z.string(),
    name: z.string(),
    color: z.string(),
    description: z.string(),
    locale: z.enum(['ca', 'en', 'es']).default('ca'),
  }),
});

const sponsors = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/data/sponsors' }),
  schema: z.object({
    name: z.string(),
    tier: z.enum(['mb', 'gb', 'tb', 'pb', 'collaborator']),
    logo: z.string().optional(),
    url: z.url(),
    order: z.number().default(99),
    locale: z.enum(['ca', 'en', 'es']).default('ca'),
  }),
});

const pages = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/data/pages' }),
  schema: z.object({
    slug: z.string(),
    section: z.string(),
    locale: z.enum(['ca', 'en', 'es']).default('ca'),
  }),
});

export const collections = { speakers, talks, tracks, sponsors, pages };
