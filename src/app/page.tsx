"use client";

import { useState, useEffect } from "react";

type Todo = { id: number; task: string; done: boolean };

export default function Home() {
  const [todos, setTodos] = useState<Todo[]>([]);
  const [input, setInput] = useState("");
  const [editingId, setEditingId] = useState<number | null>(null);
  const [editText, setEditText] = useState("");

  // โหลด todos
  useEffect(() => {
    fetch("/api/todos")
      .then((res) => res.json())
      .then((data) => setTodos(data));
  }, []);

  // เพิ่ม task
  const addTodo = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!input.trim()) return;

    const res = await fetch("/api/todos", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ task: input }),
    });

    const newTodo = await res.json();
    setTodos([...todos, newTodo]);
    setInput("");
  };

  // toggle done
  const toggleDone = async (id: number, done: boolean) => {
    const res = await fetch(`/api/todos/${id}`, {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ done: !done }),
    });
    const updated = await res.json();
    setTodos(todos.map((t) => (t.id === id ? updated : t)));
  };

  // ลบ
  const deleteTodo = async (id: number) => {
    await fetch(`/api/todos/${id}`, { method: "DELETE" });
    setTodos(todos.filter((t) => t.id !== id));
  };

  // เริ่มแก้ไข
  const startEdit = (id: number, task: string) => {
    setEditingId(id);
    setEditText(task);
  };

  // บันทึกแก้ไข
  const saveEdit = async (id: number) => {
    const res = await fetch(`/api/todos/${id}`, {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ task: editText }),
    });
    const updated = await res.json();
    setTodos(todos.map((t) => (t.id === id ? updated : t)));
    setEditingId(null);
    setEditText("");
  };

  return (
    <main className="flex min-h-screen flex-col items-center justify-center bg-gray-100">
      <div className="bg-white rounded shadow p-8 w-full max-w-md">
        <h1 className="text-2xl font-bold mb-4">Todo List</h1>

        {/* input เพิ่มงาน */}
        <form className="flex mb-4" onSubmit={addTodo}>
          <input
            className="flex-1 border p-2 rounded-l"
            placeholder="เพิ่มงานใหม่..."
            value={input}
            onChange={(e) => setInput(e.target.value)}
          />
          <button
            className="bg-blue-500 text-white px-4 py-2 rounded-r hover:bg-blue-600"
            type="submit"
          >
            เพิ่ม
          </button>
        </form>

        {/* list */}
        <ul>
          {todos.map((todo) => (
            <li
              key={todo.id}
              className="flex items-center justify-between py-2 border-b"
            >
              <div className="flex items-center gap-2">
                <input
                  type="checkbox"
                  checked={todo.done}
                  onChange={() => toggleDone(todo.id, todo.done)}
                />
                {editingId === todo.id ? (
                  <input
                    className="border p-1"
                    value={editText}
                    onChange={(e) => setEditText(e.target.value)}
                  />
                ) : (
                  <span className={todo.done ? "line-through text-gray-500" : ""}>
                    {todo.task}
                  </span>
                )}
              </div>

              <div className="flex gap-2">
                {editingId === todo.id ? (
                  <>
                    <button
                      onClick={() => saveEdit(todo.id)}
                      className="text-green-600 hover:underline"
                    >
                      บันทึก
                    </button>
                    <button
                      onClick={() => setEditingId(null)}
                      className="text-gray-500 hover:underline"
                    >
                      ยกเลิก
                    </button>
                  </>
                ) : (
                  <button
                    onClick={() => startEdit(todo.id, todo.task)}
                    className="text-blue-600 hover:underline"
                  >
                    แก้ไข
                  </button>
                )}

                <button
                  onClick={() => deleteTodo(todo.id)}
                  className="text-red-600 hover:underline"
                >
                  ลบ
                </button>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </main>
  );
}
