export const isAtServer = () => typeof window === 'undefined';

export const castEnum = <T>(enumObj: T, key: string) =>
  enumObj[key as keyof typeof enumObj];
