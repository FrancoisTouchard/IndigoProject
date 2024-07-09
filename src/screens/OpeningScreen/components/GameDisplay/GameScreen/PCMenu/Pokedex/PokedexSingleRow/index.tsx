import { black, pokédexFontSize, pokémonFont } from 'assets/appStyle';
import React, { memo } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { WINDOW_WIDTH } from 'src/screens/OpeningScreen/components/GameDisplay';

interface PokemonData {
  number: string;
  name: string;
}

const PokedexSingleRowComponent = ({ number, name }: PokemonData) => {
  return (
    <View style={styles.singleRowContainer}>
      <Text style={[styles.singleRowContainer, styles.pokemonNumber]}>
        No {number}
      </Text>
      <Text style={[styles.singleRowContainer, styles.pokemonName]}>
        {name}
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  singleRowContainer: {
    height: 20,
    // voir si on peut remplacer WINDOW_WIDTH par 100%
    width: WINDOW_WIDTH,
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center',
    paddingHorizontal: 20,
    fontFamily: pokémonFont,
    fontSize: pokédexFontSize,
    color: black,
    textAlign: 'left',
  },
  pokemonNumber: {
    flex: 1,
    marginRight: 20,
  },
  pokemonName: {
    flex: 4,
  },
});

export const PokedexSingleRow = memo(PokedexSingleRowComponent);
