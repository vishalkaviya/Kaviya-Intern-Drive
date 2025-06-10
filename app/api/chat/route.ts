// app/api/chat/route.ts

import { NextResponse } from 'next/server';

const GEMINI_API_URL =
  'https://generativelanguage.googleapis.com/v1/models/gemini-1.5-flash:generateContent';


const GEMINI_API_KEY = process.env.GEMINI_API_KEY!;

export async function POST(req: Request) {
  try {
    const { message } = await req.json();

    const res = await fetch(`${GEMINI_API_URL}?key=${GEMINI_API_KEY}`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        contents: [
          {
            parts: [
              {
                text: message || 'Hello!',
              },
            ],
          },
        ],
      }),
    });

    const data = await res.json();

    //console.log('📦 Gemini Response:', JSON.stringify(data, null, 2));

    const botReply =
      data?.candidates?.[0]?.content?.parts?.[0]?.text ||
      'Sorry, I have no reply from Gemini.';

    return NextResponse.json({ reply: botReply });
  } catch (error: unknown) {
    console.error('❌ Error in Gemini Chat API:', error);
    return NextResponse.json({ reply: 'Error calling Gemini API.' });
  }
}
