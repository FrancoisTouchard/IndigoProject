import React, { memo } from 'react';

import { GAME_DISPLAY_HEIGHT, WINDOW_WIDTH } from '../..';
import { ResizableMenu } from '../ResizableMenu';

const pcMenuHeight = GAME_DISPLAY_HEIGHT;
const pcMenuHorizontalOffset = WINDOW_WIDTH / 2;

interface PlayerCurrentInteractionProps {
  playerCurrentInteraction: string | null;
}

const PlayerCurrentInteractionComponent = ({
  playerCurrentInteraction,
}: PlayerCurrentInteractionProps) => {
  return (
    <>
      {playerCurrentInteraction === 'APC' && (
        <ResizableMenu
          menuHeight={pcMenuHeight}
          menuHorizontalOffset={pcMenuHorizontalOffset}
        />
      )}
    </>
  );
};

export const PlayerCurrentInteraction = memo(PlayerCurrentInteractionComponent);
