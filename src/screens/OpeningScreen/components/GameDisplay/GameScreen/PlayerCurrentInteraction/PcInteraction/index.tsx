import React, { memo, useEffect, useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import FastImage from 'react-native-fast-image';
import { ArrowType } from 'src/screens/OpeningScreen/components/GameControls/DirectionalCross/DirectionalArrow/types';

import { black } from '../../../../../../../../assets/AnimationOpening/stylesColorsCode';
import { GAME_DISPLAY_HEIGHT, WINDOW_WIDTH } from '../../..';
import { ListSelector } from '../../Menus/ListSelector';

interface PcInteractionProps {
  isPressed: ArrowType | false;
}

const pcMenuOffset = WINDOW_WIDTH / 2;

const PcInteractionComponent = ({ isPressed }: PcInteractionProps) => {
  const [selectedItem, setSelectedItem] = useState<number>(0);

  const menuItems = ['POKéDEX', 'POKéMON', 'EXIT'];

  const navigateMenu = (selectorValue: ArrowType | false) => {
    if (selectorValue === 'up') {
      setSelectedItem(prevIndex =>
        prevIndex === 0 ? menuItems.length - 1 : prevIndex - 1,
      );
    } else if (selectorValue === 'down') {
      setSelectedItem(prevIndex =>
        prevIndex === menuItems.length - 1 ? 0 : prevIndex + 1,
      );
    }
  };

  useEffect(() => {
    navigateMenu(isPressed);
  }, [isPressed]);

  return (
    <View style={styles.container}>
      <FastImage
        style={styles.image}
        source={require('../../../../../../../../assets/MenusScreens/menuTemplateLarge.png')}
        resizeMode={FastImage.resizeMode.contain}
      />
      <View style={styles.textContainer}>
        {menuItems.map((item, index) => (
          <Text
            key={index}
            style={[
              styles.menuText,
              index === selectedItem && styles.selectedItem,
            ]}>
            {item}
          </Text>
        ))}
        <ListSelector selectedItem={selectedItem} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // backgroundColor: 'yellow',
    paddingLeft: pcMenuOffset,
  },
  image: {
    flex: 1,
    // backgroundColor: 'blue',
    position: 'relative',
    marginTop: -10,
  },
  textContainer: {
    // backgroundColor: 'green',
    position: 'absolute',
    top: 30,
    right: 0,
    left: pcMenuOffset + 50,
    bottom: 0,
  },
  menuText: {
    fontFamily: 'PokemonClassic',
    fontSize: 14,
    color: black,
  },
  selectedItem: {
    color: 'pink',
  },
});

export const PcInteraction = memo(PcInteractionComponent);
