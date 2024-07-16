import React, { memo } from 'react';
import { StyleSheet, View } from 'react-native';
import {
  LIST_SELECTOR_DIMENSIONS_WITH_OFFSET,
  ListSelector,
} from 'src/components/GenericList/ListSelector';
import { IsPressedType } from 'src/screens/OpeningScreen/components/GameDisplay/types';

import { ListItemText } from './ListItemText';
import { useGenericList } from './useGenericList';

interface Props {
  isPressed: IsPressedType;
  listItems: string[];
  onMenuItemPress: (clickedItem: string) => void;
  renderListItem?: (item: string) => JSX.Element;
}

export const LIST_ITEM_HEIGHT = 17;

const defaultRenderListItem = (item: string) => {
  return <ListItemText item={item} />;
};

const GenericListComponent = ({
  isPressed,
  listItems,
  onMenuItemPress,
  renderListItem = defaultRenderListItem,
}: Props) => {
  const { selectorPosition } = useGenericList(
    isPressed,
    listItems,
    onMenuItemPress,
  );

  return (
    <>
      {listItems.map((item, index) => (
        <View key={index} style={styles.menuItemContainer}>
          {renderListItem(item)}
          {index === selectorPosition && <ListSelector />}
        </View>
      ))}
    </>
  );
};

export const GenericList = memo(GenericListComponent);

const styles = StyleSheet.create({
  menuItemContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-start',
    marginLeft: LIST_SELECTOR_DIMENSIONS_WITH_OFFSET,
  },
});
