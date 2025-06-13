import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

const statesWithCities = {
  'Tamil Nadu': ['Chennai', 'Coimbatore', 'Trichy', 'Karur'],
  Karnataka: ['Bangalore', 'Mysore', 'Mangalore'],
  Kerala: ['Kochi', 'Thiruvananthapuram', 'Kozhikode'],
};

export default function Dashboard() {
  const navigate = useNavigate();
  const [form, setForm] = useState({
    name: '',
    phone: '',
    email: '',
    state: '',
    city: '',
  });

  useEffect(() => {
    const userDetails = localStorage.getItem('userDetails');
    if (userDetails) {
      const parsed = JSON.parse(userDetails);
      setForm(parsed);
    }
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    if (name === 'state') {
      // Reset city when state changes
      setForm({ ...form, state: value, city: '' });
    } else {
      setForm({ ...form, [name]: value });
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    localStorage.setItem('userDetails', JSON.stringify(form));
    navigate('/userdata');
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-sky-100">
      <form
        onSubmit={handleSubmit}
        className="bg-white p-6 rounded shadow w-full max-w-md"
      >
        <h2 className="text-2xl font-bold mb-4 text-sky-800">Enter Your Details</h2>

        <input
          name="name"
          value={form.name}
          onChange={handleChange}
          required
          placeholder="Name"
          className="w-full p-2 mb-3 border border-sky-300 rounded"
        />

        <input
          name="phone"
          value={form.phone}
          onChange={handleChange}
          required
          placeholder="Phone Number"
          className="w-full p-2 mb-3 border border-sky-300 rounded"
        />

        <input
          name="email"
          value={form.email}
          onChange={handleChange}
          required
          placeholder="Email"
          className="w-full p-2 mb-3 border border-sky-300 rounded"
        />

        <select
          name="state"
          value={form.state}
          onChange={handleChange}
          required
          className="w-full p-2 mb-3 border border-sky-300 rounded"
        >
          <option value="">Select State</option>
          {Object.keys(statesWithCities).map((state) => (
            <option key={state} value={state}>
              {state}
            </option>
          ))}
        </select>

        <select
          name="city"
          value={form.city}
          onChange={handleChange}
          required
          className="w-full p-2 mb-3 border border-sky-300 rounded"
          disabled={!form.state}
        >
          <option value="">Select City</option>
          {form.state &&
            statesWithCities[form.state].map((city) => (
              <option key={city} value={city}>
                {city}
              </option>
            ))}
        </select>

        <button
          type="submit"
          className="w-full bg-sky-500 text-white py-2 rounded hover:bg-sky-600"
        >
          SUBMIT
        </button>
      </form>
    </div>
  );
}
