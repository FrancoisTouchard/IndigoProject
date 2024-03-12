import { arrowIntersectionsPoints } from './getArrowIntersectionsPoints';

export const arrowFinder = {
  isInTopArrowAxisX: (positionX: number) =>
    positionX >= arrowIntersectionsPoints.Up.X.first &&
    positionX <= arrowIntersectionsPoints.Up.X.last,

  isInTopArrowAxisY: (positionY: number) =>
    positionY >= arrowIntersectionsPoints.Up.Y.first &&
    positionY <= arrowIntersectionsPoints.Up.Y.last,

  isInDownArrowAxisX: (positionX: number) =>
    positionX >= arrowIntersectionsPoints.Down.X.first &&
    positionX <= arrowIntersectionsPoints.Down.X.last,

  isInDownArrowAxisY: (positionY: number) =>
    positionY >= arrowIntersectionsPoints.Down.Y.first &&
    positionY <= arrowIntersectionsPoints.Down.Y.last,

  isInLeftArrowAxisX: (positionX: number) =>
    positionX >= arrowIntersectionsPoints.Left.X.first &&
    positionX <= arrowIntersectionsPoints.Left.X.last,

  isInLeftArrowAxisY: (positionY: number) =>
    positionY >= arrowIntersectionsPoints.Left.Y.first &&
    positionY <= arrowIntersectionsPoints.Left.Y.last,

  isInRightArrowAxisX: (positionX: number) =>
    positionX >= arrowIntersectionsPoints.Right.X.first &&
    positionX <= arrowIntersectionsPoints.Right.X.last,

  isInRightArrowAxisY: (positionY: number) =>
    positionY >= arrowIntersectionsPoints.Right.Y.first &&
    positionY <= arrowIntersectionsPoints.Right.Y.last,
};
