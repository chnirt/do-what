import {Dimensions, Platform} from 'react-native';

export const {width: WINDOW_WIDTH, height: WINDOW_HEIGHT} = Dimensions.get(
  'window',
);

export const DESIGN_WIDTH = 375;
export const DESIGN_HEIGHT = 812;

export const PRIMARY_COLOR = '#9254de';

export const IS_IOS = Platform.OS === 'ios';

export const ITALIC_FONTS = 'RobotoMono-Italic';
export const MEDIUM_FONTS = 'RobotoMono-Medium';
export const REGULAR_FONTS = 'RobotoMono-Regular';
