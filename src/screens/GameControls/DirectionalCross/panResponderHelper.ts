import { GestureResponderEvent } from 'react-native';

import { ArrowType } from './DirectionalArrow/types';
import { arrowFinder } from './services/getArrowTypeByClicPosition';

export const onPanResponderGrantOrMove = (
  event: GestureResponderEvent,
  setIsPressed: (isPressed: ArrowType | false) => void,
) => {
  const clicPosition = {
    X: event.nativeEvent.locationX,
    Y: event.nativeEvent.locationY,
  };

  let direction: ArrowType | null = null;
  // Savoir si la position du clic est comprise dans l'aire d'une Arrow
  if (
    arrowFinder.isInTopArrowAxisX(clicPosition.X) &&
    arrowFinder.isInTopArrowAxisY(clicPosition.Y)
  ) {
    direction = 'up';
  }
  if (
    arrowFinder.isInDownArrowAxisX(clicPosition.X) &&
    arrowFinder.isInDownArrowAxisY(clicPosition.Y)
  ) {
    direction = 'down';
  }
  if (
    arrowFinder.isInLeftArrowAxisX(clicPosition.X) &&
    arrowFinder.isInLeftArrowAxisY(clicPosition.Y)
  ) {
    direction = 'left';
  }
  if (
    arrowFinder.isInRightArrowAxisX(clicPosition.X) &&
    arrowFinder.isInRightArrowAxisY(clicPosition.Y)
  ) {
    direction = 'right';
  }
  if (direction) {
    setIsPressed(direction);
  }
};
