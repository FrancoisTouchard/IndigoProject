const O = 'O';
const X = 'X';
const Exit = 'EX';
const Entrance = 'EN';
const ActionPokéShop = 'APS';
const ActionPokéCenter = 'APKC';
const ActionPC = 'APC';

/**
 * Map width = 16 tiles, length = 12 tiles
 */
export const LobbyRoomMap = [
  [X, X, X, X, X, X, X, X, Exit, X, X, X, X, X, X, X],
  [X, X, X, X, O, O, O, O, O, O, X, X, X, X, X, X],
  [O, O, O, O, O, O, O, O, O, O, X, X, X, X, X, X],
  [X, X, O, O, X, X, X, X, X, X, X, X, X, X, X, X],
  [X, X, O, O, X, X, X, X, X, X, X, X, X, X, X, X],
  [X, X, ActionPokéShop, O, X, X, X, X, X, X, X, X, O, O, O, O],
  [X, X, O, O, X, X, X, X, X, X, X, X, X, O, X, X],
  [O, O, O, O, O, O, O, ActionPokéCenter, O, O, O, O, O, O, O, X],
  [X, X, X, X, O, O, O, O, O, O, O, O, O, O, O, ActionPC],
  [X, X, X, X, O, O, O, O, O, O, O, O, O, O, O, O],
  [O, O, O, O, O, O, O, O, O, O, O, O, X, X, X, X],
  [O, O, O, O, O, O, O, Entrance, Entrance, O, O, O, X, X, X, X],
];
