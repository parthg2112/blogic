'use client';

import { useEffect } from 'react';

/**
 * A client component that tracks the mouse position and updates CSS variables
 * on the root element. It renders nothing to the DOM.
 */
const MousePositionUpdater = () => {
  useEffect(() => {
    const handleMouseMove = (event: MouseEvent) => {
      // Set CSS variables for the mouse coordinates
      document.documentElement.style.setProperty('--mouse-x', `${event.clientX}px`);
      document.documentElement.style.setProperty('--mouse-y', `${event.clientY}px`);
    };

    // Add listener on mount
    window.addEventListener('mousemove', handleMouseMove);

    // Cleanup listener on unmount
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  return null; // This component does not render anything
};

export default MousePositionUpdater;