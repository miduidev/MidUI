"use client"
import React, { useState, useRef, useEffect } from 'react';


// Options as props or fetch
const options = [
    {value : "jsx" , label : "JSX"},
    {value : "tsx" , label : "TSX"},
    {value : "html" , label : "HTML"},
    {value : "vue" , label : "Vue"},
];

const onSelect = (option) => {
    // Display the selected option
}

const Select = () => {

  const [isOpen, setIsOpen] = useState(false);
  const [selectedOption, setSelectedOption] = useState<Option | null>(null);
  const [dropUp, setDropUp] = useState(false);
  const [highlightedIndex, setHighlightedIndex] = useState(-1);
  const dropdownRef = useRef<HTMLDivElement>(null);
  const buttonRef = useRef<HTMLButtonElement>(null);

  const handleOptionClick = (option) => {
    setSelectedOption(option);
    onSelect(option);
    setIsOpen(false);
    setHighlightedIndex(-1);
  };

  const handleClickOutside = (e) => {
    if (dropdownRef.current && !dropdownRef.current.contains(e.target) &&
        buttonRef.current && !buttonRef.current.contains(e.target)) {
      setIsOpen(false);
      setHighlightedIndex(-1);
    }
  };

  const checkDropdownPosition = () => {
    if (buttonRef.current && dropdownRef.current) {
      const buttonRect = buttonRef.current.getBoundingClientRect();
      const dropdownHeight = dropdownRef.current.getBoundingClientRect().height;
      const spaceBelow = window.innerHeight - buttonRect.bottom;
      const spaceAbove = buttonRect.top;

      setDropUp(dropdownHeight > spaceBelow && spaceAbove > spaceBelow);
    }
  };

  const handleKeyDown = (e) => {
    e.preventDefault();
    if (!isOpen) return;

    switch (e.key) {
      case 'ArrowDown':
        setHighlightedIndex((prevIndex) =>
          prevIndex === options.length - 1 ? 0 : prevIndex + 1
        );
        break;
      case 'ArrowUp':
        setHighlightedIndex((prevIndex) =>
          prevIndex === 0 ? options.length - 1 : prevIndex - 1
        );
        break;
      case 'Enter':
        if (highlightedIndex >= 0) {
          handleOptionClick(options[highlightedIndex]);
        }
        break;
      case 'Escape':
        setIsOpen(false);
        setHighlightedIndex(-1);
        break;
      default:
        break;
    }
  };

  useEffect(() => {
    document.addEventListener('mousedown', handleClickOutside);
    window.addEventListener('resize', checkDropdownPosition);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
      window.removeEventListener('resize', checkDropdownPosition);
    };
  }, []);

  useEffect(() => {
    if (isOpen) {
      checkDropdownPosition();
    }
  }, [isOpen]);

  useEffect(() => {
    if (isOpen) {
      document.addEventListener("keydown" , handleKeyDown);
    } else {
      document.removeEventListener('keydown', handleKeyDown);
    }
    return () => {
      document.removeEventListener('keydown', handleKeyDown);
    };
  }, [isOpen, highlightedIndex]);

  return (
    <div className="relative inline-block text-left w-64">
      <div>
        <button
          ref={buttonRef}
          type="button"
          className="text-[#E9EEF2] bg-[#161616] items-center inline-flex justify-between w-full rounded-md border border-gray-300 shadow-sm px-4 py-2  text-sm font-medium  hover:bg-[#191919]"
          onClick={() => setIsOpen(!isOpen)}
        >
          {selectedOption ? selectedOption.label : 'Select an option'}
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M8.25 15L12 18.75L15.75 15M8.25 9L12 5.25L15.75 9" stroke="#E9EEF2" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </button>
      </div>
      {isOpen && (
        <div
          ref={dropdownRef}
          className={`bg-[#161616] origin-top-right absolute mt-2 w-full rounded-md shadow-lg ${dropUp ? 'bottom-full mb-2' : 'top-full mt-2'}`}
        >
          <div className="py-1">
            {options.map((option, index) => (
              <button
                key={option.value}
                className={`block px-4 py-2 text-sm w-full text-left ${highlightedIndex === index ? 'bg-gray-200 text-black' : 'hover:bg-[#191919] text-[#E9EEF2]'}`}
                onClick={() => handleOptionClick(option)}
              >
                {option.label}
              </button>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}

export default Select;
