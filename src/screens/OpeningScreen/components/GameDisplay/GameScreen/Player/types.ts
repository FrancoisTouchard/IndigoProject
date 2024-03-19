export interface ImagesPaths {
  up: {
    standby: number;
    step1: number;
    step2: number;
  };
  down: {
    standby: number;
    step1: number;
    step2: number;
  };
  left: {
    standby: number;
    step1: number;
    step2: number;
  };
  right: {
    standby: number;
    step1: number;
    step2: number;
  };
}
export interface PlayerComponentProps {
  imagesPaths: ImagesPaths;
}
