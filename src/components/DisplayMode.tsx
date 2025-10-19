"use client";

import { useState, useEffect } from "react";
import { Moon, Sun } from "lucide-react";
import { storageGet, storageSet } from "@/utils";

const DisplayMode = ({}) => {
  const displayMode = storageGet("display-mode");
  const [isLightMode, setIsLightMode] = useState(displayMode === "light");

  const toggleDisplayMode = () => {
    const newMode = isLightMode ? "dark" : "light";
    setIsLightMode(!isLightMode);
    storageSet("display-mode", newMode);
  };

  useEffect(() => {
    const body = document.body;

    if (isLightMode) {
      body.classList.remove("dark");
      return;
    }

    body.classList.add("dark");
  }, [isLightMode]);

  return (
    <div>
      <button
        className="p-2  rounded-full dark:border-gray-600 text-white dark:text-gray-600 bg-gray-600 dark:bg-white"
        onClick={toggleDisplayMode}
      >
        {isLightMode ? <Moon /> : <Sun />}
      </button>
    </div>
  );
};

export default DisplayMode;
