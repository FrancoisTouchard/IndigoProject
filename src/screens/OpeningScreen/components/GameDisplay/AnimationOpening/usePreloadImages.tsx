import { useEffect } from 'react';
import { Image } from 'react-native';
import BootSplash from 'react-native-bootsplash';
import FastImage from 'react-native-fast-image';

export const usePreloadImages = (redirectToNextScreen: () => void) => {
  useEffect(() => {
    const images = [
      // AnimationOpening
      require('../../../../../../assets/AnimationOpening/titre.png'),
      require('../../../../../../assets/AnimationOpening/gameFreakLogo1.png'),
      require('../../../../../../assets/AnimationOpening/startingImage.png'),
      // Rooms backgrounds
      require('../../../../../../assets/RoomsBackgrounds/LobbyRoom/LobbyRoom.png'),
      // Player
      require('../../../../../../assets/Player/RedStandbyFace.png'),
      require('../../../../../../assets/Player/RedStandbyBack.png'),
      require('../../../../../../assets/Player/RedStandbyLeft.png'),
      require('../../../../../../assets/Player/RedStandbyRight.png'),
      require('../../../../../../assets/Player/RedGoingLeft.png'),
      require('../../../../../../assets/Player/RedGoingRight.png'),
      require('../../../../../../assets/Player/RedGoingDown1.png'),
      require('../../../../../../assets/Player/RedGoingDown2.png'),
      require('../../../../../../assets/Player/RedGoingUp1.png'),
      require('../../../../../../assets/Player/RedGoingUp2.png'),
      // MenuScreens
      require('../../../../../../assets/MenusScreens/menuTemplateLarge.png'),
      require('../../../../../../assets/MenusScreens/ListSelector.png'),
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
