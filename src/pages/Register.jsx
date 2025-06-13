import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const allowedUsers = [
  { email: 'user1@example.com', password: 'pass1' },
  { email: 'user2@example.com', password: 'pass2' },
  { email: 'user3@example.com', password: 'pass3' },
  { email: 'user4@example.com', password: 'pass4' },
];

export default function Register() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    setError('');

    const matchedUser = allowedUsers.find(
      (user) => user.email === email && user.password === password
    );

    if (!matchedUser) {
      setError('Only 4 predefined users can register. Check email and password.');
      return;
    }

    if (localStorage.getItem(email)) {
      setError('User already registered.');
      return;
    }

    localStorage.setItem(email, JSON.stringify({ email, password }));
    alert('Registered successfully!');
    navigate('/login');
  };

  return (
    <div className="max-w-sm mx-auto mt-10 p-6 bg-white rounded-md shadow-md">
      <h1 className="text-3xl font-bold mb-6 text-center">REGISTER</h1>
      {error && <p className="text-red-600 mb-4 text-center">{error}</p>}
      <form onSubmit={handleSubmit} className="space-y-6">
        <div>
          <label className="block mb-2 font-semibold text-gray-700 text-[25px]">Email</label>
          <input
            type="email"
            required
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-auto px-4 py-2 border border-gray-300 rounded-md"
          />
        </div>
        <div>
          <label className="block mb-2 font-semibold text-gray-700 text-[25px]">Password</label>
          <input
            type="password"
            required
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="w-auto px-4 py-2 border border-gray-300 rounded-md"
          />
        </div>
        <button className="w-auto border-2 border-blue-600 text-blue-600 font-semibold py-2 rounded-md hover:bg-blue-600 hover:text-white">
          REGISTER
        </button>
      </form>
    </div>
  );
}
