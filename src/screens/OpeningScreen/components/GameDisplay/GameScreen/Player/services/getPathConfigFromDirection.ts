import { ArrowType } from '../../../../GameControls/DirectionalCross/DirectionalArrow/types';
import { PlayerComponentProps } from '../types';

export const IMAGES_PATHS: PlayerComponentProps['imagesPaths'] = {
  up: {
    standby: require('../../../../../../../../assets/Player/RedStandbyBack.png'),
    step1: require('../../../../../../../../assets/Player/RedGoingUp1.png'),
    step2: require('../../../../../../../../assets/Player/RedGoingUp2.png'),
  },
  down: {
    standby: require('../../../../../../../../assets/Player/RedStandbyFace.png'),
    step1: require('../../../../../../../../assets/Player/RedGoingDown1.png'),
    step2: require('../../../../../../../../assets/Player/RedGoingDown2.png'),
  },
  // left & right alternent entre standby et une step
  left: {
    standby: require('../../../../../../../../assets/Player/RedStandbyLeft.png'),
    step1: require('../../../../../../../../assets/Player/RedGoingLeft.png'),
    step2: require('../../../../../../../../assets/Player/RedStandbyLeft.png'),
  },
  right: {
    standby: require('../../../../../../../../assets/Player/RedStandbyRight.png'),
    step1: require('../../../../../../../../assets/Player/RedGoingRight.png'),
    step2: require('../../../../../../../../assets/Player/RedStandbyRight.png'),
  },
};

export const getPathConfigFromDirection = (direction: ArrowType | false) => {
  switch (direction) {
    case 'down':
      return IMAGES_PATHS.down;
    case 'up':
      return IMAGES_PATHS.up;
    case 'left':
      return IMAGES_PATHS.left;
    case 'right':
      return IMAGES_PATHS.right;
    default:
      return IMAGES_PATHS.down;
  }
};
