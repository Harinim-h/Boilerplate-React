import { useNavigate } from 'react-router-dom';
import { useState, useEffect } from 'react';

export default function UserData() {
  const navigate = useNavigate();
  const [allUsers, setAllUsers] = useState({});
  const [searchQuery, setSearchQuery] = useState('');
  const [sortOrder, setSortOrder] = useState('asc'); // 'asc' or 'desc' for name sorting

  useEffect(() => {
    const storedUsers = JSON.parse(localStorage.getItem('allUserDetails') || '{}');
    setAllUsers(storedUsers);
  }, []);

  const handleAddUser = () => {
    localStorage.removeItem('editingUserEmail');
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

  const handleSearch = () => {
    const users = Object.values(allUsers);
    const result = users.find(
      (user) => user.name.toLowerCase() === searchQuery.trim().toLowerCase()
    );

    if (result) {
      localStorage.setItem('searchedUser', JSON.stringify(result));
      navigate('/searchresult');
    } else {
      alert('User not found');
    }
  };

  if (Object.keys(allUsers).length === 0) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center text-center text-purple-950 bg-purple-200">
        <p className="text-2xl mb-6">No user data found.</p>
        <button
          onClick={handleAddUser}
          className="bg-purple-950 text-white px-6 py-3 rounded hover:bg-sky-600 font-2xl"
        >
          ADD
        </button>
      </div>
    );
  }

  // Sort users by name based on sortOrder
  const sortedUsers = Object.values(allUsers).sort((a, b) => {
    if (!a.name) return 1;
    if (!b.name) return -1;
    if (sortOrder === 'asc') {
      return a.name.localeCompare(b.name);
    } else {
      return b.name.localeCompare(a.name);
    }
  });

  return (
    <div className="min-h-screen bg-sky-100 flex flex-col items-center py-10">
      <h2 className="text-3xl font-bold mb-6 text-purple-950">User Details</h2>

      <div className="flex space-x-4 mb-2 items-center">
        <button
          onClick={handleAddUser}
          className="bg-purple-950 text-white px-6 py-3 rounded hover:bg-sky-600 text-xl"
        >
          ADD
        </button>

        <button
          onClick={handleSearch}
          className="bg-purple-950 text-white px-4 py-2 rounded hover:bg-sky-600 text-xl"
        >
          SEARCH
        </button>
        <input
          type="text"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          placeholder="Search by Name"
          className="px-4 py-2 rounded border text-xl"
        />
      </div>

      {/* New line for sorting buttons */}
      <div className="flex space-x-4 mb-6">
        <button
          onClick={() => setSortOrder('asc')}
          className={`px-6 py-2 rounded text-xl ${
            sortOrder === 'asc'
              ? 'bg-purple-950 text-white'
              : 'bg-purple-300 text-purple-700 hover:bg-purple-400'
          }`}
        >
          Sort Name Asc
        </button>
        <button
          onClick={() => setSortOrder('desc')}
          className={`px-6 py-2 rounded text-xl ${
            sortOrder === 'desc'
              ? 'bg-purple-950 text-white'
              : 'bg-purple-300 text-purple-700 hover:bg-purple-400'
          }`}
        >
          Sort Name Desc
        </button>
      </div>

      <div className="bg-purple-200 p-6 rounded shadow max-w-3xl w-auto">
        {sortedUsers.map((user) => (
          <div
            key={user.email}
            className="mb-9 border-b border-purple-300 pb-4 last:border-b-0"
          >
            <ul className="text-purple-950 text-2xl bg-purple-200 mb-9">
              <li><strong>Name:</strong> {user.name}</li>
              <li><strong>Phone:</strong> {user.phone}</li>
              <li><strong>Email:</strong> {user.email}</li>
              <li><strong>State:</strong> {user.state}</li>
              <li><strong>City:</strong> {user.city}</li>
            </ul>

            <div className="flex space-x-8">
              <button
                onClick={() => handleEdit(user.email)}
                className="bg-purple-950 text-white px-4 py-2 rounded hover:bg-blue-600"
              >
                EDIT
              </button>
              <button
                onClick={() => handleDelete(user.email)}
                className="bg-purple-950 text-white px-4 py-2 rounded hover:bg-blue-600"
              >
                DELETE
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
