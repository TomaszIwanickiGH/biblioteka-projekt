import { useState, useEffect } from 'react';
import useLoginModal from '../hooks/useLoginModal';
import useRegisterModal from '../hooks/useRegisterModal';

const Navbar = () => {
  const loginModal = useLoginModal()
  const registerModal = useRegisterModal();

  const [isMenuOpen, setIsMenuOpen] = useState(false); // Stan do kontrolowania widoczności menu

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen); // Przełączanie widoczności menu
  };

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768) {
        setIsMenuOpen(false); // Zamykanie menu, jeśli szerokość okna przekracza 768px
      }
    };

    window.addEventListener('resize', handleResize);

    // Sprzątanie po odłączeniu komponentu
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <nav className="bg-[#f4f1e1] shadow-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          {/* Logo */}
          <div className="text-3xl font-semibold text-[#5b3d44]">
            <a href="/" className="text-2xl text-[#6b4f33]">
              BookNest
            </a>
          </div>

          {/* Pasek wyszukiwania */}
          <div className="flex flex-1 justify-center mx-4">
            <input
              type="text"
              placeholder="Wyszukaj książkę..."
              className="w-full max-w-md px-4 py-2 rounded-lg border border-[#d6cfc7] focus:outline-none focus:ring-2 focus:ring-[#6b4f33]"
            />
          </div>

          {/* Menu na dużych ekranach */}
          <div className="hidden md:flex text-[#6b4f33] gap-2">
            <button onClick={() => {
              loginModal.onOpen()
            }} className="px-4 py-2 rounded-lg bg-[#4e9a73] text-white hover:bg-[#38745b] transition duration-300">
              Zaloguj się
            </button>
            <button onClick={() => {
              registerModal.onOpen()
              }} className="px-4 py-2 rounded-lg bg-[#4e9a73] text-white hover:bg-[#38745b] transition duration-300">
              Zarejestruj się
            </button>
          </div>

          {/* Ikona hamburgera na mniejszych ekranach */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => {
                toggleMenu()
              }}
              className="text-[#6b4f33] focus:outline-none"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                className="w-6 h-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Panel z przyciskami w menu hamburgerowym */}
      {isMenuOpen && (
        <div className="absolute top-16 left-0 right-0 bg-[#f4f1e1] shadow-md z-10">
          <div className="flex flex-col items-center py-4">
            <button onClick={() => {
              toggleMenu()
              loginModal.onOpen()
            }}
             className="px-4 py-2 rounded-lg bg-[#4e9a73] text-white hover:bg-[#38745b] transition duration-300 mb-2">
              Zaloguj się
            </button>
            <button onClick={() => {
              toggleMenu()
              registerModal.onOpen()
            }} className="px-4 py-2 rounded-lg bg-[#4e9a73] text-white hover:bg-[#38745b] transition duration-300">
              Zarejestruj się
            </button>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;