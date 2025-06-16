import { BrowserRouter, Routes, Route, NavLink } from 'react-router-dom'
import Home from '../pages/Home.jsx'
import About from '../pages/About.jsx'
import Login from '../pages/Login.jsx'
import Register from '../pages/Register.jsx'
import Dashboard from '../pages/Dashboard.jsx'
import UserData from '../pages/UserData.jsx'
import SearchResult from '../pages/SearchResult.jsx'
import DobResult from '../pages/DobResult.jsx';

export default function AppRoutes() {
  return (
    <BrowserRouter>
      <nav className="bg-purple-950 text-purple-200 px-6 py-4 flex items-center text-xl font-bold">
        {/* Left links */}
        <div className="flex space-x-6">
          <NavLink to="/" end>HOME</NavLink>
          <NavLink to="/about">ABOUT</NavLink>
        </div>

        {/* Spacer */}
        <div className="flex-grow" />

        {/* Login */}
        <NavLink
          to="/login"
          className={({ isActive }) =>
            `px-4 py-2 rounded font-bold transition-colors ${
              isActive
                ? 'bg-purple-500 hover:bg-blue-600'
                : 'bg-purple-500 hover:bg-blue-600'
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
        <Route path="/searchresult" element={<SearchResult />} />
        <Route path="/dobresult" element={<DobResult />} /> 
      </Routes>
    </BrowserRouter>
  )
}
