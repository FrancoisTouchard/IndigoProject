import React, { memo } from 'react';
import { StyleSheet } from 'react-native';
import FastImage from 'react-native-fast-image';

const LobbyRoomComponent = () => {
  return (
    <FastImage
      style={styles.image}
      source={require('../../../../../../../../assets/RoomsBackgrounds/LobbyRoom/LobbyRoom.png')}
      resizeMode={FastImage.resizeMode.contain}
    />
  );
};

const styles = StyleSheet.create({
  image: {
    width: '100%',
    height: '100%',
    position: 'relative',
  },
});

export const LobbyRoom = memo(LobbyRoomComponent);
