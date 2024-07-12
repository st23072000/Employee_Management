"use client"
import Header from '@/components/Header';
import { useRouter } from 'next/navigation';
import React, { useState } from 'react';

const Page = () => {
  const [form, setForm] = useState({
    name: '',
    email: '',
    mobileNo: '',
    designation: '',
    gender: '',
    courses: [],
    image: null,
  });

  const router = useRouter();

  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm({
      ...form,
      [name]: value,
    });
  };

  const handleCheckboxChange = (e) => {
    const { name, checked } = e.target;
    let updatedCourses = [...form.courses];
    if (checked) {
      updatedCourses.push(name);
    } else {
      updatedCourses = updatedCourses.filter(course => course !== name);
    }
    setForm({
      ...form,
      courses: updatedCourses,
    });
  };

  const handleFileChange = (e) => {
    setForm({
      ...form,
      image: e.target.files[0],
    });
  };

  const validate = () => {
    const errors = {};
    if (!form.name) errors.name = 'Name is required';
    if (!form.email) errors.email = 'Email is required';
    if (!form.mobileNo) errors.mobileNo = 'Mobile number is required';
    if (!form.designation) errors.designation = 'Designation is required';
    if (!form.gender) errors.gender = 'Gender is required';
    if (form.courses.length < 1) errors.courses = 'At least one course must be selected';
    if (!form.image) errors.image = 'Image is required';
    return errors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const validationErrors = validate();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
    } else {
      // Assuming onAddEmployee is a function passed as a prop or defined somewhere
      onAddEmployee(form);
      // Reset form
      setForm({
        name: '',
        email: '',
        mobileNo: '',
        designation: '',
        gender: '',
        courses: [],
        image: null,
      });
    }
  };

  const handleBtn = (e) => {
    e.preventDefault();
    router.push('/employee/allemployee');
  };

  return (
    <div className="container mx-auto p-6">
      <Header/>
      <h2 className="text-2xl font-bold mb-6">Add Employee</h2>
      <form onSubmit={handleSubmit} className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <label className="block text-sm font-medium mb-2">Name</label>
          <input
            type="text"
            name="name"
            value={form.name}
            onChange={handleChange}
            className="w-full p-2 border border-gray-300 rounded"
          />
          {errors.name && <p className="text-red-500 text-xs">{errors.name}</p>}
        </div>
        <div>
          <label className="block text-sm font-medium mb-2">Email</label>
          <input
            type="email"
            name="email"
            value={form.email}
            onChange={handleChange}
            className="w-full p-2 border border-gray-300 rounded"
          />
          {errors.email && <p className="text-red-500 text-xs">{errors.email}</p>}
        </div>
        <div>
          <label className="block text-sm font-medium mb-2">Mobile Number</label>
          <input
            type="text"
            name="mobileNo"
            value={form.mobileNo}
            onChange={handleChange}
            className="w-full p-2 border border-gray-300 rounded"
          />
          {errors.mobileNo && <p className="text-red-500 text-xs">{errors.mobileNo}</p>}
        </div>
        <div>
          <label className="block text-sm font-medium mb-2">Designation</label>
          <select
            name="designation"
            value={form.designation}
            onChange={handleChange}
            className="w-full p-2 border border-gray-300 rounded"
          >
            <option value="">Select Designation</option>
            <option value="sales">Sales</option>
            <option value="manager">Manager</option>
            <option value="hr">HR</option>
          </select>
          {errors.designation && <p className="text-red-500 text-xs">{errors.designation}</p>}
        </div>
        <div>
          <label className="block text-sm font-medium mb-2">Gender</label>
          <div>
            <label className="inline-flex items-center">
              <input
                type="radio"
                name="gender"
                value="male"
                checked={form.gender === 'male'}
                onChange={handleChange}
                className="form-radio"
              />
              <span className="ml-2">Male</span>
            </label>
            <label className="inline-flex items-center ml-4">
              <input
                type="radio"
                name="gender"
                value="female"
                checked={form.gender === 'female'}
                onChange={handleChange}
                className="form-radio"
              />
              <span className="ml-2">Female</span>
            </label>
            <label className="inline-flex items-center ml-4">
              <input
                type="radio"
                name="gender"
                value="other"
                checked={form.gender === 'other'}
                onChange={handleChange}
                className="form-radio"
              />
              <span className="ml-2">Other</span>
            </label>
          </div>
          {errors.gender && <p className="text-red-500 text-xs">{errors.gender}</p>}
        </div>
        <div>
          <label className="block text-sm font-medium mb-2">Courses</label>
          <div>
            <label className="inline-flex items-center">
              <input
                type="checkbox"
                name="course1"
                checked={form.courses.includes('course1')}
                onChange={handleCheckboxChange}
                className="form-checkbox"
              />
              <span className="ml-2">Course 1</span>
            </label>
            <label className="inline-flex items-center ml-4">
              <input
                type="checkbox"
                name="course2"
                checked={form.courses.includes('course2')}
                onChange={handleCheckboxChange}
                className="form-checkbox"
              />
              <span className="ml-2">Course 2</span>
            </label>
            <label className="inline-flex items-center ml-4">
              <input
                type="checkbox"
                name="course3"
                checked={form.courses.includes('course3')}
                onChange={handleCheckboxChange}
                className="form-checkbox"
              />
              <span className="ml-2">Course 3</span>
            </label>
          </div>
          {errors.courses && <p className="text-red-500 text-xs">{errors.courses}</p>}
        </div>
        <div>
          <label className="block text-sm font-medium mb-2">Upload Image</label>
          <input
            type="file"
            name="image"
            onChange={handleFileChange}
            className="w-full p-2 border border-gray-300 rounded"
          />
          {errors.image && <p className="text-red-500 text-xs">{errors.image}</p>}
        </div>
        <div className="md:col-span-2">
          <button
            type="submit"
            className="w-25 bg-blue-500 text-white p-2 rounded hover:bg-blue-600"
          >
            Submit
          </button>
        </div>
        <div className="md:col-span-2">
          <button
            onClick={handleBtn}
            className="w-25 bg-gray-500 text-white p-2 rounded hover:bg-gray-600 "
          >
            View All Employees
          </button>
        </div>
      </form>
    </div>
  );
};

export default Page;
