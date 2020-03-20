import {Action, action} from 'easy-peasy';

interface photoType {
  name: string;
  uri: string;
}

interface addPhotoType extends photoType {}

interface deletePhotoType {
  name: string;
}

export interface GameGalleryType {
  photos: photoType[];
  addPhoto: Action<GameGalleryType, addPhotoType>;
  deletePhoto: Action<GameGalleryType, deletePhotoType>;
}

export const photoModel: GameGalleryType = {
  photos: [],
  addPhoto: action((state, pl) => {
    state.photos = [...state.photos, pl];
  }),
  deletePhoto: action((state, pl) => {
    if (state.photos.some(i => i.name == pl.name)) {
      let index = state.photos.findIndex(i => (i.name = pl.name));

      state.photos = [
        ...state.photos.slice(0, index),
        ...state.photos.slice(index + 1),
      ];
    }
  }),
};
