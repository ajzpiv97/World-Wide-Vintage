import React from 'react';
import { Text, View, TouchableOpacity } from 'react-native';
import Toast from 'react-native-root-toast';
import styles from './styles';

const showToast = () => {
  Toast.show('This is a message', {
    duration: Toast.durations.LONG,
    position: Toast.positions.BOTTOM,
    shadow: true,
    animation: true,
    hideOnPress: true,
    delay: 0,
    onShow: () => {
        // calls on toast\`s appear animation start
    },
    onShown: () => {
        // calls on toast\`s appear animation end.
    },
    onHide: () => {
        // calls on toast\`s hide animation start.
    },
    onHidden: () => {
        // calls on toast\`s hide animation end.
    }
  });
}

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
