"use client";

import { Typewriter } from "react-simple-typewriter"; // ✅ ESM import

const AnimatedSubtitle = () => {
  return (
    <div className="text-lg md:text-xl text-gray-700 dark:text-gray-200 mt-4">
      <span>A passionate developer exploring </span>
      <span className="font-semibold text-blue-400 dark:text-violet-400">
        <Typewriter
          words={["AI", "Data Science", "Web Development"]}
          loop={0}
          cursor
          cursorStyle="|"
          typeSpeed={70}
          deleteSpeed={50}
          delaySpeed={1000}
        />
      </span>
    </div>
  );
};

export default AnimatedSubtitle;
