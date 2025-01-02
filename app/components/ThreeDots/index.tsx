import React, { useState, useEffect } from 'react';
import { View, Animated } from 'react-native';
import styles from './style';

const ThreeDots = () => {
  const [opacities] = useState([
    new Animated.Value(0.5),
    new Animated.Value(0.2),
    new Animated.Value(0.8)
  ]);

  useEffect(() => {
    const animation = Animated.loop(
      Animated.sequence([
        Animated.timing(opacities[0], {
          toValue: 1, duration: 500,
          useNativeDriver: false
        }),
        Animated.timing(opacities[0], {
          toValue: 0.5, duration: 500,
          useNativeDriver: false
        }),
        Animated.timing(opacities[1], {
          toValue: 1, duration: 500,
          useNativeDriver: false
        }),
        Animated.timing(opacities[1], {
          toValue: 0.2, duration: 500,
          useNativeDriver: false
        }),
        Animated.timing(opacities[2], {
          toValue: 1, duration: 500,
          useNativeDriver: false
        }),
        Animated.timing(opacities[2], {
          toValue: 0.8, duration: 500,
          useNativeDriver: false
        })
      ])
    );

    animation.start();

    return () => animation.stop();
  }, []);

  return (
    <View style={styles.container}>
      {opacities.map((opacity, index) => (
        <Animated.View key={index} style={[styles.dot, { opacity }]} />
      ))}
    </View>
  );
};

export default ThreeDots;
