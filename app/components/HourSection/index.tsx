import React from 'react';
import { View } from 'react-native';
import styles from './style';
import FontText from "../FontText";
import { normalize } from "@/app/helper/responsiveScreen";

const HourSection = ({ amount, hora, rightTitle }: any) => {
  return (
    <View style={styles.view}>
      <View style={styles.leftContainer}>
        <View style={styles.euroView}>
          <FontText style={styles.euro} size={normalize(32)}>
            €
          </FontText>
        </View>
        <FontText style={styles.euroHour} size={normalize(16)}>
          € {amount}/{" "}{hora}
        </FontText>
      </View>
      <View style={styles.container}>
        <View style={styles.rightContainer}>
          <FontText style={styles.rightTitle} size={normalize(16)}>
            {rightTitle}
          </FontText>
        </View>
      </View>
    </View>
  );
};

export default HourSection;
