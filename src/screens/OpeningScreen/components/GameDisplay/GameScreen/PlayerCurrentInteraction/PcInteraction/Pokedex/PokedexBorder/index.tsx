import { white } from 'assets/AnimationOpening/stylesColorsCode';
import React, { memo } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { WINDOW_WIDTH } from 'src/screens/OpeningScreen/components/GameDisplay';

interface pokedexBorderText {
  text: string;
}

const PokedexBorderComponent = ({ text }: pokedexBorderText) => {
  return (
    <View style={styles.pokedexBorder}>
      <Text style={styles.text}>{text}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  pokedexBorder: {
    width: WINDOW_WIDTH,
    height: '10%',
    backgroundColor: '#1e81b0',
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    fontFamily: 'PokemonClassic',
    fontSize: 10,
    color: white,
  },
});

export const PokedexBorder = memo(PokedexBorderComponent);
