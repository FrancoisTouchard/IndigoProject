import React, { memo } from 'react';
import { StyleSheet } from 'react-native';
import FastImage from 'react-native-fast-image';

const listSelectorHorizontalOffset = -20;
const listSelectorDimensions = 14;

const ListSelectorComponent = () => {
  return (
    <FastImage
      style={styles.listSelector}
      source={require('../../../../../../../../assets/ResizableMenu/ListSelector.png')}
      resizeMode={FastImage.resizeMode.contain}
    />
  );
};

const styles = StyleSheet.create({
  listSelector: {
    height: listSelectorDimensions,
    width: listSelectorDimensions,
    position: 'absolute',
    left: listSelectorHorizontalOffset,
  },
});

export const ListSelector = memo(ListSelectorComponent);
