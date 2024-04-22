// components/Header.js

import Image from 'next/image';
import Link from 'next/link';

const Header = () => {
  return (
    <header className="bg-gray-800 text-white body-font shadow w-full">
      <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
        <Link
          href="/"
          className="flex title-font font-medium items-center text-white mb-4 md:mb-0">

          <Image src="/your-logo.svg" width={40} height={40} alt="Your Logo" />
          <span className="ml-3 text-xl">Your Name</span>

        </Link>
        <nav className="md:ml-auto flex flex-wrap items-center text-base justify-center">
          <Link href="#about" className="mr-5 hover:text-gray-400">
            About Me
          </Link>
          <Link href="#projects" className="mr-5 hover:text-gray-400">
            Projects
          </Link>
          <Link href="#contact" className="mr-5 hover:text-gray-400">
            Contact
          </Link>
        </nav>
        <a href="https://linkedin.com/in/yourprofile" className="inline-flex items-center bg-gray-500 border-0 py-1 px-3 focus:outline-none hover:bg-gray-700 rounded text-base mt-4 md:mt-0">
          LinkedIn
          <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-4 h-4 ml-1" viewBox="0 0 24 24">
            <path d="M16 8a6 6 0 00-12 0v8a6 6 0 006 6h6a6 6 0 006-6V8z"></path>
            <path d="M12 14v4M12 10v4m-6 4V8a2 2 0 014 0v6m4-6v10"></path>
          </svg>
        </a>
      </div>
    </header>
  );
};

export default Header;
