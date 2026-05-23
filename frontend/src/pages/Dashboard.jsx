import DashboardLayout from "../layouts/DashboardLayout";

export default function Dashboard() {
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
            0
          </p>
        </div>

        <div className="bg-white p-6 rounded-2xl shadow">
          <h2 className="text-xl font-bold mb-2">
            Active Tasks
          </h2>

          <p className="text-5xl font-bold">
            0
          </p>
        </div>

        <div className="bg-white p-6 rounded-2xl shadow">
          <h2 className="text-xl font-bold mb-2">
            Team Members
          </h2>

          <p className="text-5xl font-bold">
            0
          </p>
        </div>
      </div>
    </DashboardLayout>
  );
}