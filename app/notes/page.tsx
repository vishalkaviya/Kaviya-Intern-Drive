'use client';

import { useEffect, useState } from 'react';

// Note type
type Note = {
  id: string;
  title: string;
  content: string;
};

// Mock note fetcher
async function listNotes(input: { maxResults?: number; query?: string }): Promise<Note[]> {
  const MOCK_NOTES: Note[] = [
    { id: '1', title: 'Meeting Notes', content: 'Discuss project roadmap.' },
    { id: '2', title: 'Shopping List', content: 'Milk, Bread, Eggs.' },
    { id: '3', title: 'Ideas', content: 'Build a note-taking app.' },
    { id: '4', title: 'Project Plan', content: 'Timeline and deliverables.' },
    { id: '5', title: 'Daily Journal', content: 'Reflections and notes.' },
  ];

  const lowerQuery = (input.query ?? '').toLowerCase();

  const filtered = MOCK_NOTES.filter(note =>
    note.title.toLowerCase().includes(lowerQuery) ||
    note.content.toLowerCase().includes(lowerQuery)
  );

  return filtered.slice(0, input.maxResults ?? 10);
}

export default function NotesPage() {
  const [notes, setNotes] = useState<Note[]>([]);
  const [query, setQuery] = useState('');
  const [maxResults, setMaxResults] = useState<number>(5);
  const [searchText, setSearchText] = useState('');

  const fetchNotes = async () => {
    const data = await listNotes({ maxResults, query });
    setNotes(data);
  };

  // Fetch notes on mount and when query/maxResults changes
  useEffect(() => {
    fetchNotes();
  }, [query, maxResults]);

  const handleSearch = () => {
    setQuery(searchText); // triggers useEffect
  };

  return (
    <main style={styles.container}>
      <h1 style={styles.heading}>🗒️ Notesync - Notes List</h1>

      <div style={styles.controls}>
        <input
          type="text"
          placeholder="Search notes..."
          value={searchText}
          onChange={(e) => setSearchText(e.target.value)}
          style={styles.input}
        />
        <button onClick={handleSearch} style={styles.button}>
          🔍 Search
        </button>
      </div>

      <ul style={styles.notesList}>
        {notes.length > 0 ? (
          notes.map((note) => (
            <li key={note.id} style={styles.noteItem}>
              <h3>{note.title}</h3>
              <p>{note.content}</p>
            </li>
          ))
        ) : (
          <p style={{ textAlign: 'center', color: '#777' }}>No notes found.</p>
        )}
      </ul>
    </main>
  );
}

// Inline CSS styles
const styles: { [key: string]: React.CSSProperties } = {
  container: {
    padding: '2rem',
    fontFamily: 'Arial, sans-serif',
    backgroundColor: '#f9f9f9',
    minHeight: '100vh',
  },
  heading: {
    fontSize: '2rem',
    marginBottom: '1.5rem',
    textAlign: 'center',
    color: '#333',
  },
  controls: {
    display: 'flex',
    justifyContent: 'center',
    marginBottom: '2rem',
    gap: '1rem',
    flexWrap: 'wrap',
  },
  input: {
    padding: '0.5rem',
    fontSize: '1rem',
    borderRadius: '5px',
    border: '2px solid black',
    width: '200px',
  },
  button: {
    padding: '0.5rem 1rem',
    fontSize: '1rem',
    backgroundColor: '#007bff',
    color: '#fff',
    border: 'none',
    borderRadius: '5px',
    cursor: 'pointer',
  },
  notesList: {
    listStyleType: 'none',
    padding: 0,
    maxWidth: '600px',
    margin: '0 auto',
  },
  noteItem: {
    backgroundColor: '#fff',
    padding: '1rem',
    marginBottom: '1rem',
    borderRadius: '8px',
    boxShadow: '0 2px 5px rgba(0,0,0,0.1)',
  },
};
