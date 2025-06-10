// Import Next.js Response helper
import { NextResponse } from 'next/server';

// TypeScript type for a To-Do item
type Todo = {
  id: number;
  title: string;
  completed: boolean;
};

// In-memory store for todos (lives only while the server is running)
const todos: Todo[] = [
  { id: 1, title: 'Learn Next.js App Router', completed: false },
  { id: 2, title: 'Build a full-stack project', completed: false },
  { id: 3, title: 'Deploy the project', completed: false },
];

// GET method - Return list of todos
export async function GET() {
  return NextResponse.json(todos);
}

// POST method - Accept new todo item
export async function POST(request: Request) {
  try {
    const body = await request.json();

    // Basic validation
    if (!body.title || typeof body.title !== 'string') {
      return NextResponse.json(
        { error: 'Title is required and must be a string' },
        { status: 400 }
      );
    }

    // Create new todo
    const newTodo: Todo = {
      id: todos.length + 1,
      title: body.title,
      completed: false,
    };

    // Add to in-memory store
    todos.push(newTodo);

    return NextResponse.json(newTodo, { status: 201 });
  } catch (error) {
    return NextResponse.json(
      { error: 'Invalid request body' },
      { status: 400 }
    );
  }
}
