import { useState } from 'react';

import { ArrowType } from '../../../GameControls/DirectionalCross/DirectionalArrow/types';

export const usePlayerCurrentInteraction = (
  currentTileAllocation: string,
  isPressed: ArrowType | false,
  isPressedPreviousValue: React.MutableRefObject<false | ArrowType>,
) => {
  const [playerCurrentInteraction, setPlayerCurrentInteraction] = useState<
    string | null
  >(null);

  const closeCurrentInteraction = () => {
    setPlayerCurrentInteraction(null);
  };

  const handlePlayerCurrentInteraction = () => {
    switch (currentTileAllocation) {
      case 'APKC':
        if (isPressed === false && isPressedPreviousValue.current === 'up') {
          console.log('Welcome to the PokéCenter !');
          setPlayerCurrentInteraction('APKC');
        }
        break;

      case 'APC':
        if (isPressed === false && isPressedPreviousValue.current === 'up') {
          console.log('PC is booting');
          setPlayerCurrentInteraction('APC');
        }
        break;

      case 'APS':
        if (isPressed === false && isPressedPreviousValue.current === 'left') {
          console.log('Welcome to the shop !');
          setPlayerCurrentInteraction('APS');
        }

        break;

      case 'EX':
        if (isPressed === false && isPressedPreviousValue.current === 'up') {
          console.log('You have no Pokémon !');
          setPlayerCurrentInteraction('EX');
        }
        break;

      case 'O':
        setPlayerCurrentInteraction(null);
        break;

      default:
        break;
    }
  };

  return {
    playerCurrentInteraction,
    handlePlayerCurrentInteraction,
    closeCurrentInteraction,
  };
};
