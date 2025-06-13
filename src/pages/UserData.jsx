import { useNavigate } from 'react-router-dom';

export default function UserData() {
  const navigate = useNavigate();
  const userData = JSON.parse(localStorage.getItem('userDetails'));

  if (!userData) {
    return (
      <div className="min-h-screen flex items-center justify-center text-2xl">
        No user data found.
      </div>
    );
  }

  const handleEdit = () => {
    localStorage.setItem('editing', 'true'); // set editing flag
    navigate('/dashboard'); // go to dashboard for editing
  };

  const handleDelete = () => {
    localStorage.removeItem('userDetails');
    localStorage.removeItem('editing'); // just in case
    alert('User data deleted.');
    navigate('/dashboard'); // redirect to form after delete
  };

  return (
    <div className="min-h-screen bg-sky-100 flex items-center justify-center">
      <div className="bg-white p-6 rounded shadow max-w-md w-full">
        <h2 className="text-2xl font-bold mb-4 text-sky-800 text-center">USER DETAILS</h2>
        <ul className="text-sky-700 mb-4">
          <li><strong>Name:</strong> {userData.name}</li>
          <li><strong>Phone:</strong> {userData.phone}</li>
          <li><strong>Email:</strong> {userData.email}</li>
          <li><strong>State:</strong> {userData.state}</li>
          <li><strong>City:</strong> {userData.city}</li>
        </ul>

        <div className="flex justify-between">
          <button
            onClick={handleEdit}
            className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-yellow-600"
          >
            EDIT
          </button>
          <button
            onClick={handleDelete}
            className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-red-600"
          >
            DELETE
          </button>
        </div>
      </div>
    </div>
  );
}
