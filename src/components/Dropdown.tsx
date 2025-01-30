'use client'

import { useState } from "react";

interface DropdownProps {
  name?: string;
  options?: string[];
  size?: 'small' | 'medium' | 'large'; // default: 'medium'
}

export function Dropdown({
    name = "Select",
    options = [
        "Option 1",
        "Option 2",
        "Option 3"
    ],
    size = "medium" }: DropdownProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [selected, setSelected] = useState(`${name}`);

  const selectOption = (option: string) => {
    setSelected(option);
    setIsOpen(false);
  };

  const [height, setHeight] = useState();
  const [fontSize, setFontSize] = useState();

  return (
    <div className="relative inline-block text-left">
      <button
        className="bg-gray-800 text-white px-4 py-2 rounded-lg w-48 flex justify-between items-center"
        onClick={() => setIsOpen(!isOpen)}
      >
        {selected}
        <span>{isOpen ? "▲" : "▼"}</span>
      </button>

      {isOpen && (
        <ul className="absolute left-0 mt-2 w-48 bg-white border border-gray-300 rounded-lg shadow-lg">
          {options.map((option) => (
            <li
              key={option}
              className="px-4 py-2 cursor-pointer hover:bg-gray-200"
              onClick={() => selectOption(option)}
            >
              {option}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
