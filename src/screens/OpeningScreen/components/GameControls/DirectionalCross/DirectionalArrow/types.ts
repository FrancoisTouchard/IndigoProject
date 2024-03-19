export type ArrowType = 'up' | 'down' | 'left' | 'right';

export interface DirectionalArrowProps {
  arrowType: ArrowType;
  isPressed: false | ArrowType;
}
