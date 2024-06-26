import React, { memo, useEffect } from 'react';
import { StyleSheet, View } from 'react-native';

import { ListSelector } from '../../../PCMenu/ListSelector';
import { PokedexBorder } from './PokedexBorder';
import { PokedexSingleRow } from './PokedexSingleRow';

interface PokedexProps {
  setActiveMenu: (activeMenu: string) => void;
  focusedPokedexItem: number;
}
export interface PokemonDataProps {
  number: string;
  name: string;
}

export const pokemonData: PokemonDataProps[] = [
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

const PokedexComponent = ({
  setActiveMenu,
  focusedPokedexItem,
}: PokedexProps) => {
  useEffect(() => {
    setActiveMenu('Pokedex');
  }, []);

  return (
    <>
      <PokedexBorder text={'- POKéMON   LIST - '} />
      <View style={styles.listContainer}>
        {pokemonData.map((pokemon, index) => (
          <View key={index} style={styles.rowContainer}>
            <PokedexSingleRow number={pokemon.number} name={pokemon.name} />
            {index === focusedPokedexItem && <ListSelector leftOffset={0} />}
          </View>
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
  rowContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
});

export const Pokedex = memo(PokedexComponent);
