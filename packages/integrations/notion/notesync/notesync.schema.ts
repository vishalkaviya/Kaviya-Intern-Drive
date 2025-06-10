// notesync.schema.ts
// This file defines the input schema using Zod.

import { z } from 'zod';

// Input schema for listNotes
export const listNotesSchema = z.object({
  maxResults: z
    .number()
    .int()
    .positive()
    .max(100)
    .optional()
    .describe('Maximum number of notes to return (default 10, max 100).'),
  query: z
    .string()
    .min(1)
    .optional()
    .describe('Filter notes by title containing this query string.'),
});
