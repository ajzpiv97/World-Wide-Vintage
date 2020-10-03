import 'react-native-gesture-handler';
import React, { useEffect, useRef } from 'react';
import { View } from 'react-native';
import LottieView from 'lottie-react-native';
import styles from './styles';

export default function ({ navigation }: any) {
  let animation: any = useRef(null);

  useEffect(() => {
    animation.current.play();

    const interval = setInterval(() => {
      navigation.replace('main');
    }, 5000);

    return () => {
      animation.current.reset();
      clearInterval(interval);
    }
  }, []);

  return (
    <View style={styles.animationContainer}>
      <LottieView
        ref={animation}
        source={require('../../../assets/animations/rocket.json')}
      />
    </View>
  );
}
