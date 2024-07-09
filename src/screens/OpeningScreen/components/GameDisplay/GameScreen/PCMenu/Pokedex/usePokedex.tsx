export const usePokedex = () => {
  const onPokedexItemPress = (clickedItem: string) => {
    const onPokemonPress = () => {
      // à faire dans le ticket suivant
    };

    if (clickedItem === 'BULBASAUR') onPokemonPress();
  };
  return { onPokedexItemPress };
};
