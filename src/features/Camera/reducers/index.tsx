import {Action, action} from 'easy-peasy';

interface photoType {
  name: string;
  uri: string;
  showMenu?: boolean;
}

interface addPhotoType extends photoType {}

interface deletePhotoType {
  index: number;
}

interface showPhotoMenuType {
  index: number;
  show: boolean;
}

export interface GameGalleryType {
  photos: photoType[];
  addPhoto: Action<GameGalleryType, addPhotoType>;
  deletePhoto: Action<GameGalleryType, deletePhotoType>;
  showPhotoMenu: Action<GameGalleryType, showPhotoMenuType>;
  cleanPhotos: Action<GameGalleryType, any>;
}

export const photoModel: GameGalleryType = {
  photos: [],
  addPhoto: action((state, pl) => {
    if (state.photos.length < 10)
      state.photos = [...state.photos, {...pl, showMenu: false}];
  }),
  deletePhoto: action((state, pl) => {
    state.photos = [
      ...state.photos.slice(0, pl.index),
      ...state.photos.slice(pl.index + 1),
    ];
  }),
  showPhotoMenu: action((state, pl) => {
    state.photos = [
      ...state.photos.slice(0, pl.index),
      {...state.photos[pl.index], showMenu: pl.show},
      ...state.photos.slice(pl.index + 1),
    ];
  }),
  cleanPhotos: action(state => {
    state.photos = [];
  }),
};
