const O = 'O';
const X = 'X';
const EXIT = 'EX';
const ENTRANCE = 'EN';
const ACTION_POKESHOP = 'APS';
const ACTION_POKECENTER = 'APKC';
const ACTION_PC = 'APC';

export const LOBBYROOM_MAP_X_COUNT = 16;
export const LOBBYROOM_MAP_Y_COUNT = 12;
export const ENTRANCE_POSITION_X = 7;

export const LobbyRoomMap = [
  [X, X, X, X, X, X, X, X, EXIT, X, X, X, X, X, X, X],
  [X, X, X, X, O, O, O, O, O, O, X, X, X, X, X, X],
  [O, O, O, O, O, O, O, O, O, O, X, X, X, X, X, X],
  [X, X, O, O, X, X, X, X, X, X, X, X, X, X, X, X],
  [X, X, O, O, X, X, X, X, X, X, X, X, X, X, X, X],
  [X, X, ACTION_POKESHOP, O, X, X, X, X, X, X, X, X, O, O, O, O],
  [X, X, O, O, X, X, X, X, X, X, X, X, X, O, X, X],
  [O, O, O, O, O, O, O, ACTION_POKECENTER, O, O, O, O, O, O, O, X],
  [X, X, X, X, O, O, O, O, O, O, O, O, O, O, O, ACTION_PC],
  [X, X, X, X, O, O, O, O, O, O, O, O, O, O, O, O],
  [O, O, O, O, O, O, O, O, O, O, O, O, X, X, X, X],
  [O, O, O, O, O, O, O, ENTRANCE, ENTRANCE, O, O, O, X, X, X, X],
];
