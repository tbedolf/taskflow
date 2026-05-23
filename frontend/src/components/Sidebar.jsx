import { Link } from "react-router-dom";

export default function Sidebar() {
  return (
    <div className="w-64 bg-black text-white h-screen p-6 flex flex-col">
      <h1 className="text-3xl font-bold mb-10">
        TaskFlow
      </h1>

      <nav className="flex flex-col gap-4">
        <Link
          to="/dashboard"
          className="hover:bg-gray-800 p-3 rounded-lg transition"
        >
          Dashboard
        </Link>

        <Link
          to="/workspaces"
          className="hover:bg-gray-800 p-3 rounded-lg transition"
        >
          Workspaces
        </Link>

        <Link
          to="/projects"
          className="hover:bg-gray-800 p-3 rounded-lg transition"
        >
          Projects
        </Link>

        <Link
          to="/tasks"
          className="hover:bg-gray-800 p-3 rounded-lg transition"
        >
          Tasks
        </Link>
      </nav>
    </div>
  );
}