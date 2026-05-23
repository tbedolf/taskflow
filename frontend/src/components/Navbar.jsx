import { useAuth } from "../context/AuthContext";

export default function Navbar() {
  const { user, logout } = useAuth();

  return (
    <div className="bg-white border-b px-8 py-4 flex justify-between items-center">
      <div>
        <h2 className="text-2xl font-bold">
          Welcome, {user?.name}
        </h2>

        <p className="text-gray-500">
          Role: {user?.role}
        </p>
      </div>

      <button
        onClick={logout}
        className="bg-black text-white px-5 py-2 rounded-lg"
      >
        Logout
      </button>
    </div>
  );
}