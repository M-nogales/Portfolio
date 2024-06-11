import React, { useEffect, useRef } from 'react';
import Typed from 'typed.js';

function useTyped(strings, options) {
  const typedRef = useRef(null);

  useEffect(() => {
    // Initialize Typed.js when the component mounts
    const typed = new Typed(typedRef.current, {
      strings: strings, // The array of strings to type
      typeSpeed: 50, // Typing speed (characters per minute)
      backSpeed: 30, // Backspacing speed
      loop: true, // Whether to loop through the strings
      ...options, // Any additional options you want to pass
    });

    // Clean up when the component unmounts
    return () => {
      typed.destroy();
    };
  }, [strings, options]); // Re-initialize if strings or options change

  return typedRef;
}

export default useTyped;
