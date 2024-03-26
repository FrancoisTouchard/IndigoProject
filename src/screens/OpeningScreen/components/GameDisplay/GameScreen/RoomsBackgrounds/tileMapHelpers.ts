import {
  GAME_DISPLAY_HEIGHT,
  TILE_SIZE,
  VERTICAL_TILE_COUNT,
  WINDOW_WIDTH,
} from '../..';

/**
 * @const DEFAULT_OFFSET_Y et @const DEFAULT_OFFSET_X
 * Largeur/hauteur de l'écran noir qu'on voit quand Player est en y:0, x:0
 *
 * @const GAP_FIXER_OFFSET
 * Applique la valeur des offsets convertis en tiles
 * pour déplacer le background et ajuster la position de Player
 *
 * @const GAP_FIXER_TILE
 * Centrer Player dans une tile
 */
export const GAP_FIXER_OFFSET = TILE_SIZE * 2;
export const GAP_FIXER_TILE = TILE_SIZE * 0.5;
export const DEFAULT_OFFSET_Y =
  VERTICAL_TILE_COUNT / 2 + GAP_FIXER_OFFSET + GAP_FIXER_TILE;
export const DEFAULT_OFFSET_X =
  WINDOW_WIDTH / 2 + GAP_FIXER_OFFSET - GAP_FIXER_TILE;

export const findPlayerPositionWithOffset = (
  offsetY: number,
  offsetX: number,
) => {
  const Ycoordinate = Math.floor((DEFAULT_OFFSET_Y - offsetY) / TILE_SIZE);
  const Xcoordinate = Math.floor((DEFAULT_OFFSET_X - offsetX) / TILE_SIZE);

  return `[${Ycoordinate}, ${Xcoordinate}]`;
};

export const goToInitialOffsetY = () => {
  return -1 * (GAME_DISPLAY_HEIGHT / 2 + GAP_FIXER_OFFSET + GAP_FIXER_TILE * 2);
};

export const goToInitialOffsetX = (
  playerPositionX: number,
  startingTilePositionX: number,
) => {
  const offsetToApply = playerPositionX - startingTilePositionX;

  return TILE_SIZE * offsetToApply;
};
