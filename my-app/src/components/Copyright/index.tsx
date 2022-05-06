import React from 'react';
import { View, Text } from 'react-native';

import { styles } from './styles';

export function Copyrights() {
  return (
    <View >
      <Text
        style={styles.text}
      > Feito com ♥ by Rocketseat</Text>
    </View>
  );
}