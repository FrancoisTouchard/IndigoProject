import React, { memo, useEffect, useState } from 'react';
import { Image, Text, View } from 'react-native';

import { ArrowType } from '../../../GameControls/DirectionalCross/DirectionalArrow/types';
import { ListSelector } from './ListSelector';
import { styles } from './styles';

interface ResizableMenuProps {
  menuHeight: number;
  menuHorizontalOffset: number;
  isPressed: ArrowType | false;
  menuItems: string[];
}

const ResizableMenuComponent = ({
  menuHeight,
  menuHorizontalOffset,
  isPressed,
  menuItems,
}: ResizableMenuProps) => {
  const [selectedItem, setSelectedItem] = useState<number>(0);

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
    <View
      style={[
        styles.menuContainer,
        { height: menuHeight, marginLeft: menuHorizontalOffset },
      ]}>
      <View style={styles.topAndBottomLineContainer}>
        <View style={styles.lineContainer}>
          <Image
            style={styles.topLeftCorner}
            source={require('../../../../../../../assets/ResizableMenu/MenuTopLeftCorner.png')}
          />
          <Image
            style={styles.horizontalBorder}
            source={require('../../../../../../../assets/ResizableMenu/MenuHorizontalBorder.png')}
            resizeMode="stretch"
          />
          <Image
            style={styles.topRightCorner}
            source={require('../../../../../../../assets/ResizableMenu/MenuTopRightCorner.png')}
          />
        </View>
      </View>
      <View style={styles.middleLineContainer}>
        <View style={styles.lineContainer}>
          <Image
            style={styles.leftVerticalBorder}
            source={require('../../../../../../../assets/ResizableMenu/MenuVerticalBorder.png')}
            resizeMode="stretch"
          />
          <View style={styles.menuItemsContainer}>
            {menuItems.map((item, index) => (
              <View key={index} style={styles.menuItemContainer}>
                <Text style={styles.menuText}>{item}</Text>
                {index === selectedItem && <ListSelector />}
              </View>
            ))}
          </View>
        </View>
        <Image
          style={styles.rightVerticalBorder}
          source={require('../../../../../../../assets/ResizableMenu/MenuVerticalBorder.png')}
          resizeMode="stretch"
        />
      </View>
      <View style={styles.topAndBottomLineContainer}>
        <View style={styles.lineContainer}>
          <Image
            style={styles.bottomLeftCorner}
            source={require('../../../../../../../assets/ResizableMenu/MenuBottomLeftCorner.png')}
          />
          <Image
            style={styles.horizontalBorder}
            source={require('../../../../../../../assets/ResizableMenu/MenuHorizontalBorder.png')}
            resizeMode="stretch"
          />
          <Image
            style={styles.bottomRightCorner}
            source={require('../../../../../../../assets/ResizableMenu/MenuBottomRightCorner.png')}
          />
        </View>
      </View>
    </View>
  );
};

export const ResizableMenu = memo(ResizableMenuComponent);
