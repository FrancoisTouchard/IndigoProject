import { black, menuFontSize, pokémonFont } from 'assets/appStyle';
import React, { memo } from 'react';
import { StyleSheet, Text } from 'react-native';

import { LIST_ITEM_HEIGHT } from '..';

const ListItemTextComponent = ({ item }: { item: string }) => {
  return <Text style={[styles.menuText]}>{item}</Text>;
};
export const ListItemText = memo(ListItemTextComponent);

const styles = StyleSheet.create({
  menuText: {
    fontFamily: pokémonFont,
    fontSize: menuFontSize,
    color: black,
    height: LIST_ITEM_HEIGHT,
  },
});
