import { useEffect, useRef, useState } from 'react';

import { ArrowType } from '../../../GameControls/DirectionalCross/DirectionalArrow/types';
import { PlayerComponentProps } from './types';

const IMAGES_PATHS: PlayerComponentProps['imagesPaths'] = {
  up: {
    standby: require('../../../../../../../assets/Player/RedStandbyBack.png'),
    step1: require('../../../../../../../assets/Player/RedGoingUp1.png'),
    step2: require('../../../../../../../assets/Player/RedGoingUp2.png'),
  },
  down: {
    standby: require('../../../../../../../assets/Player/RedStandbyFace.png'),
    step1: require('../../../../../../../assets/Player/RedGoingDown1.png'),
    step2: require('../../../../../../../assets/Player/RedGoingDown2.png'),
  },
  left: {
    standby: require('../../../../../../../assets/Player/RedStandbyLeft.png'),
    step: require('../../../../../../../assets/Player/RedGoingLeft.png'),
  },
  right: {
    standby: require('../../../../../../../assets/Player/RedStandbyRight.png'),
    step: require('../../../../../../../assets/Player/RedGoingRight.png'),
  },
};

export const getPathConfigFromDirection = (direction: ArrowType | false) => {
  switch (direction) {
    case 'down':
      return IMAGES_PATHS.down.standby;
    case 'up':
      return IMAGES_PATHS.up.standby;
    case 'left':
      return IMAGES_PATHS.left.standby;
    case 'right':
      return IMAGES_PATHS.right.standby;
    default:
      return IMAGES_PATHS.down.standby;
  }
};

export const usePlayerOrientation = (isPressed: ArrowType | false) => {
  const [currentFramePath, setCurrentFramePath] = useState(
    IMAGES_PATHS.down.standby,
  );

  const isPressedPreviousValue = useRef<ArrowType | false>(false);

  useEffect(() => {
    if (isPressed) {
      isPressedPreviousValue.current = isPressed;
      setCurrentFramePath(getPathConfigFromDirection(isPressed));
    } else {
      setCurrentFramePath(
        getPathConfigFromDirection(isPressedPreviousValue.current),
      );
    }
  }, [isPressed]);

  return { currentFramePath };
};
