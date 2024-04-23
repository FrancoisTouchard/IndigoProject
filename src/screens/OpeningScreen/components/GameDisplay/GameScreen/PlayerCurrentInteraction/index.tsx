import React, { memo } from 'react';

import { ArrowType } from '../../../GameControls/DirectionalCross/DirectionalArrow/types';
import { PcInteraction } from './PcInteraction';

interface PlayerCurrentInteractionProps {
  playerCurrentInteraction: string | null;
  isPressed: ArrowType | false;
  focusedMenuItem: number;
  clickedMenuItem: string | null;
}

const PlayerCurrentInteractionComponent = ({
  playerCurrentInteraction,
  isPressed,
  focusedMenuItem,
  clickedMenuItem,
}: PlayerCurrentInteractionProps) => {
  if (playerCurrentInteraction !== 'APC') return null;

  return (
    <PcInteraction
      isPressed={isPressed}
      focusedMenuItem={focusedMenuItem}
      clickedMenuItem={clickedMenuItem}
    />
  );
};

export const PlayerCurrentInteraction = memo(PlayerCurrentInteractionComponent);
