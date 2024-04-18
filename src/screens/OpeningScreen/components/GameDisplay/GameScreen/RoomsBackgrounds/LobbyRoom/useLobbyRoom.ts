import { useEffect, useRef, useState } from 'react';
import { ArrowType } from 'src/screens/OpeningScreen/components/GameControls/DirectionalCross/DirectionalArrow/types';

import {
  goToInitialOffsetX,
  goToInitialOffsetY,
  isPlayerCornersInAllowedTile,
} from '../tileMapHelpers';
import { ENTRANCE_POSITION_X, STEP_PACE_IN_PIXELS } from './LobbyRoomMap';

const INTERVAL_DURATION = 1;

export const useLobbyRoom = (isPressed: ArrowType | false) => {
  const [offsetY, setOffsetY] = useState<number>(goToInitialOffsetY());
  const [offsetX, setOffsetX] = useState<number>(
    goToInitialOffsetX(ENTRANCE_POSITION_X),
  );

  const intervalRef = useRef<NodeJS.Timeout | null>(null);

  const movePlayer = () => {
    let currentOffsetCounterY: number = offsetY;
    let currentOffsetCounterX: number = offsetX;
    switch (isPressed) {
      case 'up': {
        currentOffsetCounterY += STEP_PACE_IN_PIXELS;

        if (
          isPlayerCornersInAllowedTile(
            currentOffsetCounterY,
            currentOffsetCounterX,
            isPressed,
          )
        )
          setOffsetY(currentOffsetCounterY);
        else currentOffsetCounterY -= STEP_PACE_IN_PIXELS;
        break;
      }

      case 'down': {
        currentOffsetCounterY -= STEP_PACE_IN_PIXELS;
        if (
          isPlayerCornersInAllowedTile(
            currentOffsetCounterY,
            currentOffsetCounterX,
            isPressed,
          )
        )
          setOffsetY(currentOffsetCounterY);
        else currentOffsetCounterY += STEP_PACE_IN_PIXELS;

        break;
      }

      case 'left': {
        currentOffsetCounterX += STEP_PACE_IN_PIXELS;
        if (
          isPlayerCornersInAllowedTile(
            currentOffsetCounterY,
            currentOffsetCounterX,
            isPressed,
          )
        )
          setOffsetX(currentOffsetCounterX);
        else currentOffsetCounterX -= STEP_PACE_IN_PIXELS;
        break;
      }

      case 'right': {
        currentOffsetCounterX -= STEP_PACE_IN_PIXELS;
        if (
          isPlayerCornersInAllowedTile(
            currentOffsetCounterY,
            currentOffsetCounterX,
            isPressed,
          )
        )
          setOffsetX(currentOffsetCounterX);
        else currentOffsetCounterX += STEP_PACE_IN_PIXELS;

        break;
      }

      default:
        break;
    }
  };

  /**
   * Règle eslint pour enlever un warning dont la résolution pose problème
   */
  // eslint-disable-next-line react-hooks/exhaustive-deps
  const locateAndMovePlayer = () => {
    intervalRef.current = setInterval(() => {
      movePlayer();
    }, INTERVAL_DURATION);
  };

  useEffect(() => {
    clearInterval(intervalRef.current as NodeJS.Timeout);
    if (isPressed) locateAndMovePlayer();
  }, [isPressed, locateAndMovePlayer]);

  return { offsetY, offsetX };
};
