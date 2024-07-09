import { black, menuFontSize, pokémonFont } from 'assets/appStyle';
import React, { memo } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { ListSelector } from 'src/components/ListSelector';
import { IsPressedType } from 'src/screens/OpeningScreen/components/GameDisplay/types';

import { useGenericList } from './useGenericList';

interface Props {
  isPressed: IsPressedType;
  listItems: string[];
  onMenuItemPress: (clickedItem: string) => void;
  listSelectorOffset: number;
  listItemHeight: number;
  listItemLeftOffset: number;
}

const GenericListComponent = ({
  isPressed,
  listItems,
  onMenuItemPress,
  listSelectorOffset,
  listItemHeight,
  listItemLeftOffset,
}: Props) => {
  const { selectorPosition } = useGenericList(
    isPressed,
    listItems,
    onMenuItemPress,
  );

  return (
    <>
      {listItems.map((item, index) => (
        <View key={index} style={styles.menuItemContainer}>
          <Text
            style={[
              styles.menuText,
              { height: listItemHeight, left: listItemLeftOffset },
            ]}>
            {item}
          </Text>
          {index === selectorPosition && (
            <ListSelector leftOffset={listSelectorOffset} />
          )}
        </View>
      ))}
    </>
  );
};

export const GenericList = memo(GenericListComponent);

const styles = StyleSheet.create({
  menuItemContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  menuText: {
    fontFamily: pokémonFont,
    fontSize: menuFontSize,
    color: black,
  },
});
