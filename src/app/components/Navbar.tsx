"use client";

import Link from "next/link";
import { SunIcon, MoonIcon, Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import { useTheme } from "../context/ThemeContext";
import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";

export default function Navbar() {
  const { theme, toggleTheme } = useTheme();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => setIsMobileMenuOpen(!isMobileMenuOpen);

  const menuItems = [
    { href: "/", label: "Home" },
    { href: "/about", label: "About" },
    { href: "/Projects", label: "Projects" },
    { href: "/blogs", label: "Blogs" },
    { href: "/contact", label: "Contact" },
  ];

  return (
    <nav
      className={`fixed w-full z-50 backdrop-blur-lg rounded-b-xl transition-all duration-500
        bg-gradient-to-r from-blue-950 via-violet-800 to-cyan-700 dark:from-gray-900 dark:via-blue-950 dark:to-violet-800
        text-gray-100 shadow-2xl border-b-2 border-violet-800 dark:border-cyan-700
      `}
    >
      <div className="container max-w-7xl mx-auto px-4">
  <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link href="/" className="text-xl font-bold">
            <span className="font-extrabold tracking-tight text-2xl md:text-3xl bg-gradient-to-r from-blue-400 via-violet-400 to-cyan-400 bg-clip-text text-transparent drop-shadow-lg">
              Diksha&apos;s Portfolio
            </span>
          </Link>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8">
            {menuItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="font-medium px-3 py-1 rounded transition-all duration-300 hover:bg-violet-800 hover:text-cyan-400 dark:hover:bg-blue-950 dark:hover:text-violet-400 shadow-md"
              >
                {item.label}
              </Link>
            ))}
            <motion.button
              onClick={toggleTheme}
              className="p-2 rounded-full border-2 border-violet-800 dark:border-cyan-700 bg-blue-950 dark:bg-gray-900 text-cyan-400 dark:text-violet-400 hover:bg-violet-800 hover:text-cyan-400 dark:hover:bg-blue-950 dark:hover:text-violet-400 shadow-lg transition-all duration-500 flex items-center justify-center"
              whileHover={{ rotate: 20, scale: 1.1, boxShadow: "0 0 20px #06b6d4" }}
              whileTap={{ scale: 0.9 }}
              aria-label="Toggle theme"
            >
              <motion.span
                initial={{ rotate: 0 }}
                animate={{ rotate: theme === "dark" ? 0 : 180 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                {theme === "dark" ? (
                  <SunIcon className="h-5 w-5 text-yellow-400 drop-shadow-glow" />
                ) : (
                  <MoonIcon className="h-5 w-5 text-violet-400 drop-shadow-glow" />
                )}
              </motion.span>
            </motion.button>
          </div>

          {/* Mobile Menu Button */}
          <motion.button
            className="md:hidden p-2 rounded-full border-2 border-violet-800 dark:border-cyan-700 bg-blue-950 dark:bg-gray-900 text-cyan-400 dark:text-violet-400 hover:bg-violet-800 hover:text-cyan-400 dark:hover:bg-blue-950 dark:hover:text-violet-400 shadow-lg transition-all duration-300 flex items-center justify-center"
            onClick={toggleMobileMenu}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
          >
            {isMobileMenuOpen ? <XMarkIcon className="h-6 w-6" /> : <Bars3Icon className="h-6 w-6" />}
          </motion.button>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {isMobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3 }}
              className={`md:hidden overflow-hidden rounded-xl shadow-2xl transition-all duration-500 bg-gradient-to-br from-blue-950 via-violet-800 to-cyan-700 dark:from-gray-900 dark:via-blue-950 dark:to-violet-800 text-gray-100`}
            >
              <div className="py-4 space-y-4">
                {menuItems.map((item, index) => (
                  <motion.div
                    key={item.href}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.1 }}
                  >
                    <Link
                      href={item.href}
                      className="block py-2 px-3 rounded transition-all duration-300 hover:bg-violet-800 hover:text-cyan-400 dark:hover:bg-blue-950 dark:hover:text-violet-400 shadow-md"
                      onClick={() => setIsMobileMenuOpen(false)}
                    >
                      {item.label}
                    </Link>
                  </motion.div>
                ))}

                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: menuItems.length * 0.1 }}
                >
                  <button
                    onClick={() => {
                      toggleTheme();
                      setIsMobileMenuOpen(false);
                    }}
                    className="flex items-center py-2 px-3 rounded transition-all duration-300 hover:bg-violet-800 hover:text-cyan-400 dark:hover:bg-blue-950 dark:hover:text-violet-400 shadow-md"
                  >
                    {theme === "dark" ? (
                      <>
                        <SunIcon className="h-5 w-5 mr-2 text-yellow-400 drop-shadow-glow" /> Light Mode
                      </>
                    ) : (
                      <>
                        <MoonIcon className="h-5 w-5 mr-2 text-violet-400 drop-shadow-glow" /> Dark Mode
                      </>
                    )}
                  </button>
                </motion.div>
              </div>
            </motion.div>
          )}
  </AnimatePresence>
      </div>
    </nav>
  );
}
