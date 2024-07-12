
"use client"
import Link from 'next/link';
import { useRouter } from 'next/navigation';

import { useEffect, useState } from 'react';

export default function Header() {
  const router = useRouter();
  const [userName, setUserName] = useState('');

  useEffect(() => {
    // For demonstration, set a static user name
    setUserName('Admin');
  }, []);

  const handleLogout = () => {
    // Perform logout logic
    router.push('/login');
  };
  const handlebtn = () => {
    
    router.push('../employee/allemployee');
  };

  return (
    <header className="bg-white shadow-md">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <div>
          <Link href="/dashboard" legacyBehavior>
            <a className="text-xl font-bold text-blue-500">Home</a>
          </Link>
          <Link href="/employees" legacyBehavior>
            <a className="ml-5 text-xl font-bold text-blue-500" onClick={handlebtn}>Employee List</a>
          </Link>
        </div>
        <div className="flex items-center">
          <span className="mr-5 text-xl">{userName}</span>
          <button
            onClick={handleLogout}
            className="py-2 px-4 bg-red-500 text-white rounded"
          >
            Logout
          </button>
        </div>
      </div>
    </header>
  );
}
