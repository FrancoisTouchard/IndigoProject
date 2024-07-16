import {
  pokédexBorderColor,
  pokédexBorderFontSize,
  pokémonFont,
  white,
} from 'assets/appStyle';
import React, { memo } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { WINDOW_WIDTH } from 'src/screens/OpeningScreen/components/GameDisplay';

interface pokedexBorderText {
  text: string;
}

const POKEDEX_BORDER_HEIGHT = '10%';

const PokedexBorderComponent = ({ text }: pokedexBorderText) => {
  return (
    <View style={styles.pokedexBorder}>
      <Text style={styles.text}>{text}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  pokedexBorder: {
    // voir si on peut remplacer WINDOW_WIDTH par 100%
    width: WINDOW_WIDTH,
    height: POKEDEX_BORDER_HEIGHT,
    backgroundColor: pokédexBorderColor,
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    fontFamily: pokémonFont,
    fontSize: pokédexBorderFontSize,
    color: white,
  },
});

export const PokedexBorder = memo(PokedexBorderComponent);
