import React, { memo } from 'react';
import { ArrowType } from 'src/screens/OpeningScreen/components/GameControls/DirectionalCross/DirectionalArrow/types';

import { Menu } from '../../Menu';

const pcMenuItems = ['POKéDEX', 'POKéMON', 'EXIT'];

interface PcInteractionProps {
  isPressed: ArrowType | false;
}

const PcInteractionComponent = ({ isPressed }: PcInteractionProps) => {
  return <Menu isPressed={isPressed} menuItems={pcMenuItems} />;
};

export const PcInteraction = memo(PcInteractionComponent);
