// "use client";

// import { useEffect, useState } from "react";

// export default function useTheme() {
//   const [theme, setTheme] = useState("light");

//   useEffect(() => {
//     const saved = localStorage.getItem("theme");
//     if (saved) {
//       setTheme(saved);
//       document.documentElement.classList.toggle("dark", saved === "dark");
//     }
//   }, []);

//   const toggleTheme = () => {
//     const newTheme = theme === "dark" ? "light" : "dark";
//     setTheme(newTheme);
//     localStorage.setItem("theme", newTheme);
//     document.documentElement.classList.toggle("dark", newTheme === "dark");
//   };

//   return { theme, toggleTheme };
// }

"use client";

import { useEffect, useState } from "react";

export default function useTheme() {
  // Default dark theme rakhna hai
  const [theme, setTheme] = useState("dark");

  useEffect(() => {
    const saved = localStorage.getItem("theme");

    // Agar pehle se saved theme hai to wahi use karo
    if (saved) {
      setTheme(saved);
      document.documentElement.classList.toggle("dark", saved === "dark");
    } else {
      // Default first time dark mode
      localStorage.setItem("theme", "dark");
      document.documentElement.classList.add("dark");
    }
  }, []);

  const toggleTheme = () => {
    const newTheme = theme === "dark" ? "light" : "dark";

    setTheme(newTheme);
    localStorage.setItem("theme", newTheme);
    document.documentElement.classList.toggle("dark", newTheme === "dark");
  };

  return { theme, toggleTheme };
}