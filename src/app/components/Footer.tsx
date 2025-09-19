"use client";
import Link from "next/link";
import { FaGithub, FaTwitter, FaLinkedin } from "react-icons/fa";


export default function Footer() {
  

  const socials = [
    { href: "https://github.com/DikshaTimilsina", icon: <FaGithub />, label: "GitHub" },
    { href: "https://twitter.com/DikshaTimilsina", icon: <FaTwitter />, label: "Twitter" },
    { href: "https://linkedin.com/in/diksha-timilsina-232075317", icon: <FaLinkedin />, label: "LinkedIn" },
  ];

  return (
    <footer
      className={`border-t-2 border-violet-800 dark:border-cyan-700 shadow-2xl rounded-t-xl transition-colors duration-500
        bg-gradient-to-r from-blue-950 via-violet-800 to-cyan-700 dark:from-gray-900 dark:via-blue-950 dark:to-violet-800 text-gray-100
      `}
    >
      <div className="container max-w-7xl mx-auto px-4 py-8">
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
          {/* Branding */}
          <div className="text-center md:text-left">
            <Link href="/" className="text-xl font-bold">
              <span className="font-extrabold tracking-tight text-2xl md:text-3xl bg-gradient-to-r from-blue-400 via-violet-400 to-cyan-400 bg-clip-text text-transparent drop-shadow-lg">
                Diksha&apos;s Portfolio
              </span>
            </Link>
            <p className="text-sm mt-2 text-gray-300 dark:text-gray-400">
              © {new Date().getFullYear()} Diksha. All rights reserved.
            </p>
          </div>

          {/* Social Icons */}
          <div className="flex space-x-6">
            {socials.map((social, index) => (
              <a
                key={index}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={social.label}
                className="text-gray-400 hover:text-violet-400 dark:hover:text-cyan-400 transition-colors text-xl drop-shadow-lg hover:shadow-glow"
              >
                {social.icon}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
