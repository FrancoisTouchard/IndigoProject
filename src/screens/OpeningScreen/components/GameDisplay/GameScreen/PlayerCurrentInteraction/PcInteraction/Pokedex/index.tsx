import React, { memo } from 'react';
import { StyleSheet, View } from 'react-native';

import { PokedexBorder } from './PokedexBorder';
import { PokedexSingleRow } from './PokedexSingleRow';

const pokemonData = [
  {
    number: '001',
    name: 'BULBASAUR',
  },
  {
    number: '004',
    name: 'CHARMANDER',
  },
  {
    number: '007',
    name: 'SQUIRTLE',
  },
  {
    number: '025',
    name: 'PIKACHU',
  },
  {
    number: '039',
    name: 'JIGGLYPUFF',
  },
];

const PokedexComponent = () => {
  return (
    <>
      <PokedexBorder text={'- POKéMON   LIST - '} />
      <View style={styles.listContainer}>
        {pokemonData.map(pokemon => (
          <PokedexSingleRow
            key={pokemon.number}
            number={pokemon.number}
            name={pokemon.name}
          />
        ))}
      </View>
      <PokedexBorder text={'tips de NAVIGATION'} />
    </>
  );
};

const styles = StyleSheet.create({
  listContainer: {
    flex: 1,
    flexDirection: 'column',
    backgroundColor: '#F9F6EE',
  },
});

export const Pokedex = memo(PokedexComponent);
