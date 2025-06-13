import { BrowserRouter, Routes, Route, NavLink } from 'react-router-dom'
import Home from '../pages/Home.jsx'
import About from '../pages/About.jsx'
import Login from '../pages/Login.jsx'
import Register from '../pages/Register.jsx'
import Dashboard from '../pages/Dashboard.jsx'
import UserData from '../pages/UserData.jsx';


export default function AppRoutes() {
  return (
    <BrowserRouter>
      <nav className="bg-purple-950 text-white px-6 py-4 flex items-center text-xl font-bold">
        {/* Left links */}
        <div className="flex space-x-6">
          <NavLink
            to="/"
            end
            
          >
            HOME
          </NavLink>
          <NavLink
            to="/about"
            
          >
            ABOUT
          </NavLink>
        </div>

        {/* Spacer to push login to right */}
        <div className="flex-grow" />

        {/* Login button on right */}
        <NavLink
          to="/login"
          className={({ isActive }) =>
            `px-4 py-2 rounded font-semibold transition-colors ${
              isActive
                ? 'bg-blue-600 hover:bg-blue-700'
                : 'bg-blue-500 hover:bg-blue-600'
            }`
          }
        >
          LOGIN
        </NavLink>
      </nav>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/login" element={<Login />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/register" element={<Register />} />
        <Route path="/userdata" element={<UserData />} />

      </Routes>
    </BrowserRouter>
  )
}
