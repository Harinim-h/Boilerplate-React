import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

export default function Register() {
  const [form, setForm] = useState({ email: '', password: '' });
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');

    await new Promise((resolve) => setTimeout(resolve, 1000));

    const userExists = localStorage.getItem(form.email);

    if (userExists) {
      setError('User already exists with this email.');
      return;
    }

    // Store user in localStorage
    localStorage.setItem(form.email, JSON.stringify({ password: form.password }));
    alert('Registration successful!');
    navigate('/login');
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-sky-200">
      <form
        onSubmit={handleSubmit}
        className="bg-white p-8 rounded shadow-md w-full max-w-md"
      >
        <h2 className="text-2xl font-bold text-center mb-4 text-sky-800">Register</h2>

        <input
          name="email"
          type="email"
          value={form.email}
          onChange={handleChange}
          placeholder="Email"
          required
          className="w-full p-2 mb-3 border border-sky-300 rounded"
        />
        <input
          name="password"
          type="password"
          value={form.password}
          onChange={handleChange}
          placeholder="Password"
          required
          className="w-full p-2 mb-3 border border-sky-300 rounded"
        />

        {error && <p className="text-red-500 text-sm mb-3 text-center">{error}</p>}

        <button
          type="submit"
          className="w-full bg-sky-500 text-white py-2 rounded hover:bg-sky-600"
        >
          Register
        </button>

        <p className="text-center mt-4 text-sky-700">
          Already have an account?{' '}
          <Link to="/login" className="underline font-semibold">Login</Link>
        </p>
      </form>
    </div>
  );
}
