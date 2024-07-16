import { pokédexBackgroundColor } from 'assets/appStyle';
import React, { memo } from 'react';
import { StyleSheet, View } from 'react-native';
import { GenericList } from 'src/components/GenericList';
import { ListItemText } from 'src/components/GenericList/ListItemText';

import { IsPressedType } from '../../../types';
import { PokedexBorder } from './PokedexBorder';
import { usePokedex } from './usePokedex';

interface PokedexProps {
  isPressed: IsPressedType;
}

export const pokemonData = [
  'BULBASAUR',
  'CHARMANDER',
  'SQUIRTLE',
  'GENGAR',
  'JIGGLYPUFF',
  'TOTODILE',
];

const TOP_BORDER_TEXT = '- POKéMON   LIST - ';
const BOTTOM_BORDER_TEXT = 'tips de NAVIGATION';

const renderListItem = (item: string) => {
  return (
    <>
      <ListItemText item={item} />
    </>
  );
};

const PokedexComponent = ({ isPressed }: PokedexProps) => {
  const { onPokedexItemPress } = usePokedex();

  return (
    <>
      <PokedexBorder text={TOP_BORDER_TEXT} />
      <View style={styles.listContainer}>
        <GenericList
          isPressed={isPressed}
          listItems={pokemonData}
          onMenuItemPress={onPokedexItemPress}
          renderListItem={renderListItem}
        />
      </View>
      <PokedexBorder text={BOTTOM_BORDER_TEXT} />
    </>
  );
};

const styles = StyleSheet.create({
  listContainer: {
    flex: 1,
    flexDirection: 'column',
    backgroundColor: pokédexBackgroundColor,
  },
});

export const Pokedex = memo(PokedexComponent);
