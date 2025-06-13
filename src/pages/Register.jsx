import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';

const allowedUsers = [
  { email: 'abc@gmail.com', password: '123' },
  { email: 'harinim@gmail.com', password: '123' },
  { email: 'user@gmail.com', password: '123' },
  { email: 'user1@gmail.com', password: '123' },
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
      setError('Invalid! Check email and password.');
      return;
    }

    if (localStorage.getItem(email)) {
      setError('User already registered.');
      return;
    }

    localStorage.setItem(email, JSON.stringify({ email, password }));
    
    navigate('/login');
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-purple-200">
      <form
        onSubmit={handleSubmit}
        className="bg-violet-400 p-8 rounded shadow-md w-full max-w-md"
      >
        <h2 className="text-2xl font-bold text-center mb-4 text-purple-950">Register</h2>

        <input
          type="email"
          required
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Email"
          className="w-full p-2 mb-3 border border-violet-300 rounded"
        />

        <input
          type="password"
          required
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          placeholder="Password"
          className="w-full p-2 mb-3 border border-violet-300 rounded"
        />

        {error && <p className="text-red-500 text-sm mb-3 text-center">{error}</p>}

        <button
          type="submit"
          className="w-full bg-purple-950 text-white py-2 rounded hover:bg-sky-600"
        >
          REGISTER
        </button>

        <p className="text-center mt-4 text-gray-900">
          Already have an account?{' '}
          <Link to="/login" className="underline font-semibold">Login here</Link>
        </p>
      </form>
    </div>
  );
}
