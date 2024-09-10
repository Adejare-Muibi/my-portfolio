import { useEffect, useState, useRef } from "react";
import { MdKeyboardArrowUp } from "react-icons/md";

const BackToTop = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [isBouncing, setIsBouncing] = useState(false);
  const bounceInterval = useRef(null); // UseRef to store interval ID

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.scrollY > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener("scroll", toggleVisibility);

    return () => {
      window.removeEventListener("scroll", toggleVisibility);
    };
  }, []);

  useEffect(() => {
    if (isVisible) {
      // Start bounce interval when the button becomes visible
      bounceInterval.current = setInterval(() => {
        setIsBouncing(true);
        setTimeout(() => setIsBouncing(false), 1000); // Stop bounce after 1s
      }, 4000); // Every 4 seconds
    } else {
      // Clear bounce interval when the button is not visible
      clearInterval(bounceInterval.current);
    }

    return () => clearInterval(bounceInterval.current); // Cleanup on component unmount
  }, [isVisible]);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
    clearInterval(bounceInterval.current); // Stop bouncing when clicked
    setIsBouncing(false); // Reset bouncing state
  };

  return (
    <div>
      <button
        onClick={scrollToTop}
        className={`fixed bottom-8 right-8 z-50 p-2 bg-[#96BB7C] text-white rounded-full shadow-lg hover:bg-[#96BB7C] transition-opacity duration-500 ease-in-out ${
          isVisible ? 'opacity-100' : 'opacity-0 pointer-events-none'
        } ${isBouncing ? 'animate-bounce-in' : ''}`} // Apply bounce only when isBouncing is true
      >
        <MdKeyboardArrowUp size={27} className="max-md:size-[22px]" />
      </button>
    </div>
  );
};

export default BackToTop;
