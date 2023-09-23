import { useState, useEffect } from "react";

function TypingAnimation() {
  const [displayedText, setDisplayedText] = useState("");
  const fullText = "Web Developer";

  useEffect(() => {
    let currentIndex = 0;
    let direction = 1; // 1 for forward, -1 for backward

    const interval = setInterval(() => {
      if (direction === 1) {
        // Typing forward
        if (currentIndex <= fullText.length) {
          setDisplayedText(fullText.slice(0, currentIndex));
          currentIndex++;
        } else {
          direction = -1; // Start erasing
          setTimeout(() => setDisplayedText(""), 500); // Pause before erasing
        }
      } else {
        // Erasing backward
        if (currentIndex >= 0) {
          setDisplayedText(fullText.slice(0, currentIndex));
          currentIndex--;
        } else {
          direction = 1; // Start typing forward again
        }
      }
    }, 200); // Adjust the interval speed as needed

    return () => clearInterval(interval); // Cleanup on unmount
  }, []);

  return (
    <h3 className="text-5xl py-2 dark:text-white">
      I am a <span className="text-teal-500">{displayedText}</span>
      <span className="animate-blink cursor text-teal-500">|</span>
    </h3>
  );
}

export default TypingAnimation;
