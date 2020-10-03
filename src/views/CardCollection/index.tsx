import React from 'react';
import { Text, View, TouchableOpacity } from 'react-native';
import { showToast } from '../../utils';
import styles from './styles';

export default () => {
  return (
    <View style={styles.container}>
      <Text>Card Collection!</Text>
      <TouchableOpacity activeOpacity={0.5} style={{ backgroundColor: 'red', marginTop: 2 }} onPress={() => showToast()}>
        <Text>Press me</Text>
      </TouchableOpacity>
    </View>
  );
}
