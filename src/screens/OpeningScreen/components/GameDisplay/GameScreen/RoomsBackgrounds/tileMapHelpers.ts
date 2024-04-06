import { ArrowType } from '../../../GameControls/DirectionalCross/DirectionalArrow/types';
import { TILE_SIZE, WINDOW_WIDTH } from '../..';
import { findNextStepAllocation } from './allocationHelpers';
import {
  COLLISION_OVERLAP_IN_PIXELS,
  LOBBYROOM_MAP_Y_COUNT,
  TILE_SIZE_HALVED,
  X,
} from './LobbyRoom/LobbyRoomMap';

const direction = -1;

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

  const YCoordinateOffsetInTiles = Math.floor(
    (DEFAULT_OFFSET_Y - offsetY - 1) / TILE_SIZE,
  );

  /**
   * @const Ycoordinate
   * Convertit offsetY en positif et lui attribue l'emplacement correspondant dans l'array LobbyRoomMap
   */
  const currentTileYArrayCoordinate = YCoordinateOffsetInTiles * direction - 1;

  const currentTileXArrayCoordinate = Math.floor(
    (DEFAULT_OFFSET_X - offsetX) / TILE_SIZE,
  );

  return { currentTileYArrayCoordinate, currentTileXArrayCoordinate };
};

/**
 * @name goToInitialOffsetY
 * @description retourne l'offset initial vertical en pixels de la background image
 * @returns number offset en pixels
 */
export const goToInitialOffsetY = (): number => {
  /**
   * LOBBYROOM_MAP_Y_COUNT = nombre de tiles en hauteur
   * Hauteur de la map en pixels = nombre de tiles * valeur en pixels d'une tile
   */
  const MapHeightInPixels = LOBBYROOM_MAP_Y_COUNT * TILE_SIZE;

  return direction * (MapHeightInPixels / 2 - TILE_SIZE_HALVED);
};

/**
 * @name goToInitialOffsetX
 * @description retourne l'offset initial horizontal en pixels de la background image
 * On ajoute +1 TILE_SIZE pour transcrire des coordonnées d'array en un compte de tiles
 * @returns number offset en pixels
 */
export const goToInitialOffsetX = (startingTilePositionX: number) => {
  const offsetToApply = startingTilePositionX;

  return TILE_SIZE * offsetToApply - DEFAULT_OFFSET_X + TILE_SIZE;
};

export const isPlayerCornersInAllowedTile = (
  currentOffsetCounterY: number,
  currentOffsetCounterX: number,
  isPressed: ArrowType,
) => {
  const nextStepInfosTopLeftCorner = findNextStepAllocation(
    currentOffsetCounterY + TILE_SIZE - COLLISION_OVERLAP_IN_PIXELS,
    currentOffsetCounterX - COLLISION_OVERLAP_IN_PIXELS,
    isPressed,
  );
  const nextStepInfosTopRightCorner = findNextStepAllocation(
    currentOffsetCounterY + TILE_SIZE - COLLISION_OVERLAP_IN_PIXELS,
    currentOffsetCounterX - TILE_SIZE + COLLISION_OVERLAP_IN_PIXELS,
    isPressed,
  );
  const nextStepInfosBottomRightCorner = findNextStepAllocation(
    currentOffsetCounterY + COLLISION_OVERLAP_IN_PIXELS,
    currentOffsetCounterX - TILE_SIZE + COLLISION_OVERLAP_IN_PIXELS,
    isPressed,
  );
  const nextStepInfosBottomLeftCorner = findNextStepAllocation(
    currentOffsetCounterY + COLLISION_OVERLAP_IN_PIXELS,
    currentOffsetCounterX - COLLISION_OVERLAP_IN_PIXELS,
    isPressed,
  );

  const isOutOfBonds =
    nextStepInfosTopLeftCorner.isPlayerOutOfBonds ||
    nextStepInfosTopRightCorner.isPlayerOutOfBonds ||
    nextStepInfosBottomLeftCorner.isPlayerOutOfBonds ||
    nextStepInfosBottomRightCorner.isPlayerOutOfBonds;

  return (
    nextStepInfosTopLeftCorner.nextStepAllocation !== X &&
    nextStepInfosTopRightCorner.nextStepAllocation !== X &&
    nextStepInfosBottomRightCorner.nextStepAllocation !== X &&
    nextStepInfosBottomLeftCorner.nextStepAllocation !== X &&
    !isOutOfBonds
  );
};
