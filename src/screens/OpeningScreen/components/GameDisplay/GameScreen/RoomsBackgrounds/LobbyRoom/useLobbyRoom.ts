import { useCallback, useEffect, useRef, useState } from 'react';
import { ArrowType } from 'src/screens/OpeningScreen/components/GameControls/DirectionalCross/DirectionalArrow/types';

import { findTileAllocation } from '../allocationHelpers';
import { getActionFromActionTile } from '../playerInteractionsHelpers';
import {
  findPlayerPositionWithOffset,
  goToInitialOffsetX,
  goToInitialOffsetY,
} from '../tileMapHelpers';
import {
  ACTION_TILES,
  COLLISION_OVERLAP_IN_PIXELS,
  ENTRANCE_POSITION_X,
} from './LobbyRoomMap';
import { movePlayer } from './playerMovementHelpers';

const INTERVAL_DURATION = 1;

export const useLobbyRoom = (isPressed: ArrowType | false) => {
  const [offsetY, setOffsetY] = useState<number>(goToInitialOffsetY());
  const [offsetX, setOffsetX] = useState<number>(
    goToInitialOffsetX(ENTRANCE_POSITION_X),
  );

  const intervalRef = useRef<NodeJS.Timeout | null>(null);

  const locateAndMovePlayer = useCallback(() => {
    const { currentTileYArrayCoordinate, currentTileXArrayCoordinate } =
      findPlayerPositionWithOffset(
        offsetY + COLLISION_OVERLAP_IN_PIXELS,
        offsetX - COLLISION_OVERLAP_IN_PIXELS,
      );

    const currentTileAllocation = findTileAllocation(
      currentTileYArrayCoordinate,
      currentTileXArrayCoordinate,
    );

    if (isPressed && ACTION_TILES.includes(currentTileAllocation)) {
      getActionFromActionTile(currentTileAllocation, isPressed);
    }

    intervalRef.current = setInterval(() => {
      movePlayer({ offsetY, offsetX, setOffsetY, setOffsetX, isPressed });
    }, INTERVAL_DURATION);
  }, [isPressed, offsetY, offsetX]);

  useEffect(() => {
    clearInterval(intervalRef.current as NodeJS.Timeout);

    if (isPressed) {
      locateAndMovePlayer();
    }
  }, [isPressed, locateAndMovePlayer]);

  return { offsetY, offsetX };
};
