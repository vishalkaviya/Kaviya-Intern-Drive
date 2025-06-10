// app/page.tsx

'use client';

import Link from 'next/link';

export default function HomePage() {
  return (
    <main style={styles.main}>
      
      <h1 style={styles.heading}> My Full Stack Project Hub</h1>
      <p style={styles.subheading}>Select a project to explore:</p>

      <div style={styles.navLinks}>
        <Link href="/todos" style={styles.link}>
          📝 ToDo App
        </Link>
        <Link href="/notes" style={styles.link}>
          🗂️ NoteSync (Mock Integration)
        </Link>
        <Link href="/chat" style={styles.link}>
          💬 Gemini Chat
        </Link>
      </div>
    </main>
  );
}

const styles: { [key: string]: React.CSSProperties } = {
  main: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    minHeight: '100vh',
    padding: '2rem',
    fontFamily: 'Arial, sans-serif',
    background: '#f0f4f8',
  },
  heading: {
    fontSize: '3rem',
    marginBottom: '1rem',
  },
  subheading: {
    fontSize: '1.2rem',
    marginBottom: '2rem',
    color: '#555',
  },
  navLinks: {
    display: 'flex',
    flexDirection: 'column',
    gap: '1rem',
  },
  link: {
    fontSize: '1.5rem',
    textDecoration: 'none',
    color: '#007bff',
    padding: '0.8rem 1.5rem',
    border: '2px solid #007bff',
    borderRadius: '10px',
    transition: 'all 0.2s',
    textAlign: 'center',
  },
};
