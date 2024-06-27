export interface PokemonDataProps {
  number: string;
  name: string;
}

export const POKEDEX_ITEMS: PokemonDataProps[] = [
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

export const usePCMenu = () => {
  /**
   * prévision des interactions futures du Menu
   */
  const onPokedexPress = () => {};
  const onPokemonPress = () => {};
  const onExitPress = () => {};

  const onMenuItemPress = (clickedItem: string) => {
    if (clickedItem === 'POKéDEX') onPokedexPress();
    if (clickedItem === 'POKéMON') onPokemonPress();
    if (clickedItem === 'EXIT') onExitPress();
  };

  return { onMenuItemPress };
};
