import React, { memo } from 'react';

import { ArrowType } from '../../../GameControls/DirectionalCross/DirectionalArrow/types';
import { PCMenu } from '../PCMenu';

interface PlayerCurrentInteractionProps {
  playerCurrentInteraction: string | null;
  isPressed: ArrowType | false;
}

const PlayerCurrentInteractionComponent = ({
  playerCurrentInteraction,
  isPressed,
}: PlayerCurrentInteractionProps) => {
  if (playerCurrentInteraction !== 'APC') return null;

  return <PCMenu isPressed={isPressed} />;
};

export const PlayerCurrentInteraction = memo(PlayerCurrentInteractionComponent);
