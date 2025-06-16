import { useEffect, useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

export default function DobResult() {
  const location = useLocation();
  const navigate = useNavigate();
  const [results, setResults] = useState([]);

  useEffect(() => {
    const data = JSON.parse(localStorage.getItem('dobSearchResult') || '[]');
    setResults(data);
  }, [location]);

  const goBack = () => {
    navigate('/userdata');
  };

  if (results.length === 0) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center bg-purple-100 text-purple-950">
        <h2 className="text-2xl font-bold mb-4">No results found.</h2>
        <button
          onClick={goBack}
          className="bg-purple-950 text-white px-6 py-2 rounded hover:bg-purple-700"
        >
          Go Back
        </button>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-sky-100 flex flex-col items-center py-10">
      <h2 className="text-3xl font-bold mb-6 text-purple-950">DOB Search Result</h2>

      {results.map((user) => (
        <div
          key={user.email}
          className="bg-purple-200 p-6 rounded shadow max-w-xl w-full mb-6"
        >
          <ul className="text-purple-950 text-xl">
            <li><strong>Name:</strong> {user.name}</li>
            <li><strong>Phone:</strong> {user.phone}</li>
            <li><strong>Email:</strong> {user.email}</li>
            <li><strong>Date of Birth:</strong> {user.dob}</li>
            <li><strong>State:</strong> {user.state}</li>
            <li><strong>City:</strong> {user.city}</li>
          </ul>
        </div>
      ))}

      <button
        onClick={goBack}
        className="bg-purple-950 text-white px-6 py-2 rounded hover:bg-purple-700 mt-4"
      >
        Back to User Data
      </button>
    </div>
  );
}
