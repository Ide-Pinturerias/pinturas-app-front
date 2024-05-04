import { useEffect, useState } from "react";

// Hook para detectar el tamaño de la pantalla
 const useMediaQuery = (query) => {
  const [matches, setMatches] = useState(false);

  useEffect(() => {
    const mediaQuery = window.matchMedia(query);
    setMatches(mediaQuery.matches);

    const handleMediaQueryChange = (event) => {
      setMatches(event.matches);
    };

    mediaQuery.addEventListener('change', handleMediaQueryChange);

    return () => {
      mediaQuery.removeEventListener('change', handleMediaQueryChange);
    };
  }, [query]);

  return matches;
};

export default useMediaQuery
