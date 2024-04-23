import React, { memo } from 'react';
import { View } from 'react-native';

const PokedexComponent = () => {
  return <View style={{ flex: 1, backgroundColor: 'pink' }} />;
};

export const Pokedex = memo(PokedexComponent);
