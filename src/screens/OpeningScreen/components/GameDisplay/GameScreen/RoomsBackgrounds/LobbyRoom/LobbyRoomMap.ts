const O = 'O';
const X = 'X';
const EX = 'Exit';
const EN = 'Entrance';
const APS = 'ActionPokéShop';
const APKC = 'ActionPokéCenter';
const APC = 'ActionPC';

/**
 * Map width = 16 tiles, length = 12 tiles
 */
export const LobbyRoomMap = [
  [X, X, X, X, X, X, X, X, EX, X, X, X, X, X, X, X],
  [X, X, X, X, O, O, O, O, O, O, X, X, X, X, X, X],
  [O, O, O, O, O, O, O, O, O, O, X, X, X, X, X, X],
  [X, X, O, O, X, X, X, X, X, X, X, X, X, X, X, X],
  [X, X, O, O, X, X, X, X, X, X, X, X, X, X, X, X],
  [X, X, APS, O, X, X, X, X, X, X, X, X, O, O, O, O],
  [X, X, O, O, X, X, X, X, X, X, X, X, X, O, X, X],
  [O, O, O, O, O, O, O, APKC, O, O, O, O, O, O, O, X],
  [X, X, X, X, O, O, O, O, O, O, O, O, O, O, O, APC],
  [X, X, X, X, O, O, O, O, O, O, O, O, O, O, O, O],
  [O, O, O, O, O, O, O, O, O, O, O, O, X, X, X, X],
  [O, O, O, O, O, O, O, EN, EN, O, O, O, X, X, X, X],
];
