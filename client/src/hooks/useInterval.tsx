import { useEffect, useRef } from 'react';

interface UseInterval {
  (callback: () => void, delay: number | null): void;
}

export const useInterval: UseInterval = (callback, delay) => {
  const savedCallback = useRef(callback);

  useEffect(() => {
    savedCallback.current = callback;
  }, [callback]);

  useEffect(() => {
    if (!delay && delay !== 0) {
      return () => false;
    }

    const id = setInterval(() => savedCallback.current(), delay);

    return () => clearInterval(id);
  }, [delay]);
};
