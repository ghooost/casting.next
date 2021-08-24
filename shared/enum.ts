export const castEnum = <T>(enumObj: T, key: string) => {
  return enumObj[key as keyof typeof enumObj];
}