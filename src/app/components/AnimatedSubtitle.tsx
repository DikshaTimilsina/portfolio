"use client";
import React from "react";
// If you see an error about 'react-simple-typewriter', run:
// npm install react-simple-typewriter
let Typewriter: any = null;
try {
  // @ts-ignore
  Typewriter = require("react-simple-typewriter").Typewriter;
} catch (e) {
  // Fallback: show static subtitle if not installed
}

const AnimatedSubtitle = () => {
  return (
    <div className="text-lg md:text-xl text-gray-700 dark:text-gray-200 mt-4">
      <span>A passionate developer exploring </span>
      <span className="font-semibold text-blue-400 dark:text-violet-400">
        {Typewriter ? (
          <Typewriter
            words={["AI", "Data Science", "Web Development"]}
            loop={0}
            cursor
            cursorStyle="|"
            typeSpeed={70}
            deleteSpeed={50}
            delaySpeed={1000}
          />
        ) : (
          "AI, Data Science, Web Development"
        )}
      </span>
    </div>
  );
};

export default AnimatedSubtitle;
