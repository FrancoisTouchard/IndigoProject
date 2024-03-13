import { useEffect } from 'react';
import { Image } from 'react-native';
import BootSplash from 'react-native-bootsplash';
import FastImage from 'react-native-fast-image';

export const usePreloadImages = (redirectToNextScreen: () => void) => {
  useEffect(() => {
    const images = [
      require('../../../../../../assets/AnimationOpening/titre.png'),
      require('../../../../../../assets/AnimationOpening/gameFreakLogo1.png'),
      require('../../../../../../assets/AnimationOpening/startingImage.png'),
    ];

    const uris = images.map(image => {
      const uri = Image.resolveAssetSource(image).uri;

      return { uri };
    });

    FastImage.preload(uris);
    BootSplash.hide({ fade: true });
    redirectToNextScreen();
  }, []);
};
