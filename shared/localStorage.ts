export const setItem = (key: string, value: string) => {
  if (typeof window === 'undefined') {
    return;
  }
  window.localStorage.setItem(key, value);
}

export const getItem = (key: string) => {
  if (typeof window === 'undefined') {
    return undefined;
  }
  return window.localStorage.getItem(key);
}

export const removeItem = (key: string) => {
  if (typeof window === 'undefined') {
    return;
  }
  return window.localStorage.removeItem(key);
}