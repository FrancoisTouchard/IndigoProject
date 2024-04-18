import React, { memo } from 'react';
import { Image, View } from 'react-native';

import { styles } from './styles';

const ContainerWithBordersComponent = ({
  children,
}: {
  children: JSX.Element;
}) => {
  return (
    <View style={[styles.menuContainer]}>
      <View style={styles.topAndBottomLineContainer}>
        <View style={styles.lineContainer}>
          <Image
            style={styles.topLeftCorner}
            source={require('../../../assets/ResizableMenu/MenuTopLeftCorner.png')}
            resizeMode="contain"
          />
          <Image
            style={styles.horizontalBorder}
            source={require('../../../assets/ResizableMenu/MenuHorizontalBorder.png')}
            resizeMode="stretch"
          />
          <Image
            style={styles.topRightCorner}
            source={require('../../../assets/ResizableMenu/MenuTopRightCorner.png')}
          />
        </View>
      </View>
      <View style={styles.middleLineContainer}>
        <View style={styles.lineContainer}>
          <Image
            style={styles.leftVerticalBorder}
            source={require('../../../assets/ResizableMenu/MenuVerticalBorder.png')}
            resizeMode="stretch"
          />
          {children}
        </View>
        <Image
          style={styles.rightVerticalBorder}
          source={require('../../../assets/ResizableMenu/MenuVerticalBorder.png')}
          resizeMode="stretch"
        />
      </View>
      <View style={styles.topAndBottomLineContainer}>
        <View style={styles.lineContainer}>
          <Image
            style={styles.bottomLeftCorner}
            source={require('../../../assets/ResizableMenu/MenuBottomLeftCorner.png')}
          />
          <Image
            style={styles.horizontalBorder}
            source={require('../../../assets/ResizableMenu/MenuHorizontalBorder.png')}
            resizeMode="stretch"
          />
          <Image
            style={styles.bottomRightCorner}
            source={require('../../../assets/ResizableMenu/MenuBottomRightCorner.png')}
          />
        </View>
      </View>
    </View>
  );
};
export const ContainerWithBorders = memo(ContainerWithBordersComponent);
