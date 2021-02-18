import {PixelRatio} from 'react-native';

import {
  IS_IOS,
  DESIGN_WIDTH,
  DESIGN_HEIGHT,
  WINDOW_WIDTH, // window width dp
  WINDOW_HEIGHT, // window height dp
} from '../../constants';

export const wp = (width: number) => {
  if (!IS_IOS) {
    return width;
  }

  const elemWidth = width;
  const scale = elemWidth / DESIGN_WIDTH;
  const dpi = WINDOW_WIDTH * scale;
  return PixelRatio.roundToNearestPixel(dpi);
};

export const hp = (height: number) => {
  if (!IS_IOS) {
    return height;
  }

  const elemHeight = height;
  const scale = elemHeight / DESIGN_HEIGHT;
  const dpi = WINDOW_HEIGHT * scale;
  return PixelRatio.roundToNearestPixel(dpi);
};

export const fp = (size: number) => {
  if (!IS_IOS) {
    return size;
  }

  const elemFont = size;
  const scale = WINDOW_WIDTH / DESIGN_WIDTH;
  const dpi = scale * elemFont;
  return PixelRatio.roundToNearestPixel(dpi);
};