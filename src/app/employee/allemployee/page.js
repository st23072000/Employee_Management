"use client"

import Header from "@/components/Header";
import { useRouter } from "next/navigation";

export default function AllEmployees() {
  const router = useRouter();

  // Example employee data
  const employees = [
    {
      id: 1,
      image: '/images/john.jpg', 
      name: 'Hukum Gupta',
      email: 'Hukum@ctech.in',
      mobile: '123-456-7890',
      designation: 'HR',
      gender: 'Male',
      course: 'MCA',
      createDate: '12/07/2024',
    },
    {
      id: 2,
      image: '/images/jane.jpg', // Replace with actual image paths
      name: 'Manish Gupta',
      email: 'manish@ctech.com',
      mobile: '9876543210',
      designation: 'Sales',
      gender: 'Female',
      course: 'BCA',
      createDate: '12/07/2024',
    },
  ];

  const handleAddEmployee = () => {
    router.push('/employee/addemployee');
  };

  const handleEditEmployee = (id) => {
    router.push(`/employee/editemployee/${id}`);
  };

  const handleDeleteEmployee = (id) => {
    if (confirm(`Are you sure you want to delete employee with ID ${id}?`)) {
      alert(`Employee with ID ${id} deleted`);
      // Implement delete logic
    }
  };

  return (
    <div className="min-h-screen p-6 bg-gray-100">
      <Header />
      <h1 className="text-2xl font-bold mb-4">All Employees</h1>
      <button
        onClick={handleAddEmployee}
        className="mb-4 py-2 px-4 bg-blue-500 text-white rounded"
      >
        Create Employee
      </button>
      <div className="overflow-x-auto">
        <table className="w-full bg-white border border-gray-200 rounded-lg shadow-md">
          <thead className="bg-gray-100 border-b border-gray-200">
            <tr>
              <th className="py-2 px-4 text-left text-gray-700">ID</th>
              <th className="py-2 px-4 text-left text-gray-700">Image</th>
              <th className="py-2 px-4 text-left text-gray-700">Name</th>
              <th className="py-2 px-4 text-left text-gray-700">Email</th>
              <th className="py-2 px-4 text-left text-gray-700">Mobile No.</th>
              <th className="py-2 px-4 text-left text-gray-700">Designation</th>
              <th className="py-2 px-4 text-left text-gray-700">Gender</th>
              <th className="py-2 px-4 text-left text-gray-700">Course</th>
              <th className="py-2 px-4 text-left text-gray-700">Create Date</th>
              <th className="py-2 px-4 text-left text-gray-700">Actions</th>
            </tr>
          </thead>
          <tbody>
            {employees.map((employee) => (
              <tr key={employee.id} className="border-b border-gray-200">
                <td className="py-2 px-4">{employee.id}</td>
                <td className="py-2 px-4">
                  <img src={employee.image} alt={employee.name} className="w-12 h-12 object-cover rounded-full" />
                </td>
                <td className="py-2 px-4">{employee.name}</td>
                <td className="py-2 px-4">{employee.email}</td>
                <td className="py-2 px-4">{employee.mobile}</td>
                <td className="py-2 px-4">{employee.designation}</td>
                <td className="py-2 px-4">{employee.gender}</td>
                <td className="py-2 px-4">{employee.course}</td>
                <td className="py-2 px-4">{employee.createDate}</td>
                <td className="py-2 px-4 flex space-x-2">
                  <button
                    onClick={() => handleEditEmployee(employee.id)}
                    className="py-1 px-3 bg-yellow-500 text-white rounded hover:bg-yellow-600"
                  >
                    Update
                  </button>
                  <button
                    onClick={() => handleDeleteEmployee(employee.id)}
                    className="py-1 px-3 bg-red-500 text-white rounded hover:bg-red-600"
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
