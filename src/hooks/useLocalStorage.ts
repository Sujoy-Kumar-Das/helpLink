"use client";

import { Dispatch, SetStateAction, useEffect, useState } from "react";

export default function useLocalStorage<T>(
  storageKey: string,
  defaultValue: T
): [T, Dispatch<SetStateAction<T>>] {
  // get localstorage value;
  const getDefaultValue = () => {
    if (typeof window === "undefined") {
      return defaultValue;
    }

    try {
      const item = localStorage.getItem(storageKey);

      return item ? JSON.parse(item) : defaultValue;
    } catch (error) {
      console.error("Failed to parse localStorage item", error);
      return defaultValue;
    }
  };

  const [value, setValue] = useState(getDefaultValue);

  useEffect(() => {
    localStorage.setItem(storageKey, JSON.stringify(value));
  }, [storageKey, value]);

  return [value, setValue];
}
