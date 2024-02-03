import React, { memo } from 'react';
import { useMemo } from 'react';
import { Text, View } from 'react-native';

const PreMatchComponent = (): JSX.Element => {
  return (
    <View>
      <Text>toto</Text>
    </View>
  );
};

export const PreMatch = memo(PreMatchComponent);
