import { ArrowType } from '../GameControls/DirectionalCross/DirectionalArrow/types';
import { GameState } from './useGameStateManager';

export interface GameDisplayComponentProps {
  gameState: GameState;
  isPressed: ArrowType | false;
  offsetY: number;
  offsetX: number;
  playerCurrentInteraction: string | null;
  focusedMenuItem: number;
  clickedMenuItem: string | null;
}
