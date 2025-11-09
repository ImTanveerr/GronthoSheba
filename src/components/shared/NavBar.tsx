import { useState } from "react";
import { Link } from "react-router";

export default function NavBar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <nav className="bg-white border-b border-gray-200 shadow-md px-4 sticky top-0 z-50">
      <div className="container mx-auto flex justify-between items-center h-16">
        <Link to={"/"}>
          <div className="text-2xl font-bold text-green-600">GronthoSheba</div>
        </Link>

        {/* Desktop Menu */}
        <div className="hidden md:flex space-x-6">
          <Link to={"/all-books"} className="text-gray-700 hover:text-green-600 font-medium">
            All Books
          </Link>
          <Link to={"/add-book"} className="text-gray-700 hover:text-green-600 font-medium">
            Add Book
          </Link>
          <Link to={"/borrow-books-summary"} className="text-gray-700 hover:text-green-600 font-medium">
            Borrow Summary
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <div className="md:hidden">
          <button onClick={toggleMenu} className="text-gray-700 hover:text-green-600 focus:outline-none">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              {isOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile Menu Links */}
      <div
        className={`md:hidden bg-white w-full transition-max-h duration-300 ease-in-out overflow-hidden ${
          isOpen ? "max-h-60 py-4" : "max-h-0"
        }`}
      >
        <div className="flex flex-col px-4 space-y-2">
          <Link
            onClick={() => setIsOpen(false)}
            to={"/all-books"}
            className="block text-gray-700 hover:text-green-600 font-medium"
          >
            All Books
          </Link>
          <Link
            onClick={() => setIsOpen(false)}
            to={"/add-book"}
            className="block text-gray-700 hover:text-green-600 font-medium"
          >
            Add Book
          </Link>
          <Link
            onClick={() => setIsOpen(false)}
            to={"/borrow-books-summary"}
            className="block text-gray-700 hover:text-green-600 font-medium"
          >
            Borrow Summary
          </Link>
        </div>
      </div>
    </nav>
  );
}
