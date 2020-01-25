import React, {ReactNode} from 'react';

export interface GradientBackgroundType {
  colors?: string[];
  start?: {x: number; y: number};
  end?: {x: number; y: number};
  children: ReactNode;
}
