import { useCallback, useState } from "react";

export const useLocalStorage = (key, initialValue) => {
  const [storedValue, setStoredValue] = useState(() => {
    try {
      // Since localStorage isn't available in Claude artifacts, we'll use a fallback
      const item = null; // window.localStorage.getItem(key);
      return item ? JSON.parse(item) : initialValue;
    } catch (error) {
      console.log('LocalStorage not available, using memory storage');
      return initialValue;
    }
  });

  const setValue = useCallback((value) => {
    try {
      setStoredValue(value);
      // window.localStorage.setItem(key, JSON.stringify(value));
    } catch (error) {
      console.log('LocalStorage not available');
    }
  }, [key]);

  return [storedValue, setValue];
};
