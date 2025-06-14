import { useNavigate } from 'react-router-dom';
import { useEffect, useState } from 'react';

export default function SearchResult() {
  const navigate = useNavigate();
  const [user, setUser] = useState(null);

  useEffect(() => {
    const storedUser = JSON.parse(localStorage.getItem('searchedUser'));
    if (storedUser) {
      setUser(storedUser);
    } else {
      navigate('/userdata'); // If no user found, go back
    }
  }, [navigate]);

  const handleBack = () => {
    navigate('/userdata');
  };

  if (!user) return null;

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-purple-100 p-10">
      <h2 className="text-3xl font-bold mb-6 text-purple-950">Searched User Details</h2>

      <div className="bg-purple-200 p-6 rounded shadow max-w-xl w-full mb-6">
        <ul className="text-purple-950 text-2xl">
          <li><strong>Name:</strong> {user.name}</li>
          <li><strong>Phone:</strong> {user.phone}</li>
          <li><strong>Email:</strong> {user.email}</li>
          <li><strong>State:</strong> {user.state}</li>
          <li><strong>City:</strong> {user.city}</li>
        </ul>
      </div>

      <button
        onClick={handleBack}
        className="bg-purple-950 text-white px-6 py-3 rounded hover:bg-sky-600 text-xl"
      >
        Back to All Users Details
      </button>
    </div>
  );
}
