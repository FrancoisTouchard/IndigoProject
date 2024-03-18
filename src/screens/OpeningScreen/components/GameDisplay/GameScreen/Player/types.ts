import { Source } from 'react-native-fast-image';

export interface PlayerComponentProps {
  imagesPaths: {
    up: {
      standby: Source['uri'];
      step1: Source['uri'];
      step2: Source['uri'];
    };
    down: {
      standby: Source['uri'];
      step1: Source['uri'];
      step2: Source['uri'];
    };
    left: {
      standby: Source['uri'];
      step1: Source['uri'];
      step2: Source['uri'];
    };
    right: {
      standby: Source['uri'];
      step1: Source['uri'];
      step2: Source['uri'];
    };
  };
}
