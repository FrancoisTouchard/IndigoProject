import { ArrowType } from '../GameControls/DirectionalCross/DirectionalArrow/types';
import { GameStatesTypes } from './useGameStateManager';

export interface GameDisplayComponentProps {
  gameState: GameStatesTypes;
  isPressed: ArrowType | false;
  offsetY: number;
  offsetX: number;
  playerCurrentInteraction: string | null;
}
