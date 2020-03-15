export const PRIMARY_COLOR: string = '#EC2863';
export const PRIMARY_DARK_COLOR: string = '#B4003A';
export const PRIMARY_LIGHT_COLOR: string = '#ff6691';

export const FACEBOOK_COLOR: string = '#3C579A';
export const GOOGLE_SIGN_UP_COLOR: string = '#FFFFFF';

export const INPUT_BORDER_COLOR = '#9B9B9B';
export const INPUT_BORDER_COLOR_DARK = '#7A7A7A';

export const INPUT_BORDER_COLOR_ERROR = '#FB952A';
export const LABEL_ACTIVE_BACKGROUND_COLOR = '#FFDADE';

export const STAT_LABEL_COLOR = '#C81A50';
export const REPLACE_COLOR = '#6AB14F';
export const REPLACE_COLOR_DARK = '#50853B';
export const BATHROOM_COLOR = '#4772FF';
export const GAME_POINT_INACTIVE = '#DE4169';
export const CANCEL_COLOR = '#F12926';
export const NEXT_COLOR = '#FFB901';
export const CANCEL_COLOR_DARK = '#AE1B19';
export const NEXT_COLOR_DARK = '#A47A0C';
export const PHOTO_COLOR = '#9EFFEC';
export const PHOTO_COLOR_DARK = '#65A79A';

export const EPIC_COLOR = '#8EFF00';
export const EPIC_COLOR_DARK = '#FF6719';

export const LEGENDARY_COLOR = '#CBFDFF';
export const LEGENDARY_COLOR_DARK = '#EE367B';

export const HEY_COLOR = '#007ACE';
export const HEY_COLOR_DARK = '#005894';
export const getRarityColor = (rarity: string) => {
  switch (rarity.toLowerCase().trim()) {
    case 'normal':
      return {first: PRIMARY_LIGHT_COLOR, second: PRIMARY_DARK_COLOR};
    case 'epic':
      return {first: EPIC_COLOR, second: EPIC_COLOR_DARK};
    case 'legendary':
      return {first: LEGENDARY_COLOR, second: LEGENDARY_COLOR_DARK};
    default:
      return {first: PRIMARY_LIGHT_COLOR, second: PRIMARY_DARK_COLOR};
  }
};
