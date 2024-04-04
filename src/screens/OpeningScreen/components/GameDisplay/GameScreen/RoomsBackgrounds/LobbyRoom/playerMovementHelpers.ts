import { ArrowType } from 'src/screens/OpeningScreen/components/GameControls/DirectionalCross/DirectionalArrow/types';

import { isPlayerCornersInAllowedTile } from '../tileMapHelpers';
import { STEP_PACE_IN_PIXELS } from './LobbyRoomMap';

export const movePlayer = ({
  offsetY,
  offsetX,
  setOffsetY,
  setOffsetX,
  isPressed,
}: {
  offsetY: number;
  offsetX: number;
  setOffsetY: (offsetY: number) => void;
  setOffsetX: (offsetX: number) => void;
  isPressed: ArrowType | false;
}) => {
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
