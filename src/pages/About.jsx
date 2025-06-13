export default function About() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-purple-300 px-6">
      <h1 className="text-4xl text-purple-950 font-bold mb-6">
        ABOUT
      </h1>
      <p className="max-w-xl drop-shadow  text-center text-purple-950 text-lg leading-relaxed">
        This is a <strong>React frontend Boilerplate.</strong><br /><br />
        This assignment uses <strong>Vite</strong> or <strong>Create React App</strong> to initialize the project.<br />
        Install <strong>Tailwind CSS</strong> for styling.<br />
        Add <strong>React Router</strong> for page navigation.
      </p>
    </div>
  )
}
