export interface GradientHelperType {
  color1: string;
  color2: string;
  style?: {[t: string]: any};
  start: {
    x: number;
    y: number;
  };
  end: {
    x: number;
    y: number;
  };
}
