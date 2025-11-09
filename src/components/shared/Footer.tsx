export default function Footer() {
  return (
    <footer className="border-t border-gray-200 bg-gray-50 text-gray-700 dark:bg-gray-900 dark:text-gray-300">
      <div className="container mx-auto px-6 py-8 flex flex-col sm:flex-row items-center justify-between">
        

        {/* Center: Logo */}
        <div className="flex items-center space-x-2 my-4 sm:my-0">
          <div className="flex items-center justify-center w-10 h-10 rounded-full bg-green-700 text-white">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 32 32"
              fill="currentColor"
              className="w-5 h-5"
            >
              <path d="M18.266 26.068l7.839-7.854 4.469 4.479c1.859 1.859 1.859 4.875 0 6.734l-1.104 1.104c-1.859 1.865-4.875 1.865-6.734 0zM30.563 2.531l-1.109-1.104c-1.859-1.859-4.875-1.859-6.734 0l-6.719 6.734-6.734-6.734c-1.859-1.859-4.875-1.859-6.734 0l-1.104 1.104c-1.859 1.859-1.859 4.875 0 6.734l6.734 6.734-6.734 6.734c-1.859 1.859-1.859 4.875 0 6.734l1.104 1.104c1.859 1.859 4.875 1.859 6.734 0l21.307-21.307c1.859-1.859 1.859-4.875 0-6.734z"></path>
            </svg>
          </div>
          <span className="font-semibold text-lg">GronthoSheba</span>
        </div>

        {/* Right Section: Socials */}
        <div className="flex gap-4 sm:gap-6 text-sm">
          <a href="#" className="hover:text-green-700 hover:underline">
            Terms of Use
          </a>
          <a href="#" className="hover:text-green-700 hover:underline">
            Privacy Policy
          </a>
          <a href="#" className="hover:text-green-700 hover:underline">
              Contact Us
          </a>
        </div>
      </div>

      {/* Bottom line */}
      <div className="text-center text-xs text-gray-500 py-4 border-t border-gray-200 dark:border-gray-700">
        © {new Date().getFullYear()} Bookly Library System. All rights reserved.
      </div>
    </footer>
  );
}
