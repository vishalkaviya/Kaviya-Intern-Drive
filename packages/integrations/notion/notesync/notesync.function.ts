// notesync.functions.ts
// This file defines the "listNotes" API function with a mocked response.

import { z } from 'zod';
import { listNotesSchema } from './notesync.schema';

// Define input type
type ListNotesInput = z.infer<typeof listNotesSchema>;

// Define Note type
type Note = {
  id: string;
  title: string;
  content: string;
};

// Mocked list of notes (static data)
const MOCK_NOTES: Note[] = [
  { id: '1', title: 'Meeting Notes', content: 'Discuss project roadmap.' },
  { id: '2', title: 'Shopping List', content: 'Milk, Bread, Eggs.' },
  { id: '3', title: 'Ideas', content: 'Build a note-taking app.' },
  { id: '4', title: 'Project Plan', content: 'Timeline and deliverables.' },
  { id: '5', title: 'Daily Journal', content: 'Reflections and notes.' },
];

// API function: listNotes
export async function listNotes(input: ListNotesInput): Promise<Note[]> {
  // Validate input against schema
  listNotesSchema.parse(input);

  // Start with all notes
  let filteredNotes = MOCK_NOTES;

  // If query is provided, filter notes by title (case-insensitive)
  if (typeof input.query === 'string' && input.query.trim() !== '') {
    const lowerQuery = input.query.toLowerCase();
    filteredNotes = MOCK_NOTES.filter((note) =>
      note.title.toLowerCase().includes(lowerQuery)
    );
  }

  // Limit results to maxResults (default 10 if not provided)
  const maxResults = input.maxResults ?? 10;
  return filteredNotes.slice(0, maxResults);
}
