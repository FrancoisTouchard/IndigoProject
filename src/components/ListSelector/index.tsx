import React, { memo } from 'react';
import { StyleSheet } from 'react-native';
import FastImage from 'react-native-fast-image';

interface ListSelectorProps {
  leftOffset: number;
}

const LIST_SELECTOR_DIMENSIONS = 10;

const ListSelectorComponent = ({ leftOffset }: ListSelectorProps) => {
  const listSelectorLeftOffset = -leftOffset + LIST_SELECTOR_DIMENSIONS / 2;
  return (
    <FastImage
      style={[styles.listSelector, { left: listSelectorLeftOffset }]}
      source={require('../../../assets/ResizableMenu/ListSelector.png')}
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
