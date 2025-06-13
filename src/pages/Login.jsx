import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

export default function Login() {
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

    const storedUser = localStorage.getItem(form.email);

    if (!storedUser) {
      setError('User not found.');
      return;
    }

    const userData = JSON.parse(storedUser);

    if (userData.password !== form.password) {
      setError('Incorrect password.');
      return;
    }

    alert('Login successful!');

    // Check if user details are stored
    const userDetails = localStorage.getItem('userDetails');

    if (userDetails) {
      navigate('/userdata'); // if details exist, go to listing page
    } else {
      navigate('/dashboard'); // else go to form page
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-sky-200">
      <form
        onSubmit={handleSubmit}
        className="bg-white p-8 rounded shadow-md w-full max-w-md"
      >
        <h2 className="text-2xl font-bold text-center mb-4 text-sky-800">Login</h2>

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
          LOGIN
        </button>

        <p className="text-center mt-4 text-gray-900">
          Don't have an account?{' '}
          <Link to="/register" className="underline font-semibold">Register here</Link>
        </p>
      </form>
    </div>
  );
}
