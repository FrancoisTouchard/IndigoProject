import React, { memo } from 'react';
import { ArrowType } from 'src/screens/OpeningScreen/components/GameControls/DirectionalCross/DirectionalArrow/types';

import { PCMenu } from '../../PCMenu';

interface PcInteractionProps {
  isPressed: ArrowType | false;
}

const PcInteractionComponent = ({ isPressed }: PcInteractionProps) => {
  return <PCMenu isPressed={isPressed} />;
};

export const PcInteraction = memo(PcInteractionComponent);
