import { useRef, useState } from "react";

export const useInfiniteScroll = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const markerRef = useRef(null);

  const options = {
    root: null,
    rootMargin: "0px",
  };

  const observe = () => {
    const observer = new IntersectionObserver((entries) => {
      if (entries[0].isIntersecting) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    }, options);

    if (markerRef.current) {
      observer.observe(markerRef.current);
    }

    return () => {
      if (markerRef.current) {
        observer.unobserve(markerRef.current);
      }
    };
  };

  return { isScrolled, markerRef, observe };
};
