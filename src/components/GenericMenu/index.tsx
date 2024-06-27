import { black } from 'assets/AnimationOpening/stylesColorsCode';
import React, { memo } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import {
  LIST_ITEM_HEIGHT,
  MENU_ITEMS_LEFT_OFFSET,
} from 'src/screens/OpeningScreen/components/GameDisplay/GameScreen/PCMenu';
import { ListSelector } from 'src/screens/OpeningScreen/components/GameDisplay/GameScreen/PCMenu/ListSelector';
import { IsPressedType } from 'src/screens/OpeningScreen/components/GameDisplay/types';

import { useGenericMenu } from './useGenericMenu';

interface Props {
  isPressed: IsPressedType;
  menuItems: string[];
  onMenuItemPress: (clickedItem: string) => void;
}

const GenericMenuComponent = ({
  isPressed,
  menuItems,
  onMenuItemPress,
}: Props) => {
  const { selectorPosition } = useGenericMenu(
    isPressed,
    menuItems,
    onMenuItemPress,
  );

  return (
    <>
      {menuItems.map((item, index) => (
        <View key={index} style={styles.menuItemContainer}>
          <Text style={styles.menuText}>{item}</Text>
          {index === selectorPosition && (
            <ListSelector leftOffset={MENU_ITEMS_LEFT_OFFSET} />
          )}
        </View>
      ))}
    </>
  );
};

export const GenericMenu = memo(GenericMenuComponent);

const styles = StyleSheet.create({
  menuItemContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  menuText: {
    fontFamily: 'PokemonClassic',
    fontSize: 10,
    height: LIST_ITEM_HEIGHT,
    color: black,
  },
});
