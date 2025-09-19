"use client";

import Image from "next/image";
import React from "react";
import AnimatedSubtitle from "./AnimatedSubtitle";
import { useTheme } from "../context/ThemeContext";
import Link from "next/link";
import { motion } from "framer-motion";

const Hero = () => {
  const { theme } = useTheme();

  // ...existing code...

  return (
    <section
      className={`w-full min-h-[85vh] flex items-center px-4 transition-colors duration-500 ${
        theme === "dark" ? "bg-slate-900 text-gray-100" : "bg-gray-50 text-gray-900"
      }`}
    >
      <div className="max-w-3xl mx-auto text-center">
        {/* Profile Image */}
        <Image
          src="/profile.avif"
          alt="Profile Picture"
          width={128}
          height={128}
          className="rounded-full mx-auto mb-4 w-32 h-32 object-cover ring-2 ring-primary"
        />

        {/* Heading */}
        <h1 className="text-4xl md:text-5xl font-bold mb-4">
          Hi, I&apos;m{" "}
          <span className="text-blue-600">Diksha Timilsina</span>
        </h1>

        {/* Animated Subtitle */}
        <div className="mb-8 flex justify-center flex-wrap gap-2">
          <AnimatedSubtitle />
        </div>

        {/* Buttons */}
        <div className="flex justify-center gap-4 flex-wrap">
          <Link
            href="/Projects"
            className="px-6 py-3 rounded-2xl bg-blue-600 text-white font-semibold hover:bg-blue-700 transition-colors duration-300"
          >
            View Projects
          </Link>
          <Link
            href="/contact"
            className="px-6 py-3 rounded-2xl bg-gray-200 text-gray-900 font-semibold hover:bg-gray-300 transition-colors duration-300 dark:bg-gray-700 dark:text-gray-100 dark:hover:bg-gray-600"
          >
            Contact Me
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Hero;
