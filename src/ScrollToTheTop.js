import React from "react";
import { useEffect, useState } from "react";

function ScrollToTheTop() {
  const [scrollToTheTop, setScrollToTheTop] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 100) {
        setScrollToTheTop(true);
      } else {
        setScrollToTheTop(false);
      }
    });
  }, []);

  const scrollUp = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };
  return (
    <div>
      {scrollToTheTop && (
        <button
          style={{
            position: "fixed",
            bottom: "50px",
            right: "50px",
            height: "50px",
            width: "50px",
            fontSize: "35px",
          }}
          onClick={scrollUp}
        >
          ⮝
        </button>
      )}
    </div>
  );
}

export default ScrollToTheTop;
