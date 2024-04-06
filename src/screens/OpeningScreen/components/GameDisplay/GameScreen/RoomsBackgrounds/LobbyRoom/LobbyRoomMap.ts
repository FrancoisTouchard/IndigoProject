import { TILE_SIZE } from '../../..';

export const O = 'O';
export const X = 'X';
export const EXIT = 'EX';
export const ENTRANCE = 'EN';
export const ACTION_POKESHOP = 'APS';
export const ACTION_POKECENTER = 'APKC';
export const ACTION_PC = 'APC';
export const WALKABLE_TILE = [
  O,
  ENTRANCE,
  EXIT,
  ACTION_POKESHOP,
  ACTION_POKECENTER,
  ACTION_PC,
];
export const ACTION_TILES = [
  EXIT,
  ACTION_POKESHOP,
  ACTION_POKECENTER,
  ACTION_PC,
];

export const LOBBYROOM_MAP_X_COUNT = 16;
export const LOBBYROOM_MAP_Y_COUNT = 12;
export const ENTRANCE_POSITION_X = 7;
export const TILE_SIZE_HALVED = TILE_SIZE * 0.5;
export const STEP_PACE_IN_PIXELS = TILE_SIZE / 20;
export const COLLISION_OVERLAP_IN_PIXELS = 3;

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
