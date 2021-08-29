import { isAtServer } from "@libs/utils";

export const lsSetItem = (key: string, value: string) => {
  if (isAtServer()) {
    return;
  }
  window.localStorage.setItem(key, value);
}

export const lsGetItem = (key: string) => {
  if (isAtServer()) {
    return undefined;
  }
  return window.localStorage.getItem(key);
}

export const lsRemoveItem = (key: string) => {
  if (isAtServer()) {
    return;
  }
  return window.localStorage.removeItem(key);
}