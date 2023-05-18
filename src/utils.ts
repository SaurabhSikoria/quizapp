export const shufflingArray = (array: any[]) =>
  [...array].sort(() => Math.random() - 0.5);
