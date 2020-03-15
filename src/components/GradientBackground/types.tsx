import React, {ReactNode} from 'react';

export interface GradientBackgroundType {
  colors?: string[];
  messageRef?: any;
  onlineRef?: any;
  start?: {x: number; y: number};
  end?: {x: number; y: number};
  children: ReactNode;
  style?: {[t: string]: any};
}
