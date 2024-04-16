import React, { memo } from 'react';
import { ArrowType } from 'src/screens/OpeningScreen/components/GameControls/DirectionalCross/DirectionalArrow/types';

import { GAME_DISPLAY_HEIGHT, WINDOW_WIDTH } from '../../..';
import { ResizableMenu } from '../../ResizableMenu';

const pcMenuHeight = GAME_DISPLAY_HEIGHT;
const pcMenuHorizontalOffset = WINDOW_WIDTH / 2;

interface PcInteractionProps {
  isPressed: ArrowType | false;
}

const PcInteractionComponent = ({ isPressed }: PcInteractionProps) => {
  return (
    <ResizableMenu
      menuHeight={pcMenuHeight}
      menuHorizontalOffset={pcMenuHorizontalOffset}
    />
  );
};

export const PcInteraction = memo(PcInteractionComponent);
