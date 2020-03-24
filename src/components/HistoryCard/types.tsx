export interface HistoryCardTypes {
  _id: string;
  _onPressMedia: (item: number) => void;
  _onPressDetails: () => void;
  ref?: any;
  mediaToken: string;
  total_time: string;
  end_date: string;
  media: string[];
  Commentary: {
    commentary: string;
  };
  Points: {
    total: string;
    after24: string;
    rarity: string;
    completed: string;
    trophys: string;
    experience: string;
    grade: string;
    photos: string;
    commentary: string;
  };
  Challenge: {
    _id: string;
    title: string;
    points: string;
    description: string;
    portrait: string;
    arena: {
      name: string;
      portrait: string;
      description: string;
    };
    subtitle: string;
    badges: {
      type: {
        _id: string;
        name: string;
        image: string;
        color: string;
      };
      zone: {
        _id: string;
        name: string;
        image: string;
        color: string;
      };
      rarity: {
        _id: string;
        name: string;
        image: string;
        color: string;
      };
    };
  };
}
