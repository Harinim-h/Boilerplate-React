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

  // Store logged-in user email for permission control
  localStorage.setItem('loggedInUserEmail', form.email);

  alert('Login successful!');

  // Check if user details are stored for this user
  const userDetails = JSON.parse(localStorage.getItem('userDetails') || '[]');
  const userHasDetails = userDetails.some(u => u.email === form.email);

  if (userHasDetails) {
    navigate('/userdata'); // if details exist, go to listing page
  } else {
    navigate('/dashboard'); // else go to form page
  }
};
