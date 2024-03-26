import { useState } from 'react';

import { goToInitialOffsetX, goToInitialOffsetY } from '../tileMapHelpers';
import { ENTRANCE_POSITION_X } from './LobbyRoomMap';

export const useLobbyRoom = () => {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [initialOffsetY, setInitialOffsetY] = useState(goToInitialOffsetY());
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [initialOffsetX, setInitialOffsetX] = useState(
    goToInitialOffsetX(ENTRANCE_POSITION_X),
  );

  return { initialOffsetY, initialOffsetX };
};
