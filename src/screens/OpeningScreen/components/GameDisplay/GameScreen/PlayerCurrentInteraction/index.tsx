import React, { memo } from 'react';

import { ArrowType } from '../../../GameControls/DirectionalCross/DirectionalArrow/types';
import { PcInteraction } from './PcInteraction';

interface PlayerCurrentInteractionProps {
  playerCurrentInteraction: string | null;
  isPressed: ArrowType | false;
}

const PlayerCurrentInteractionComponent = ({
  playerCurrentInteraction,
  isPressed,
}: PlayerCurrentInteractionProps) => {
  return (
    <>
      {playerCurrentInteraction === 'APC' && (
        <PcInteraction isPressed={isPressed} />
      )}
    </>
  );
};

export const PlayerCurrentInteraction = memo(PlayerCurrentInteractionComponent);
