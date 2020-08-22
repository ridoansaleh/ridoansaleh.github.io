import { useState, useEffect } from "react";

function useScrollup() {
  const [isScrolled, setScroll] = useState(false);

  useEffect(() => {
    if (!isScrolled) {
      document.body.scrollTop = 0;
      document.documentElement.scrollTop = 0;
    }
  }, []);

  return { isScrolled, setScroll };
}

export default useScrollup;
