// 👇 Your existing imports
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
    dob: '',      // 👈 Add this line
    state: '',
    city: '',
  });

  useEffect(() => {
    const editingEmail = localStorage.getItem('editingUserEmail');
    if (editingEmail) {
      const allUserDetails = JSON.parse(localStorage.getItem('allUserDetails') || '{}');
      if (allUserDetails[editingEmail]) {
        setForm(allUserDetails[editingEmail]);
      }
    }
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    if (name === 'state') {
      setForm({ ...form, state: value, city: '' });
    } else {
      setForm({ ...form, [name]: value });
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const allUserDetails = JSON.parse(localStorage.getItem('allUserDetails') || '{}');
    allUserDetails[form.email] = form;
    localStorage.setItem('allUserDetails', JSON.stringify(allUserDetails));
    localStorage.removeItem('editingUserEmail');
    navigate('/userdata');
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-purple-500">
      <form
        onSubmit={handleSubmit}
        className="bg-white-100 p-6 rounded shadow w-full max-w-md bg-purple-200"
      >
        <h2 className="text-2xl font-bold mb-4 text-purple-950">Enter Details</h2>

        <input
          name="name"
          value={form.name}
          onChange={handleChange}
          required
          placeholder="Name"
          className="w-full p-2 mb-3 border border-purple-200 rounded"
        />

        <input
          name="phone"
          value={form.phone}
          onChange={handleChange}
          required
          placeholder="Phone Number"
          className="w-full p-2 mb-3 border border-purple-200 rounded"
        />

        <input
          name="email"
          value={form.email}
          onChange={handleChange}
          required
          placeholder="Email"
          className="w-full p-2 mb-3 border border-purple-200 rounded"
          disabled={!!localStorage.getItem('editingUserEmail')}
        />

        {/* ✅ DOB Field with calendar */}
        <label className="text-sm text-purple-950 font-medium mb-1">Date of Birth</label>
        <input
          type="date"
          name="dob"
          value={form.dob}
          onChange={handleChange}
          required
          className="w-full p-2 mb-3 border border-purple-200 rounded"
        />

        <select
          name="state"
          value={form.state}
          onChange={handleChange}
          required
          className="w-full p-2 mb-3 border border-purple-200 rounded"
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
          className="w-full p-2 mb-3 border border-purple-200 rounded"
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
          className="w-full bg-purple-950 text-white py-2 rounded hover:bg-sky-600"
        >
          SUBMIT
        </button>
      </form>
    </div>
  );
}
