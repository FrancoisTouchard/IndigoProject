import { COLLISION_OVERLAP_IN_PIXELS } from '../RoomsBackgrounds/LobbyRoom/LobbyRoomMap';
import { findTileAllocation } from '../RoomsBackgrounds/tileAllocationHelpers';
import { findPlayerPositionWithOffset } from '../RoomsBackgrounds/tileMapHelpers';

export const getPlayerPosition = (offsetY: number, offsetX: number) => {
  const { currentTileYArrayCoordinate, currentTileXArrayCoordinate } =
    findPlayerPositionWithOffset(
      offsetY + COLLISION_OVERLAP_IN_PIXELS,
      offsetX - COLLISION_OVERLAP_IN_PIXELS,
    );

  const currentTileAllocation = findTileAllocation(
    currentTileYArrayCoordinate,
    currentTileXArrayCoordinate,
  );

  return {
    currentTileYArrayCoordinate,
    currentTileXArrayCoordinate,
    currentTileAllocation,
  };
};
