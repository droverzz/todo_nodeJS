import { NextRequest, NextResponse } from "next/server";
import Todo from "../../../../../models/todo";

// PUT /api/todos/:id
export async function PUT(req: NextRequest, { params }: { params: { id: string } }) {
  try {
    const { id } = params;
    const body = await req.json();

    const todo = await Todo.findByPk(id);
    if (!todo) {
      return NextResponse.json({ error: "Todo not found" }, { status: 404 });
    }

    await todo.update(body);
    return NextResponse.json(todo);
  } catch (error) {
    console.error(error);
    return NextResponse.json({ error: "Failed to update todo" }, { status: 500 });
  }
}

// DELETE /api/todos/:id
export async function DELETE(_req: NextRequest, { params }: { params: { id: string } }) {
  try {
    const { id } = params;

    const todo = await Todo.findByPk(id);
    if (!todo) {
      return NextResponse.json({ error: "Todo not found" }, { status: 404 });
    }

    await todo.destroy();
    return NextResponse.json({ message: "Deleted" });
  } catch (error) {
    console.error(error);
    return NextResponse.json({ error: "Failed to delete todo" }, { status: 500 });
  }
}
