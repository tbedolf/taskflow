import DashboardLayout from "../layouts/DashboardLayout";

export default function Projects() {
  return (
    <DashboardLayout>
      <div className="flex justify-between items-center mb-8">
        <h1 className="text-4xl font-bold">
          Projects
        </h1>

        <button className="bg-black text-white px-5 py-3 rounded-lg">
          Create Project
        </button>
      </div>

      <div className="bg-white rounded-2xl shadow p-6">
        <p>No projects yet.</p>
      </div>
    </DashboardLayout>
  );
}