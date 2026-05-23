import { useEffect, useState } from "react";
import axios from "axios";

import DashboardLayout from "../layouts/DashboardLayout";

export default function Workspaces() {
  const [workspaces, setWorkspaces] =
    useState([]);

  const [name, setName] = useState("");

  const token = localStorage.getItem("token");

  async function fetchWorkspaces() {
    try {
      const res = await axios.get(
        "http://localhost:5001/api/workspaces",
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );

      setWorkspaces(res.data);
    } catch (error) {
      console.error(error);
    }
  }

  async function createWorkspace() {
    if (!name) return;

    try {
      await axios.post(
        "http://localhost:5001/api/workspaces",
        {
          name,
        },
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );

      setName("");

      fetchWorkspaces();
    } catch (error) {
      console.error(error);
    }
  }

  useEffect(() => {
    fetchWorkspaces();
  }, []);

  return (
    <DashboardLayout>
      <div className="flex justify-between items-center mb-8">
        <h1 className="text-4xl font-bold">
          Workspaces
        </h1>
      </div>

      {/* Create Workspace */}
      <div className="bg-white p-6 rounded-2xl shadow mb-8">
        <h2 className="text-2xl font-bold mb-4">
          Create Workspace
        </h2>

        <div className="flex gap-4">
          <input
            type="text"
            placeholder="Workspace name"
            value={name}
            onChange={(e) =>
              setName(e.target.value)
            }
            className="border p-3 rounded-lg flex-1"
          />

          <button
            onClick={createWorkspace}
            className="bg-black text-white px-6 py-3 rounded-lg"
          >
            Create
          </button>
        </div>
      </div>

      {/* Workspace Grid */}
      <div className="grid grid-cols-3 gap-6">
        {workspaces.map((workspace) => (
          <div
            key={workspace.id}
            className="bg-white p-6 rounded-2xl shadow"
          >
            <h2 className="text-2xl font-bold">
              {workspace.name}
            </h2>

            <p className="text-gray-500 mt-2">
              Workspace ID: {workspace.id}
            </p>
          </div>
        ))}
      </div>
    </DashboardLayout>
  );
}