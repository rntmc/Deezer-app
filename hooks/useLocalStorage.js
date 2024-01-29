import { useState } from 'react';

export function useLocalStorage(key, initial) {
  const isLocalStorageAvailable = typeof window !== 'undefined' && window.localStorage;
  
  const getSavedValue = () => {
    const savedValue = JSON.parse(localStorage.getItem(key));
    if (savedValue) 
      return savedValue;

    if (initial instanceof Function) 
      return initial();

    return initial;
  };

  const [value, setValue] = useState(getSavedValue);

  const setStoredValue = (newValue) => {
    const valueToStore = newValue instanceof Function ? newValue(value) : newValue;
    setValue(valueToStore);
    localStorage.setItem(key, JSON.stringify(valueToStore));
  };

  return [value, setStoredValue];
}