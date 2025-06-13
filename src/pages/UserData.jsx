import { useNavigate } from 'react-router-dom';
import { useState, useEffect } from 'react';

export default function UserData() {
  const navigate = useNavigate();
  const [allUsers, setAllUsers] = useState({});

  useEffect(() => {
    const storedUsers = JSON.parse(localStorage.getItem('allUserDetails') || '{}');
    setAllUsers(storedUsers);
  }, []);

  const handleAddUser = () => {
    localStorage.removeItem('editingUserEmail'); // clear editing flag for new user
    navigate('/dashboard');
  };

  const handleEdit = (email) => {
    localStorage.setItem('editingUserEmail', email);
    navigate('/dashboard');
  };

  const handleDelete = (email) => {
    const updatedUsers = { ...allUsers };
    delete updatedUsers[email];
    localStorage.setItem('allUserDetails', JSON.stringify(updatedUsers));
    setAllUsers(updatedUsers);
  };

  if (Object.keys(allUsers).length === 0) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center text-center">
        <p className="text-2xl mb-6">No user data found.</p>
        <button
          onClick={handleAddUser}
          className="bg-sky-500 text-white px-6 py-3 rounded hover:bg-sky-600"
        >
          Add User Detail
        </button>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-sky-100 flex flex-col items-center py-10">
      <h2 className="text-3xl font-bold mb-6 text-sky-800">User Details List</h2>

      <button
        onClick={handleAddUser}
        className="mb-6 bg-sky-500 text-white px-6 py-3 rounded hover:bg-sky-600"
      >
        Add User Detail
      </button>

      <div className="bg-white p-6 rounded shadow max-w-3xl w-full">
        {Object.values(allUsers).map((user) => (
          <div
            key={user.email}
            className="mb-4 border-b border-sky-300 pb-4 last:border-b-0"
          >
            <ul className="text-sky-700 mb-2">
              <li><strong>Name:</strong> {user.name}</li>
              <li><strong>Phone:</strong> {user.phone}</li>
              <li><strong>Email:</strong> {user.email}</li>
              <li><strong>State:</strong> {user.state}</li>
              <li><strong>City:</strong> {user.city}</li>
            </ul>

            <div className="flex space-x-4">
              <button
                onClick={() => handleEdit(user.email)}
                className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-yellow-600"
              >
                Edit
              </button>
              <button
                onClick={() => handleDelete(user.email)}
                className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-red-600"
              >
                Delete
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
