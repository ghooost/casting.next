export const lsSetItem = (key: string, value: string) => {
  if (typeof window === 'undefined') {
    return;
  }
  window.localStorage.setItem(key, value);
}

export const lsGetItem = (key: string) => {
  if (typeof window === 'undefined') {
    return undefined;
  }
  return window.localStorage.getItem(key);
}

export const lsRemoveItem = (key: string) => {
  if (typeof window === 'undefined') {
    return;
  }
  return window.localStorage.removeItem(key);
}