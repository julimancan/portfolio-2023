import { useCallback, useId } from "react";

export function useScrollTo(): [string, () => void] {
  const id = useId();
  const handleScroll = useCallback(() => {
      const element = document.getElementById(id);
      if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
      }
  }, [id]);

  return [id, handleScroll];
}