import React from 'react';
import { Link } from 'react-router-dom';

const Register: React.FC = () => {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-4">Register</h1>
      <form className="max-w-md">
        <div className="mb-4">
          <label htmlFor="name" className="block mb-2">Name</label>
          <input type="text" id="name" className="w-full p-2 border rounded" />
        </div>
        <div className="mb-4">
          <label htmlFor="email" className="block mb-2">Email</label>
          <input type="email" id="email" className="w-full p-2 border rounded" />
        </div>
        <div className="mb-4">
          <label htmlFor="password" className="block mb-2">Password</label>
          <input type="password" id="password" className="w-full p-2 border rounded" />
        </div>
        <div className="mb-4">
          <label htmlFor="confirmPassword" className="block mb-2">Confirm Password</label>
          <input type="password" id="confirmPassword" className="w-full p-2 border rounded" />
        </div>
        <button type="submit" className="bg-green-500 text-white px-4 py-2 rounded">Register</button>
      </form>
      <p className="mt-4">
        Already have an account? <Link to="/login" className="text-blue-500">Login here</Link>
      </p>
    </div>
  );
};

export default Register;

