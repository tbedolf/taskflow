import { useEffect, useState } from "react";
import axios from "axios";

import DashboardLayout from "../layouts/DashboardLayout";

const columns = [
  "TODO",
  "IN_PROGRESS",
  "REVIEW",
  "DONE",
];

export default function TaskBoard() {
  const [tasks, setTasks] = useState([]);

  const [title, setTitle] = useState("");

  const [description, setDescription] =
    useState("");

  const [priority, setPriority] =
    useState("MEDIUM");

  const token = localStorage.getItem("token");

  async function fetchTasks() {
    try {
      const res = await axios.get(
        "http://localhost:5001/api/tasks/1",
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );

      setTasks(res.data);
    } catch (error) {
      console.error(error);
    }
  }

  async function createTask() {
    try {
      await axios.post(
        "http://localhost:5001/api/tasks",
        {
          title,
          description,
          priority,
          projectId: 1,
        },
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );

      setTitle("");
      setDescription("");

      fetchTasks();
    } catch (error) {
      console.error(error);
    }
  }

  useEffect(() => {
    fetchTasks();
  }, []);

  return (
    <DashboardLayout>
      {/* Header */}
      <div className="flex justify-between items-center mb-8">
        <h1 className="text-4xl font-bold">
          Kanban Board
        </h1>
      </div>

      {/* Create Task */}
      <div className="bg-white p-6 rounded-2xl shadow mb-8">
        <h2 className="text-2xl font-bold mb-4">
          Create Task
        </h2>

        <div className="grid grid-cols-4 gap-4">
          <input
            type="text"
            placeholder="Task title"
            value={title}
            onChange={(e) =>
              setTitle(e.target.value)
            }
            className="border p-3 rounded-lg"
          />

          <input
            type="text"
            placeholder="Description"
            value={description}
            onChange={(e) =>
              setDescription(e.target.value)
            }
            className="border p-3 rounded-lg"
          />

          <select
            value={priority}
            onChange={(e) =>
              setPriority(e.target.value)
            }
            className="border p-3 rounded-lg"
          >
            <option value="LOW">LOW</option>
            <option value="MEDIUM">
              MEDIUM
            </option>
            <option value="HIGH">
              HIGH
            </option>
          </select>

          <button
            onClick={createTask}
            className="bg-black text-white rounded-lg"
          >
            Create
          </button>
        </div>
      </div>

      {/* Kanban Columns */}
      <div className="grid grid-cols-4 gap-6">
        {columns.map((column) => (
          <div
            key={column}
            className="bg-gray-100 rounded-2xl p-4 min-h-[600px]"
          >
            <h2 className="text-xl font-bold mb-4">
              {column.replace("_", " ")}
            </h2>

            <div className="space-y-4">
              {tasks
                .filter(
                  (task) =>
                    task.status === column
                )
                .map((task) => (
                  <div
                    key={task.id}
                    className="bg-white p-4 rounded-xl shadow"
                  >
                    <h3 className="font-bold text-lg">
                      {task.title}
                    </h3>

                    <p className="text-gray-500 mt-2">
                      {task.description}
                    </p>

                    <div className="mt-4 flex justify-between items-center">
                      <span className="text-sm bg-black text-white px-3 py-1 rounded-full">
                        {task.priority}
                      </span>

                      <span className="text-sm text-gray-400">
                        #{task.id}
                      </span>
                    </div>
                  </div>
                ))}
            </div>
          </div>
        ))}
      </div>
    </DashboardLayout>
  );
}