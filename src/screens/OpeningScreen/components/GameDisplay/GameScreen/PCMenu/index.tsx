import { black } from 'assets/AnimationOpening/stylesColorsCode';
import React, { memo } from 'react';
import { StyleSheet, View } from 'react-native';
import { GenericMenu } from 'src/components/GenericMenu';

import { ContainerWithBorders } from '../../../../../../components/ContainerWithBorders';
import { BORDER_SIZE } from '../../../../../../components/ContainerWithBorders/styles';
import { IsPressedType } from '../../types';
import { usePCMenu } from './usePCMenu';

export const MENU_ITEMS_LEFT_OFFSET = 22;
export const LIST_ITEM_HEIGHT = 17;

export const PC_MENU_ITEMS = ['POKéDEX', 'POKéMON', 'EXIT'];
const PC_MENU_WIDTH = 150;

interface MenuProps {
  isPressed: IsPressedType;
}

const PCMenuComponent = ({ isPressed }: MenuProps) => {
  const { onMenuItemPress } = usePCMenu();

  return (
    <View style={styles.menuContainer}>
      <View
        style={{
          width: PC_MENU_WIDTH,
          /**
           * On calcule la hauteur de la div qui contient :
           * la hauteur de la border du haut
           * la hauteur du nombre d'éléments dans la liste
           * la hauteur de la border du bas
           */
          height: PC_MENU_ITEMS.length * LIST_ITEM_HEIGHT + BORDER_SIZE * 2,
        }}>
        <ContainerWithBorders>
          <View style={[styles.menuItemsContainer]}>
            <GenericMenu
              isPressed={isPressed}
              menuItems={PC_MENU_ITEMS}
              onMenuItemPress={onMenuItemPress}
            />
          </View>
        </ContainerWithBorders>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  menuContainer: {
    flex: 1,
    alignItems: 'flex-end',
  },
  menuItemsContainer: {
    flex: 1,
    marginLeft: MENU_ITEMS_LEFT_OFFSET,
  },
  menuItemContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  menuText: {
    fontFamily: 'PokemonClassic',
    fontSize: 10,
    height: LIST_ITEM_HEIGHT,
    color: black,
  },
});

export const PCMenu = memo(PCMenuComponent);
