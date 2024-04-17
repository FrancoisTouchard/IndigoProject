import { StyleSheet } from 'react-native';

import {
  black,
  white,
} from '../../../../../../../assets/AnimationOpening/stylesColorsCode';

const borderSize = 20;
const menuItemsLeftOffset = 22;
const menuItemsVerticalSpacing = 3;

export const styles = StyleSheet.create({
  menuContainer: {
    position: 'relative',
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
    width: borderSize,
    height: borderSize,
    zIndex: 1,
  },
  horizontalBorder: {
    width: '100%',
    height: borderSize,
  },
  topRightCorner: {
    width: borderSize,
    height: borderSize,
    position: 'absolute',
    top: 0,
    right: 0,
  },
  rightVerticalBorder: {
    width: borderSize,
    height: '100%',
  },
  leftVerticalBorder: {
    width: borderSize,
    height: '100%',
    transform: [{ rotate: '180deg' }],
  },
  bottomRightCorner: {
    width: borderSize,
    height: borderSize,
    position: 'absolute',
    bottom: 0,
    right: 0,
  },
  bottomLeftCorner: {
    width: borderSize,
    height: borderSize,
    position: 'absolute',
    bottom: 0,
    left: 0,
    zIndex: 1,
  },
  menuItemsContainer: {
    flex: 1,
    marginLeft: menuItemsLeftOffset,
  },
  menuItemContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  menuText: {
    fontFamily: 'PokemonClassic',
    fontSize: 14,
    color: black,
    marginBottom: menuItemsVerticalSpacing,
  },
});
