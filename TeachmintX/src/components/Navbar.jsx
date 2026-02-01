import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 p-4">
      <div className="max-w-7xl mx-auto border-2 border-blue-300 p-4 rounded-2xl bg-white/50 backdrop-blur-2xl">
        <div className="flex items-center justify-between gap-4">
          <div className="flex items-center gap-4">
            <img src="/teachmint.png" alt="Teachmint logo" className="w-10 h-10" />
            <h1 className="text-xl font-semibold text-blue-500 cursor-pointer hover:scale-x-105 tracking-wider">TeachmintX</h1>
          </div>
          <div className="hidden md:flex items-center gap-6">
            <a href="#hero" className="text-sm text-gray-700 hover:text-blue-500 hover:border-b border-blue-500 transition-colors cursor-pointer">
              Features
            </a>
            <a href="#products" className="text-sm text-gray-700 hover:text-blue-500 hover:border-b border-blue-500 transition-colors cursor-pointer">
              Products
            </a>
            <a href="#query" className="text-sm text-gray-700 hover:text-blue-500 hover:border-b border-blue-500 transition-colors cursor-pointer">
              About
            </a>
            <a href="#contact" className="text-sm text-gray-700 hover:text-blue-500 hover:border-b border-blue-500 transition-colors cursor-pointer">
              Contact
            </a>
          </div>
          <Link to="/login">
            <button className="bg-blue-500 px-4 md:px-6 py-1.5 rounded-xl text-white  hover:bg-blue-700 transition-colors cursor-pointer">
              SignUp/Login
            </button>
          </Link>
        </div>
      </div>
    </nav>
  );
}