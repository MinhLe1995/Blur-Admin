import { Platform } from 'react-native';

export const HEADER_MAX_HEIGHT = 250;
export const HEADER_MIN_HEIGHT = Platform.OS == 'ios' ? 100 : 113;
export const HEADER_SCROLL_DISTANCE = HEADER_MAX_HEIGHT - HEADER_MIN_HEIGHT;