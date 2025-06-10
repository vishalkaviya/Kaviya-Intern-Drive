'use client';

import { useState } from 'react';

type Message = { role: 'user' | 'bot'; content: string };

export default function ChatBox() {
  const [messages, setMessages] = useState<Message[]>([]);
  const [input, setInput] = useState('');
  const [loading, setLoading] = useState(false);

  const handleSend = async () => {
    if (!input.trim()) return;

    const userMessage: Message = { role: 'user', content: input };
    setMessages((prev) => [...prev, userMessage]);
    setInput('');
    setLoading(true);

    try {
      const res = await fetch('/api/chat', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ message: userMessage.content }),
      });

      const data = await res.json();

      const botMessage: Message = { role: 'bot', content: data.reply };
      setMessages((prev) => [...prev, botMessage]);
    } catch (error) {
      console.error('❌ Chat Send Error:', error);
      setMessages((prev) => [
        ...prev,
        { role: 'bot', content: 'There was an error. Try again.' },
      ]);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div style={styles.container}>
      <div style={styles.chatWindow}>
        {messages.map((msg, index) => (
          <div
            key={index}
            style={{
              ...styles.message,
              alignSelf: msg.role === 'user' ? 'flex-end' : 'flex-start',
              backgroundColor: msg.role === 'user' ? '#dcf8c6' : '#f1f0f0',
            }}
          >
            {msg.content}
          </div>
        ))}
        {loading && (
          <div style={{ ...styles.message, fontStyle: 'italic' }}>Typing...</div>
        )}
      </div>

      <div style={styles.inputArea}>
        <input
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="Type your message..."
          onKeyDown={(e) => e.key === 'Enter' && handleSend()}
          style={styles.input}
        />
        <button onClick={handleSend} style={styles.button} disabled={loading}>
          Send
        </button>
      </div>
    </div>
  );
}

const styles: { [key: string]: React.CSSProperties } = {
  container: {
    width: '100%',
    maxWidth: '600px',
    margin: '0 auto',
    display: 'flex',
    flexDirection: 'column',
    gap: '1rem',
  },
  chatWindow: {
    height: '580px',
    overflowY: 'auto',
    display: 'flex',
    flexDirection: 'column',
    gap: '0.5rem',
    border: '2px solid black',
    padding: '1rem',
    borderRadius: '25px',
    background: 'aqua',
  },
  message: {
    padding: '0.6rem 1rem',
    borderRadius: '12px',
    maxWidth: '75%',
  },
  inputArea: {
    display: 'flex',
    gap: '0.5rem',
    
  },
  input: {
    flex: 1,
    padding: '0.5rem 1rem',
    borderRadius: '25px',
    color:'black',
    border:'2px solid black',
  },
  button: {
    padding: '0.5rem 1rem',
    borderRadius: '15px',
    background: '#007bff',
    color: 'white',
    border: 'none',
    cursor: 'pointer',
    fontWeight:'bold',
  },
};
