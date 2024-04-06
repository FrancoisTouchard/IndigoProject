import { ArrowType } from '../../../GameControls/DirectionalCross/DirectionalArrow/types';
import { TILE_SIZE } from '../..';
import {
  LOBBYROOM_MAP_X_COUNT,
  LOBBYROOM_MAP_Y_COUNT,
  LobbyRoomMap,
  STEP_PACE_IN_PIXELS,
  X,
} from './LobbyRoom/LobbyRoomMap';
import {
  DEFAULT_OFFSET_X,
  findPlayerPositionWithOffset,
  goToInitialOffsetY,
} from './tileMapHelpers';

export const findTileAllocation = (
  tileYArrayCoordinate: number,
  tileXArrayCoordinate: number,
) => {
  if (
    tileYArrayCoordinate >= 0 &&
    tileYArrayCoordinate <= LOBBYROOM_MAP_Y_COUNT - 1 &&
    tileXArrayCoordinate >= 0 &&
    tileXArrayCoordinate <= LOBBYROOM_MAP_X_COUNT - 1
  ) {
    const tabIndexY = LOBBYROOM_MAP_Y_COUNT - tileYArrayCoordinate - 1;

    return LobbyRoomMap[tabIndexY][tileXArrayCoordinate];
  } else return X;
};

export const findNextStepAllocation = (
  currentOffsetY: number,
  currentOffsetX: number,
  orientation: ArrowType,
) => {
  const nextOffsetY =
    orientation === 'up'
      ? currentOffsetY + STEP_PACE_IN_PIXELS
      : orientation === 'down'
      ? currentOffsetY - STEP_PACE_IN_PIXELS
      : currentOffsetY;

  const nextOffsetX =
    orientation === 'left'
      ? currentOffsetX + STEP_PACE_IN_PIXELS
      : orientation === 'right'
      ? currentOffsetX - STEP_PACE_IN_PIXELS
      : currentOffsetX;

  const {
    currentTileYArrayCoordinate: nextTileYCoordinate,
    currentTileXArrayCoordinate: nextTileXCoordinate,
  } = findPlayerPositionWithOffset(nextOffsetY, nextOffsetX);

  const nextStepAllocation = findTileAllocation(
    nextTileYCoordinate,
    nextTileXCoordinate,
  );

  const horizontalDirection = orientation === 'left' ? -1 : +1;
  const lobbyRoomWidthStart =
    DEFAULT_OFFSET_X + STEP_PACE_IN_PIXELS * horizontalDirection;
  const lobbyRoomWidthEnd =
    DEFAULT_OFFSET_X - LOBBYROOM_MAP_X_COUNT * TILE_SIZE + STEP_PACE_IN_PIXELS;

  const verticalDirection = orientation === 'up' ? -1 : +1;
  const lobbyRoomHeightStart =
    goToInitialOffsetY() + STEP_PACE_IN_PIXELS * verticalDirection;
  const lobbyRoomHeightEnd =
    goToInitialOffsetY() + LOBBYROOM_MAP_Y_COUNT * TILE_SIZE;

  const isPlayerOutOfBondsVertically =
    nextOffsetY < lobbyRoomHeightStart || nextOffsetY > lobbyRoomHeightEnd;
  const isPlayerOutOfBondsHorizontally =
    nextOffsetX >= lobbyRoomWidthStart || nextOffsetX <= lobbyRoomWidthEnd;

  const isPlayerOutOfBonds =
    isPlayerOutOfBondsVertically || isPlayerOutOfBondsHorizontally;

  return { isPlayerOutOfBonds, nextStepAllocation };
};
