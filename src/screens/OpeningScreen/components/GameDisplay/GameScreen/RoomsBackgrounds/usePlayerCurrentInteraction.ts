import { useEffect, useRef, useState } from 'react';

import { ArrowType } from '../../../GameControls/DirectionalCross/DirectionalArrow/types';

export const usePlayerCurrentInteraction = (
  currentTileAllocation: string,
  isPressed: ArrowType | false,
) => {
  const [playerCurrentInteraction, setPlayerInteraction] = useState<
    string | null
  >(null);

  const isPressedPreviousValue = useRef<ArrowType | false>(false);

  useEffect(() => {
    if (isPressed) {
      isPressedPreviousValue.current = isPressed;
    }
  }, [isPressed]);

  const handlePlayerCurrentInteraction = () => {
    switch (currentTileAllocation) {
      case 'APC':
        if (isPressed === false && isPressedPreviousValue.current === 'up')
          setPlayerInteraction('APC');
        break;
      default:
        break;
    }
  };

  return { playerCurrentInteraction, handlePlayerCurrentInteraction };
};
