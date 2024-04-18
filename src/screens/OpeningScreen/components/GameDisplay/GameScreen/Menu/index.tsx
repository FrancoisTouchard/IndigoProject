import { black } from 'assets/AnimationOpening/stylesColorsCode';
import React, { memo } from 'react';
import { StyleSheet, Text, View } from 'react-native';

import { ContainerWithBorders } from '../../../../../../components/ContainerWithBorders';
import { BORDER_SIZE } from '../../../../../../components/ContainerWithBorders/styles';
import { ArrowType } from '../../../GameControls/DirectionalCross/DirectionalArrow/types';
import { ListSelector } from './ListSelector';
import { useMenu } from './useMenu';

const PC_MENU_WIDTH = 150;
export const MENU_ITEMS_LEFT_OFFSET = 22;
export const LIST_ITEM_HEIGHT = 17;

interface MenuProps {
  isPressed: ArrowType | false;
  menuItems: string[];
}

const MenuComponent = ({ isPressed, menuItems }: MenuProps) => {
  const { selectedItem } = useMenu(isPressed, menuItems);

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
          height: menuItems.length * LIST_ITEM_HEIGHT + BORDER_SIZE * 2,
        }}>
        <ContainerWithBorders>
          <View style={[styles.menuItemsContainer]}>
            {menuItems.map((item, index) => (
              <View key={index} style={styles.menuItemContainer}>
                <Text style={styles.menuText}>{item}</Text>
                {index === selectedItem && <ListSelector />}
              </View>
            ))}
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

export const Menu = memo(MenuComponent);
