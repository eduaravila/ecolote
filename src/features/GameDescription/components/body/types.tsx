export interface bodyTypes {
  componentId: string;
  rarity: string;
  length: number;
  data: {name: string; txt: string}[];
  loading: boolean;
  setactiveIndex: (i: number) => void;
  activeIndex: number;
}
