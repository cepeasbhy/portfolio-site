"use client";

import "@/app/todo.css";
import { FormEvent, useState } from "react";

export default function Page() {
  const [taskList, setTaskList] = useState<string[]>([]);

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();

    const formData = new FormData(e.target as HTMLFormElement);
    const taskItem = formData.get("task")!.toString().trim();

    setTaskList([...taskList, taskItem]);
  }

  function deleteTask(selectedTask: number) {
    const newTaskList = taskList.filter((_, index) => index != selectedTask);
    setTaskList(newTaskList);
  }
  return (
    <div id="container">
      <div className="app-title">
        <h1>TODO APP</h1>
      </div>
      <div className="main-app">
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <div className="form-item">
              <input
                type="text"
                name="task"
                required
                placeholder="Enter a task"
              />
            </div>
            <div className="form-item">
              <button>ADD TASK</button>
            </div>
          </div>
        </form>
        <div className="task-stats">
          <p>Total Tasks: {taskList.length}</p>
        </div>
        <div className="display-tasks">
          {taskList.map((item, index) => (
            <div className="task-item" key={index}>
              <div className="description">{item}</div>
              <div className="action">
                <button onClick={() => deleteTask(index)}>DELETE</button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
