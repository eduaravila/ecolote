export interface bodyTypes {
  onPressMore: () => void;
  componentId: string;
  type: {
    _id: string;
    name: string;
    image: string;
  };
  zone: {
    _id: string;
    name: string;
    image: string;
  };
  rarity: {
    _id: string;
    name: string;
    image: string;
    color: string;
  };
  subtitle: string;
}
