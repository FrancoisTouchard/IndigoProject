import {useEffect} from 'react';
import BootSplash from 'react-native-bootsplash';

export const useSplashScreen = () => {
  useEffect(() => {
    setTimeout(async () => {
      await BootSplash.hide({fade: true});
    }, 3000);
  }, []);
};
