export default function Home() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-purple-400 text-gray-100 px-6">
      <h1 className="text-4xl font-bold text-purple-950 mb-6 drop-shadow-lg">
        Welcome to the React Boilerplate!
      </h1>

      <p className="text-lg text-purple-950 leading-relaxed mb-6 max-w-xl text-center drop-shadow-md">
        This boilerplate helps you quickly start building React apps with modern tools like Vite, Tailwind CSS, and React Router.
      </p>

      <div className="mb-8 max-w-xl">
        <h2 className="text-2xl font-semibold text-purple-950 mb-4 drop-shadow text-center">
          Features Included:
        </h2>
        <p className="list-disc list-inside text-purple-950 text-base space-y-2 text-lg text-center drop-shadow-md">
          Vite for fast development and build.Tailwind CSS for styling.React Router for navigation.Sample pages: Home, About, Login and Register.
        </p>
      </div>
    </div>
  );
}

