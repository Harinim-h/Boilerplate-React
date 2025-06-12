export default function Home() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-600 text-gray-100 px-6">
      <h1 className="text-4xl font-bold text-gray-100 mb-6 drop-shadow-lg">
        Welcome to the React Boilerplate
      </h1>

      <p className="text-lg text-gray-300 leading-relaxed mb-6 max-w-xl text-center drop-shadow-md">
        This boilerplate helps you quickly start building React apps with modern tools like Vite, Tailwind CSS, and React Router.
      </p>

      <div className="mb-8 max-w-xl">
        <h2 className="text-2xl font-semibold text-gray-200 mb-4 drop-shadow">
          Features Included:
        </h2>
        <ul className="list-disc list-inside text-gray-300 text-base space-y-2 drop-shadow-md">
          <li>Vite for fast development and build.</li>
          <li>Tailwind CSS for styling.</li>
          <li>React Router for navigation.</li>
          <li>Sample pages: Home, About, Login and Register.</li>
        </ul>
      </div>
    </div>
  );
}

