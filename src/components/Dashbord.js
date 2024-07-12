import Link from 'next/link';
import Header from './Header';

export default function Dashboard() {
  return (
    <div className="min-h-screen bg-gray-100">
      <Header />
      <div className="container mx-auto p-6">
        <h1 className="text-3xl font-bold mb-6 text-gray-800">Dashboard</h1>
        <div className="p-6 bg-white rounded-lg shadow-md">
          <h2 className="text-2xl font-semibold mb-4 text-gray-700">Welcome to the Admin Panel</h2>
          <p className="text-gray-600">
            This is your admin dashboard where you can manage all the activities.
          </p>
          <div className="mt-6">
            <Link href="/employee/allemployee" legacyBehavior>
              <a className="text-blue-600 hover:underline">View All Employees</a>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
