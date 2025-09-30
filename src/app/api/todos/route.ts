import { NextRequest, NextResponse } from "next/server";
import Todo from "../../../../models/todo";

// GET /api/todos
export async function GET() {
  try {
    const todos = await Todo.findAll();
    return NextResponse.json(todos);
  } catch (error) {
    console.error(error);
    return NextResponse.json({ error: "Failed to fetch todos" }, { status: 500 });
  }
}

// POST /api/todos
export async function POST(req: NextRequest) {
  try {
    const { task } = await req.json();
    if (!task || !task.trim()) {
      return NextResponse.json({ error: "Task is required" }, { status: 400 });
    }

    const todo = await Todo.create({ task });
    return NextResponse.json(todo);
  } catch (error) {
    console.error(error);
    return NextResponse.json({ error: "Failed to create todo" }, { status: 500 });
  }
}
