import { black } from 'assets/AnimationOpening/stylesColorsCode';
import React, { memo } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { WINDOW_WIDTH } from 'src/screens/OpeningScreen/components/GameDisplay';

interface PokemonData {
  number: string;
  name: string;
}

const singleRowContainerText = {
  fontFamily: 'PokemonClassic',
  fontSize: 10,
  color: black,
  textAlign: 'left' as const,
};

const PokedexSingleRowComponent = ({ number, name }: PokemonData) => {
  return (
    <View style={styles.singleRowContainer}>
      <Text style={styles.pokemonNumber}>No {number}</Text>
      <Text style={styles.pokemonName}>{name}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  singleRowContainer: {
    height: 20,
    width: WINDOW_WIDTH,
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center',
    paddingHorizontal: 20,
  },
  pokemonNumber: {
    ...singleRowContainerText,
    flex: 1,
    marginRight: 20,
  },
  pokemonName: {
    ...singleRowContainerText,
    flex: 4,
  },
});

export const PokedexSingleRow = memo(PokedexSingleRowComponent);
