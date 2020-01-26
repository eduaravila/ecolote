export const random_limit = (max: number, min: number): number => {
  return Math.floor(Math.random() * max + min);
};
