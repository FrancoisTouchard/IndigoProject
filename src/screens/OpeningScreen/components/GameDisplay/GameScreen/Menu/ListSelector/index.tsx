import React, { memo } from 'react';
import { StyleSheet } from 'react-native';
import FastImage from 'react-native-fast-image';

import { MENU_ITEMS_LEFT_OFFSET } from '..';

const LIST_SELECTOR_DIMENSIONS = 10;

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
    height: LIST_SELECTOR_DIMENSIONS,
    width: LIST_SELECTOR_DIMENSIONS,
    position: 'absolute',
    left: -MENU_ITEMS_LEFT_OFFSET + LIST_SELECTOR_DIMENSIONS / 2,
  },
});

export const ListSelector = memo(ListSelectorComponent);
