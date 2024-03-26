import { TILE_SIZE, VERTICAL_TILE_COUNT, WINDOW_WIDTH } from '../..';
import { LOBBYROOM_MAP_Y_COUNT } from './LobbyRoom/LobbyRoomMap';

/**
 * @const TILE_SIZE_DOUBLED
 * Applique la valeur des offsets convertis en tiles
 * pour déplacer le background et ajuster la position de Player
 */
export const TILE_SIZE_DOUBLED = TILE_SIZE * 2;

/**
 * @const TILE_SIZE_HALVED
 * Centrer Player dans une tile
 */
export const TILE_SIZE_HALVED = TILE_SIZE * 0.5;

/**
 * @const DEFAULT_OFFSET_Y
 * Largeur/hauteur de l'écran noir qu'on voit quand Player est en y:0, x:0
 */
export const DEFAULT_OFFSET_Y =
  VERTICAL_TILE_COUNT / 2 + TILE_SIZE_DOUBLED + TILE_SIZE_HALVED;

/**
 * @const DEFAULT_OFFSET_X
 * Largeur/hauteur de l'écran noir qu'on voit quand Player est en y:0, x:0
 */
export const DEFAULT_OFFSET_X =
  WINDOW_WIDTH / 2 + TILE_SIZE_DOUBLED - TILE_SIZE_HALVED;

export const findPlayerPositionWithOffset = (
  offsetY: number,
  offsetX: number,
) => {
  const Ycoordinate = Math.floor((DEFAULT_OFFSET_Y - offsetY) / TILE_SIZE);
  const Xcoordinate = Math.floor((DEFAULT_OFFSET_X - offsetX) / TILE_SIZE);

  return `[${Ycoordinate}, ${Xcoordinate}]`;
};

export const goToInitialOffsetY = () => {
  const MapHeightInPixels = LOBBYROOM_MAP_Y_COUNT * TILE_SIZE;

  return -1 * (MapHeightInPixels / 2 - TILE_SIZE_HALVED);
};

export const goToInitialOffsetX = (
  playerPositionX: number,
  startingTilePositionX: number,
) => {
  const offsetToApply = playerPositionX - startingTilePositionX;

  return TILE_SIZE * offsetToApply - TILE_SIZE_HALVED;
};
