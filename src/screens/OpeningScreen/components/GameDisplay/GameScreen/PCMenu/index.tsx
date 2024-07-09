import React, { memo } from 'react';
import { StyleSheet, View } from 'react-native';
import { GenericList } from 'src/components/GenericList';

import { ContainerWithBorders } from '../../../../../../components/ContainerWithBorders';
import { BORDER_SIZE } from '../../../../../../components/ContainerWithBorders/styles';
import { IsPressedType } from '../../types';
import { Pokedex } from './Pokedex';
import { usePCMenu } from './usePCMenu';

const PC_MENU_ITEMS = ['POKéDEX', 'POKéMON', 'EXIT'];
const MENU_ITEMS_LEFT_OFFSET = 22;
const MENU_ITEM_LEFT_OFFSET = 0;
const MENU_ITEM_HEIGHT = 17;
const PC_MENU_WIDTH = 150;
const PC_MENU_HEIGHT =
  PC_MENU_ITEMS.length * MENU_ITEM_HEIGHT + BORDER_SIZE * 2;

interface MenuProps {
  isPressed: IsPressedType;
  closeCurrentInteraction: () => void;
}

const PCMenuComponent = ({ isPressed, closeCurrentInteraction }: MenuProps) => {
  const { onMenuItemPress, isPokedexPressed } = usePCMenu(
    closeCurrentInteraction,
  );

  return isPokedexPressed ? (
    <Pokedex isPressed={isPressed} />
  ) : (
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
          height: PC_MENU_HEIGHT,
        }}>
        <ContainerWithBorders>
          <View style={[styles.menuItemsContainer]}>
            <GenericList
              isPressed={isPressed}
              listItems={PC_MENU_ITEMS}
              onMenuItemPress={onMenuItemPress}
              listSelectorOffset={MENU_ITEMS_LEFT_OFFSET}
              listItemHeight={MENU_ITEM_HEIGHT}
              listItemLeftOffset={MENU_ITEM_LEFT_OFFSET}
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
});

export const PCMenu = memo(PCMenuComponent);
