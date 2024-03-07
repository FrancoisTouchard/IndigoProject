import { ARROW_CONTAINER_DIMENSIONS } from '..';
import { ARROW_DIMENSIONS } from '../DirectionalArrow';

export const axisCenter = ARROW_CONTAINER_DIMENSIONS / 2; // = 1/2 de l'écran
export const halfSizedArrowContainer = ARROW_DIMENSIONS / 2; // = 1/2 du container d'une Arrow

export const arrowIntersectionsPoints = {
  Up: {
    X: {
      first: axisCenter - halfSizedArrowContainer,
      last: axisCenter + halfSizedArrowContainer,
    },
    Y: {
      first: 0,
      last: ARROW_DIMENSIONS * 0.66,
    },
  },
  Down: {
    X: {
      first: axisCenter - halfSizedArrowContainer,
      last: axisCenter + halfSizedArrowContainer,
    },
    Y: {
      first: ARROW_CONTAINER_DIMENSIONS - ARROW_DIMENSIONS * 0.66,
      last: ARROW_CONTAINER_DIMENSIONS,
    },
  },
  Left: {
    X: {
      first: 0,
      last: ARROW_DIMENSIONS * 0.66,
    },
    Y: {
      first: axisCenter - halfSizedArrowContainer,
      last: axisCenter + halfSizedArrowContainer,
    },
  },
  Right: {
    X: {
      first: ARROW_CONTAINER_DIMENSIONS - ARROW_DIMENSIONS * 0.66,
      last: ARROW_CONTAINER_DIMENSIONS,
    },
    Y: {
      first: axisCenter - halfSizedArrowContainer,
      last: axisCenter + halfSizedArrowContainer,
    },
  },
};
