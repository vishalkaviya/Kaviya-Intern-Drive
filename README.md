
🎓 Kaviya V – Full-Stack Internship Portfolio

A hands-on full-stack development portfolio built with Next.js 14, demonstrating practical skills through real-time, responsive applications like a To-do List, AI Chatbot, and Notes Viewer.

🌐 GitHub: https://github.com/vishalkaviya/Kaviya-Intern-Drive
🚀 Live Site: https://kaviya-intern-drive-n1k7.vercel.app/


---

📚 Table of Contents

📌 Project Highlights

🛠️ Tech Stack

⚙️ Installation & Setup

💻 Running the App Locally

📁 Folder Structure

🌍 Deployment Info



---

📌 Project Highlights

✅ 1. To-do List

Add, mark complete, and remove tasks

Built with useState & useEffect for dynamic updates

Clean, intuitive UI for daily productivity


📝 2. NoteSync

Displays user details like name, hobbies, and skills

Professionally structured as a notes layout

Simple and visually clear presentation


🤖 3. AI Chatbot

Real-time interaction using Google Gemini Pro API

Sleek custom chat UI with gradient-styled bubbles

🚀 Getting Started – Next.js Project

This project was bootstrapped using Create Next App and is powered by Next.js 14 with the App Router.

🛠️ Run the Development Server

You can start the app locally using any of the following commands:

npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev

Once the server is running, open http://localhost:3000 in your browser to see the app in action.

Start editing by modifying app/page.tsx. Changes are reflected in real time, thanks to automatic hot reloading.

This setup uses next/font for optimized font loading, featuring Geist, a modern typeface from Vercel.


---

📚 Learn More About Next.js

Next.js Documentation – Explore key features and APIs

Interactive Next.js Tutorial – Learn by building

GitHub Repository – Contribute or follow development



---

🌐 Deployment via Vercel

For seamless deployment, the project is hosted on Vercel, the official platform for Next.js applications. You can find detailed deployment instructions in the Next.js Deployment Guide.


---

🤖 Part 3: AI Chat Integration (Gemini Pro API)

💡 Objective

To simulate a smart, responsive AI chatbot experience, I integrated Google’s Gemini Pro API into the project. This enhances the full-stack application with conversational AI features.

🔍 Why Gemini Pro?

Generates intelligent and context-aware responses

Easily integrates with Next.js via RESTful API

Ideal for real-time chat interfaces

Natively fits within Google's ecosystem

Scalable and secure for production-ready AI use



---

⚙️ Implementation Overview

Backend Integration

Created an API route at app/api/chat/route.ts

Receives POST requests containing user input

Sends a prompt to Gemini API and processes the response

Returns a clean JSON reply to the frontend


Frontend Workflow (ChatPage.tsx)

Accepts user input through an input field

Sends the message to /api/chat using fetch()

Renders the AI-generated response in a styled chat bubble UI



---

🔄 Optional Enhancement: Streaming Responses

Although the current setup uses static replies, Gemini Pro also supports streaming output for real-time interactions.

To implement streaming:

Use ReadableStream in the backend API handler

On the frontend, handle the stream using EventSource or WebSocket-like behavior

Update the UI live, simulating a “typing” assistant experience



---


Provides a conversational AI experience


📄 4. Documents Section (Optional)

Frontend UI designed for document display

Backend functionality to be integrated in future updates



---

🛠️ Tech Stack

Framework: Next.js 14 (App Router)

Frontend: React, TypeScript, CSS (inline styling)

AI Integration: Google Gemini Pro API

Deployment: Vercel

Version Control: Git + GitHub



---

⚙️ Installation & Setup

# 1. Clone the repository
git clone https://github.com/vishalkaviya/Kaviya-Intern-Drive

# 2. Navigate to the project folder
cd Fullstack-Intern

# 3. Install dependencies
npm install


---

💻 Run Locally

npm run dev

Visit the app at: http://localhost:3000


---

📁 Folder Structure

app/
├── todo/             → To-do List Interface (page.tsx)
├── notes/            → NoteSync (User Profile Display)
├── chat/             → AI Chatbot Component
├── documents/        → Documents UI Section
├── api/
│   └── chat/         → Google Gemini API Integration (route.ts)
└── layout.tsx        → Shared Page Layout


---

🌍 Deployment

Live version available at:
🔗https://kaviya-intern-drive-n1k7.vercel.app/
