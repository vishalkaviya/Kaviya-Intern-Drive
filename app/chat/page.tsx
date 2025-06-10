// app/chat/page.tsx

import ChatBox from '../../components/ChatBox';

export default function ChatPage() {
  return (
    <main style={styles.main}>
      <h1 style={styles.heading}>💬 Gemini Chat</h1>
      <ChatBox />
    </main>
  );
}

const styles: { [key: string]: React.CSSProperties } = {
  main: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    padding: '2rem',
    fontFamily: 'Arial, sans-serif',
    backgroundColor:'aquamarine',
  },
  heading: {
    fontSize: '2rem',
    marginBottom: '1rem',
  },
};
