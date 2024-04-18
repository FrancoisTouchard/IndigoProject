import { StyleSheet } from 'react-native';

import { white } from '../../../assets/AnimationOpening/stylesColorsCode';

export const BORDER_SIZE = 12;

export const styles = StyleSheet.create({
  menuContainer: {
    position: 'relative',
    flex: 1,
  },
  topAndBottomLineContainer: {
    flexDirection: 'row',
  },
  lineContainer: {
    flex: 1,
    flexDirection: 'row',
  },
  middleLineContainer: {
    flex: 1,
    flexDirection: 'row',
    backgroundColor: white,
  },
  topLeftCorner: {
    width: BORDER_SIZE,
    height: BORDER_SIZE,
    zIndex: 1,
  },
  horizontalBorder: {
    width: '100%',
    height: BORDER_SIZE,
  },
  topRightCorner: {
    width: BORDER_SIZE,
    height: BORDER_SIZE,
    position: 'absolute',
    top: 0,
    right: 0,
  },
  rightVerticalBorder: {
    width: BORDER_SIZE,
    height: '100%',
  },
  leftVerticalBorder: {
    width: BORDER_SIZE,
    height: '100%',
    transform: [{ rotate: '180deg' }],
  },
  bottomRightCorner: {
    width: BORDER_SIZE,
    height: BORDER_SIZE,
    position: 'absolute',
    bottom: 0,
    right: 0,
  },
  bottomLeftCorner: {
    width: BORDER_SIZE,
    height: BORDER_SIZE,
    position: 'absolute',
    bottom: 0,
    left: 0,
    zIndex: 1,
  },
});
