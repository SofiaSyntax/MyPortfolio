import { FaGithub, FaLinkedin } from "react-icons/fa";

function Footer() {
  return (
    <footer className="text-black bg-white font-bold py-2 mt-12 sticky bottom-0 border border-y-1 border-slate-50 shadow-sm">
      <div className="container mx-auto px-4">
        {/* Links or other elements */}
        <div className="flex justify-center space-x-6 mb-4">
          <a href="#about" className="hover:text-gray-400">
            About Me
          </a>
          <a href="/contact" className="hover:text-gray-400">
            Contact
          </a>

          <a href="/" className="hover:text-gray-400">
            Portfolio
          </a>
        </div>

        {/* Social media icons */}
        <div className="flex justify-center space-x-6 mb-4">
          <a
            href="https://github.com/SofiaSyntax"
            target="_blank"
            rel="noopener noreferrer"
            className="text-xl hover:text-gray-400"
          >
            <FaGithub />
          </a>
          <a
            href="https://www.linkedin.com/in/sofia-backeholt/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-xl hover:text-gray-400"
          >
            <FaLinkedin />
          </a>
        </div>

        {/* Copyright text) */}
        <div className="text-center text-xs text-gray-500">
          <p>&copy;2025 Sofia Backeholt. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
