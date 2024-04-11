import React, { memo } from 'react';
import { StyleSheet, View } from 'react-native';
import FastImage from 'react-native-fast-image';

interface ListSelectorProps {
  selectedItem: number;
}

const listSelectorHorizontalOffset = -25;
const listSelectorDimensions = 15;
const listItemVerticalSpacing = 22;

const ListSelectorComponent = ({ selectedItem }: ListSelectorProps) => {
  let listSelectorAligner = 6;
  /**
   * Corrige le défaut d'alignement horizontal après le 1er item du menu
   */
  if (selectedItem === 1) {
    listSelectorAligner = 7;
  } else if (selectedItem === 2) {
    listSelectorAligner = 8;
  }

  const selectorPosition =
    selectedItem * listItemVerticalSpacing + listSelectorAligner;

  return (
    <View style={[styles.selectorContainer, { top: selectorPosition }]}>
      <FastImage
        style={styles.listSelector}
        source={require('../../../../../../../../assets/MenusScreens/ListSelector.png')}
        resizeMode={FastImage.resizeMode.contain}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  selectorContainer: {
    position: 'absolute',
    left: listSelectorHorizontalOffset,
  },
  listSelector: {
    height: listSelectorDimensions,
    width: listSelectorDimensions,
  },
});

export const ListSelector = memo(ListSelectorComponent);
