import React, { memo } from 'react';
import { Image, View } from 'react-native';

import { white } from '../../../../../../../assets/AnimationOpening/stylesColorsCode';

interface ResizableMenuProps {
  menuHeight: number;
  menuHorizontalOffset: number;
}

const ResizableMenuComponent = ({
  menuHeight,
  menuHorizontalOffset,
}: ResizableMenuProps) => {
  return (
    <View
      style={{
        marginLeft: menuHorizontalOffset,
        height: menuHeight,
        position: 'relative',
      }}>
      <View style={{ flexDirection: 'row' }}>
        <View style={{ flex: 1, flexDirection: 'row' }}>
          <Image
            style={{
              width: 20,
              height: 20,
              zIndex: 1,
            }}
            source={require('../../../../../../../assets/ResizableMenu/MenuTopLeftCorner.png')}
          />
          <Image
            style={{
              width: '100%',
              height: 20,
              position: 'absolute',
              top: 0,
            }}
            source={require('../../../../../../../assets/ResizableMenu/MenuHorizontalBorder.png')}
            resizeMode="stretch"
          />
          <Image
            style={{
              width: 20,
              height: 20,
              position: 'absolute',
              top: 0,
              right: 0,
            }}
            source={require('../../../../../../../assets/ResizableMenu/MenuTopRightCorner.png')}
          />
        </View>
      </View>
      <View style={{ flex: 1, flexDirection: 'row' }}>
        <Image
          style={{
            width: 20,
            height: '100%',
            transform: [{ rotate: '180deg' }],
          }}
          source={require('../../../../../../../assets/ResizableMenu/MenuVerticalBorder.png')}
          resizeMode="stretch"
        />
        <View style={{ flex: 1, backgroundColor: white }} />
        <Image
          style={{
            width: 20,
            height: '100%',
          }}
          source={require('../../../../../../../assets/ResizableMenu/MenuVerticalBorder.png')}
          resizeMode="stretch"
        />
      </View>
      <View style={{ flexDirection: 'row' }}>
        <View style={{ flex: 1, flexDirection: 'row' }}>
          <Image
            style={{
              width: 20,
              height: 20,
              position: 'absolute',
              bottom: 0,
              left: 0,
              zIndex: 1,
            }}
            source={require('../../../../../../../assets/ResizableMenu/MenuBottomLeftCorner.png')}
          />
          <Image
            style={{
              width: '100%',
              height: 20,
            }}
            source={require('../../../../../../../assets/ResizableMenu/MenuHorizontalBorder.png')}
            resizeMode="stretch"
          />
          <Image
            style={{
              width: 20,
              height: 20,
              position: 'absolute',
              bottom: 0,
              right: 0,
            }}
            source={require('../../../../../../../assets/ResizableMenu/MenuBottomRightCorner.png')}
          />
        </View>
      </View>
    </View>
  );
};

export const ResizableMenu = memo(ResizableMenuComponent);
