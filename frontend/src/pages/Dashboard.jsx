import { useEffect, useState } from "react";
import DashboardLayout from "../layouts/DashboardLayout";
import API from "../services/api";

export default function Dashboard() {
  const [stats, setStats] = useState({
    projects: 0,
    tasks: 0,
    members: 0,
  });

  useEffect(() => {
    async function fetchDashboard() {
      try {
        const res = await API.get(
          "/api/dashboard"
        );

        setStats(res.data);
      } catch (error) {
        console.error(error);
      }
    }

    fetchDashboard();
  }, []);

  return (
    <DashboardLayout>
      <h1 className="text-4xl font-bold mb-8">
        Dashboard
      </h1>

      <div className="grid grid-cols-3 gap-6">
        <div className="bg-white p-6 rounded-2xl shadow">
          <h2 className="text-xl font-bold mb-2">
            Total Projects
          </h2>

          <p className="text-5xl font-bold">
            {stats.projects}
          </p>
        </div>

        <div className="bg-white p-6 rounded-2xl shadow">
          <h2 className="text-xl font-bold mb-2">
            Active Tasks
          </h2>

          <p className="text-5xl font-bold">
            {stats.tasks}
          </p>
        </div>

        <div className="bg-white p-6 rounded-2xl shadow">
          <h2 className="text-xl font-bold mb-2">
            Team Members
          </h2>

          <p className="text-5xl font-bold">
            {stats.members}
          </p>
        </div>
      </div>
    </DashboardLayout>
  );
}