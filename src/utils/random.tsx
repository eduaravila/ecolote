export const random_limit = (max: number, min: number): number => {
  return Math.floor(Math.random() * max + min);
};

export const fix_limit = (
  number: number,
  max: number,
  min: number,
  biggest: number,
) => {
  const y = number;
  const percent = y / biggest;
  const playbackRate = percent * (max - min) + min;

  return playbackRate;
};
