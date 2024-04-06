import { ArrowType } from '../../../GameControls/DirectionalCross/DirectionalArrow/types';

export const getActionFromActionTile = (
  currentTileAllocation: string,
  isPressed: ArrowType,
) => {
  switch (currentTileAllocation) {
    case 'APKC':
      if (isPressed === 'up') console.log('Welcome to the PokéCenter !');
      break;

    case 'APC':
      if (isPressed === 'up') console.log('PC is booting');
      break;

    case 'APS':
      if (isPressed === 'left') console.log('Welcome to the shop !');
      break;

    case 'EX':
      if (isPressed === 'up') console.log('You have no Pokémon !');
      break;

    default:
      break;
  }
};
