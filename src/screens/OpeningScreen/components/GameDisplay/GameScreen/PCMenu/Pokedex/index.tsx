import { pokédexBackgroundColor } from 'assets/appStyle';
import React, { memo } from 'react';
import { StyleSheet, View } from 'react-native';
import { GenericList } from 'src/components/GenericList';

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
const POKEDEX_ITEMS_LEFT_OFFSET = 0;
const POKEDEX_ITEM_HEIGHT = 17;
const POKEDEX_ITEM_LEFT_OFFSET = 22;

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
          listSelectorOffset={POKEDEX_ITEMS_LEFT_OFFSET}
          listItemHeight={POKEDEX_ITEM_HEIGHT}
          listItemLeftOffset={POKEDEX_ITEM_LEFT_OFFSET}
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
