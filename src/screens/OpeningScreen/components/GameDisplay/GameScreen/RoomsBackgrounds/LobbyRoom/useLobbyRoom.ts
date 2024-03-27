import { useEffect, useRef, useState } from 'react';
import { ArrowType } from 'src/screens/OpeningScreen/components/GameControls/DirectionalCross/DirectionalArrow/types';

import { TILE_SIZE } from '../../..';
import { goToInitialOffsetX, goToInitialOffsetY } from '../tileMapHelpers';
import { ENTRANCE_POSITION_X } from './LobbyRoomMap';

export const useLobbyRoom = (isPressed: ArrowType | false) => {
  const [OffsetY, setOffsetY] = useState(goToInitialOffsetY());
  const [OffsetX, setOffsetX] = useState(
    goToInitialOffsetX(ENTRANCE_POSITION_X),
  );

  const intervalRef = useRef<NodeJS.Timeout | null>(null);

  const stepPaceInPixels = TILE_SIZE / 27;

  const movePlayer = () => {
    let currentOffsetCounterY = OffsetY;
    let currentOffsetCounterX = OffsetX;

    intervalRef.current = setInterval(() => {
      switch (isPressed) {
        case 'up':
          currentOffsetCounterY += stepPaceInPixels;
          setOffsetY(currentOffsetCounterY);
          break;

        case 'down':
          currentOffsetCounterY -= stepPaceInPixels;
          setOffsetY(currentOffsetCounterY);
          break;

        case 'left':
          currentOffsetCounterX += stepPaceInPixels;
          setOffsetX(currentOffsetCounterX);
          break;

        case 'right':
          currentOffsetCounterX -= stepPaceInPixels;
          setOffsetX(currentOffsetCounterX);
          break;

        default:
          break;
      }
    }, 1);
  };

  useEffect(() => {
    clearInterval(intervalRef.current as NodeJS.Timeout);

    if (isPressed) {
      movePlayer();
    }
  }, [isPressed]);

  return { OffsetY, OffsetX };
};
