import { useCallback } from "react";

const useLocalStorage = () => {

  const setValue = useCallback((key, value) => {
    localStorage.setItem(key, value)
  }, []);

  const getValue = useCallback((key) => {
    return localStorage.getItem(key)
  }, []);

  const removeValue = useCallback((key) => {
    return localStorage.removeItem(key)
  }, []);

  const pushValue = useCallback((key, value) => {
    const item = JSON.parse(getValue(key));
    item.push(value);
    setValue(key, JSON.stringify(item));
  }, [getValue, setValue]);

  return { setValue, getValue, removeValue, pushValue };
}

export default useLocalStorage