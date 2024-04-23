import React, { memo } from 'react';
import { ArrowType } from 'src/screens/OpeningScreen/components/GameControls/DirectionalCross/DirectionalArrow/types';

import { Menu } from '../../Menu';
import { Pokedex } from './Pokedex';

export const PC_MENU_WIDTH = 150;
export const PC_MENU_ITEMS = ['POKéDEX', 'POKéMON', 'EXIT'];

interface PcInteractionProps {
  isPressed: ArrowType | false;
  focusedMenuItem: number;
  clickedMenuItem: string | null;
}

const PcInteractionComponent = ({
  isPressed,
  focusedMenuItem,
  clickedMenuItem,
}: PcInteractionProps) => {
  if (clickedMenuItem === 'POKéDEX') {
    return <Pokedex />;
  }

  return <Menu menuItems={PC_MENU_ITEMS} focusedMenuItem={focusedMenuItem} />;
};

export const PcInteraction = memo(PcInteractionComponent);
