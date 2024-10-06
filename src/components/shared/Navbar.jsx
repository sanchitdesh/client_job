import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Popover, PopoverContent, PopoverTrigger } from "../ui/popover";
import { Avatar, AvatarFallback, AvatarImage } from "../ui/avatar";
import { Button } from "../ui/button";
import { LogOut, User2, Menu } from "lucide-react";
import { navLinks } from "@/constants";
import { useSelector } from "react-redux";

const Navbar = () => {
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);
  // const user = false; // Change this to true to test the logged-in state
  const { user } = useSelector((store) => store.auth);
  const location = useLocation(); // Hook to get the current URL path

  const toggleMobileMenu = () => setMobileMenuOpen(!isMobileMenuOpen);

  // Function to determine if a link is active
  const isActive = (path) => location.pathname === path;

  return (
    <header className="relative bg-white shadow-md border-b border-gray-200">
      <div className="container mx-auto flex justify-between items-center py-4 px-8 md:px-12">
        {/* Logo */}
        <div className="flex items-center">
          <Link to="/">
            <h1 className="text-3xl font-extrabold tracking-tight">
              Job<span className="text-[#0394f5]">Hunt</span>
            </h1>
          </Link>
        </div>

        {/* Desktop Navigation and User Actions */}
        <div className="hidden md:flex items-center space-x-10">
          <nav>
            <ul className="flex space-x-7 text-lg font-medium text-gray-700">
              {navLinks.map((link, index) => (
                <li key={index}>
                  <Link
                    to={link.route}
                    className={`${
                      isActive(link.route)
                        ? "text-[#0394f5] font-semibold"
                        : "hover:text-[#0394f5]"
                    } transition-colors duration-300 ease-in-out`}
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          {/* Avatar and Auth Buttons */}
          {!user ? (
            <div className="flex space-x-3">
              <Link to="/login">
                <Button
                  variant="outline"
                  className="border-gray-300 text-gray-700 hover:bg-[#0394f5] hover:text-white transition-colors duration-300 ease-in-out"
                >
                  Login
                </Button>
              </Link>
              <Link to="/signup">
                <Button className="bg-[#0394f5] text-white hover:bg-[#036bbf] transition-colors duration-300 ease-in-out">
                  Signup
                </Button>
              </Link>
            </div>
          ) : (
            <Popover>
              <PopoverTrigger asChild>
                <Avatar className="cursor-pointer hover:opacity-80 transition-opacity duration-300 ease-in-out">
                  <AvatarImage
                    src="https://github.com/shadcn.png"
                    alt="@shadcn"
                  />
                  <AvatarFallback>CN</AvatarFallback>
                </Avatar>
              </PopoverTrigger>

              <PopoverContent className="w-80 p-4 bg-white shadow-lg rounded-lg border border-gray-200">
                <div className="flex items-center space-x-3">
                  <Avatar>
                    <AvatarImage
                      src="https://github.com/shadcn.png"
                      alt="@shadcn"
                    />
                    <AvatarFallback>CN</AvatarFallback>
                  </Avatar>
                  <div>
                    <h4 className="text-lg font-semibold text-gray-800">
                      SanchitDesh
                    </h4>
                    <p className="text-sm text-gray-500">
                      Lorem ipsum dolor sit amet.
                    </p>
                  </div>
                </div>
                <div className="mt-4 border-t pt-4">
                  <div className="flex items-center space-x-2 cursor-pointer hover:text-[#0394f5] transition-colors duration-300 ease-in-out">
                    <User2 className="w-5 h-5 text-gray-600" />
                    <Link
                      to="/profile"
                      className="text-sm font-medium text-gray-700"
                    >
                      View Profile
                    </Link>
                  </div>
                  <div className="flex items-center space-x-2 cursor-pointer hover:text-[#0394f5] transition-colors duration-300 ease-in-out mt-2">
                    <LogOut className="w-5 h-5 text-gray-600" />
                    <button className="text-sm font-medium text-gray-700">
                      Logout
                    </button>
                  </div>
                </div>
              </PopoverContent>
            </Popover>
          )}
        </div>

        {/* Mobile Menu Toggle */}
        <button
          onClick={toggleMobileMenu}
          className="md:hidden flex items-center text-gray-600 hover:text-[#0394f5] transition-colors duration-300 ease-in-out"
        >
          <Menu size={24} />
        </button>
      </div>

      {/* Mobile Menu Dialog */}
      <div
        className={`fixed inset-0 bg-gray-800 bg-opacity-75 z-50 transition-transform transform ${
          isMobileMenuOpen ? "translate-x-0" : "translate-x-full"
        } md:hidden`}
      >
        <div className="container flex flex-col p-6 bg-white h-full w-3/4 max-w-sm">
          <button
            onClick={toggleMobileMenu}
            className="self-end text-gray-600 hover:text-[#0394f5] transition-colors duration-300 ease-in-out"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="w-6 h-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </button>
          <nav className="flex flex-col mt-6">
            {navLinks.map((link, index) => (
              <Link
                key={index}
                onClick={toggleMobileMenu}
                to={link.route}
                className={`py-2 text-lg font-medium ${
                  isActive(link.route)
                    ? "text-[#0394f5]"
                    : "text-gray-800 hover:text-[#0394f5]"
                } transition-colors duration-300 ease-in-out`}
              >
                {link.name}
              </Link>
            ))}
          </nav>
          <div className="flex flex-col mt-auto space-y-3">
            {!user ? (
              <>
                <Link to="/login">
                  <Button
                    variant="outline"
                    className="w-full border-gray-300 text-gray-700 hover:bg-[#0394f5] hover:text-white transition-colors duration-300 ease-in-out"
                  >
                    Login
                  </Button>
                </Link>

                <Link to="/signup">
                  <Button className="w-full bg-[#0394f5] text-white hover:bg-[#036bbf] transition-colors duration-300 ease-in-out">
                    Signup
                  </Button>
                </Link>
              </>
            ) : (
              <div className="flex flex-col space-y-3">
                <Link
                  to="/profile"
                  className="flex items-center text-gray-800 hover:text-[#0394f5] transition-colors duration-300 ease-in-out"
                >
                  <User2 className="w-5 h-5 mr-2" />
                  View Profile
                </Link>
                <button className="flex items-center text-gray-800 hover:text-[#0394f5] transition-colors duration-300 ease-in-out">
                  <LogOut className="w-5 h-5 mr-2" />
                  Logout
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
