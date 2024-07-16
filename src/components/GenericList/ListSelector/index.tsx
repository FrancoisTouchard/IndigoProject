import React, { memo } from 'react';
import { StyleSheet } from 'react-native';
import FastImage from 'react-native-fast-image';

const LIST_SELECTOR_DIMENSIONS = 10;
const LIST_OFFSET = 6;
export const LIST_SELECTOR_DIMENSIONS_WITH_OFFSET =
  LIST_SELECTOR_DIMENSIONS + LIST_OFFSET * 2;

const ListSelectorComponent = () => {
  const listSelectorStyle = { left: -(LIST_SELECTOR_DIMENSIONS + LIST_OFFSET) };

  return (
    <FastImage
      style={[styles.listSelector, listSelectorStyle]}
      source={require('../../../../assets/ResizableMenu/ListSelector.png')}
      resizeMode={FastImage.resizeMode.contain}
    />
  );
};

const styles = StyleSheet.create({
  listSelector: {
    height: LIST_SELECTOR_DIMENSIONS,
    width: LIST_SELECTOR_DIMENSIONS,
    position: 'absolute',
  },
});

export const ListSelector = memo(ListSelectorComponent);
