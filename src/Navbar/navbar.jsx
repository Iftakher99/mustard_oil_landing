import { useState } from 'react';
import navbar_logo from '../img/greencrate.jpg';
function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="bg-yellow-300">
      <div className="container mx-auto px-4 py-2">
        <div className="flex justify-between items-center">
          <div className="flex items-center">
            <a href="/" className="text-blue-700 text-xl font-semibold"></a>
            <img className="h-14" src={navbar_logo} alt="sss" />
          </div>
          <div className="hidden md:flex items-center space-x-4">
            <a href="/" className="text-blue-700 hover:text-white">
              Home
            </a>
            <a href="/" className="text-blue-700 hover:text-white">
              About
            </a>
            <a href="/" className="text-blue-700 hover:text-white">
              Services
            </a>
            <a href="/" className="text-blue-700 hover:text-white">
              Contact
            </a>
          </div>
          <div className="md:hidden flex items-center">
            <button
              className="text-blue-700 hover:text-white focus:outline-none"
              onClick={toggleMenu}
            >
              <svg
                className="h-6 w-6 fill-current"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                {isOpen ? (
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M18 6L6 18M6 6l12 12"
                  />
                ) : (
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M4 5h16v2H4V5zm0 5h16v2H4V10zm0 5h16v2H4v-2z"
                  />
                )}
              </svg>
            </button>
          </div>
        </div>
        {isOpen && (
          <div className="md:hidden mt-2">
            <a href="/" className="block text-blue-700 hover:text-white mb-2">
              Home
            </a>
            <a href="/" className="block text-blue-700 hover:text-white mb-2">
              About
            </a>
            <a href="/" className="block text-blue-700 hover:text-white mb-2">
              Services
            </a>
            <a href="/" className="block text-blue-700 hover:text-white mb-2">
              Contact
            </a>
          </div>
        )}
      </div>
    </nav>
  );
}

export default Navbar;
