import { useRef } from 'react';
import { PanResponder } from 'react-native';

import { ArrowType } from './DirectionalArrow/types';
import { onPanResponderGrantOrMove } from './panResponderHelper';

export const usePanResponder = (
  setIsPressed: (isPressedNewValue: ArrowType | false) => void,
) => {
  const panResponder = useRef(
    PanResponder.create({
      onStartShouldSetPanResponder: () => true,
      onMoveShouldSetPanResponder: () => true,
      onPanResponderGrant: event => {
        onPanResponderGrantOrMove(event, setIsPressed);
      },
      onPanResponderMove: event => {
        onPanResponderGrantOrMove(event, setIsPressed);
      },
      onPanResponderEnd: () => {
        setIsPressed(false);
      },
    }),
  ).current;

  return { panResponder };
};
