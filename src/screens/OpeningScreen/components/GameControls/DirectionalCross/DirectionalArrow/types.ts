import { IsPressedType } from '../../../GameDisplay/types';

export type ArrowType = 'up' | 'down' | 'left' | 'right';
export type ABButtonType = 'A' | 'B';
/**
 * ajout du type StartSel pour plus tard
 */
// export type StartSelButton = 'Start' | 'Select';

export interface DirectionalArrowProps {
  arrowType: ArrowType;
  isPressed: IsPressedType;
}
