import { TILE_SIZE, WINDOW_WIDTH } from '../..';
import { LOBBYROOM_MAP_Y_COUNT } from './LobbyRoom/LobbyRoomMap';

export const TILE_SIZE_DOUBLED = TILE_SIZE * 2;
export const TILE_SIZE_HALVED = TILE_SIZE * 0.5;

/**
 * @const DEFAULT_OFFSET_X
 * Offset horizontal par défaut de l'image de background
 */
export const DEFAULT_OFFSET_X = WINDOW_WIDTH / 2 - TILE_SIZE_HALVED;

export const findPlayerPositionWithOffset = (
  offsetY: number,
  offsetX: number,
) => {
  const DEFAULT_OFFSET_Y = goToInitialOffsetY();

  /**
   * @const YOffsetsSubstracted
   * Gère le cas où Ycoordinate = 0 pour retourner 0 au lieu de -1
   */
  const YOffsetsSubstracted = Math.floor(DEFAULT_OFFSET_Y - offsetY);
  const Ycoordinate =
    YOffsetsSubstracted === 0
      ? Math.floor((DEFAULT_OFFSET_Y - offsetY) / TILE_SIZE)
      : Math.floor((DEFAULT_OFFSET_Y - offsetY) / TILE_SIZE) * -1 - 1;

  const Xcoordinate = Math.floor((DEFAULT_OFFSET_X - offsetX) / TILE_SIZE);

  return { Ycoordinate, Xcoordinate };
};

/**
 * @name goToInitialOffsetY
 * @description retourne l'offset initial vertical en pixels de la background image
 * @returns number offset en pixels
 */
export const goToInitialOffsetY = () => {
  /**
   * LOBBYROOM_MAP_Y_COUNT = nombre de tiles en hauteur
   * Hauteur de la map en pixels = nombre de tiles * valeur en pixels d'une tile
   */
  const MapHeightInPixels = LOBBYROOM_MAP_Y_COUNT * TILE_SIZE;
  const direction = -1;

  return direction * (MapHeightInPixels / 2 - TILE_SIZE_HALVED);
};

/**
 * @name goToInitialOffsetX
 * @description retourne l'offset initial horizontal en pixels de la background image
 * @returns number offset en pixels
 */
export const goToInitialOffsetX = (startingTilePositionX: number) => {
  const offsetToApply = startingTilePositionX;

  return TILE_SIZE * offsetToApply - DEFAULT_OFFSET_X;
};
