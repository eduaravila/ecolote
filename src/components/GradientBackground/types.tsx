import React, {ReactNode} from 'react';

export interface GradientBackgroundType {
  colors: Array<string>[2];
  start: {x: number; y: number};
  end: {x: number; y: number};
  children: ReactNode;
}
