import React, { memo } from 'react';

import { PcInteraction } from './PcInteraction';

interface PlayerCurrentInteractionProps {
  playerCurrentInteraction: string | null;
}

const PlayerCurrentInteractionComponent = ({
  playerCurrentInteraction,
}: PlayerCurrentInteractionProps) => {
  return <>{playerCurrentInteraction === 'APC' && <PcInteraction />}</>;
};

export const PlayerCurrentInteraction = memo(PlayerCurrentInteractionComponent);
