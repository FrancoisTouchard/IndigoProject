import { Source } from 'react-native-fast-image';

export interface PlayerComponentProps {
  imagesPaths: {
    up: {
      standby: Source;
      step1: Source;
      step2: Source;
    };
    down: {
      standby: Source;
      step1: Source;
      step2: Source;
    };
    left: {
      standby: Source;
      step: Source;
    };
    right: {
      standby: Source;
      step: Source;
    };
  };
}
