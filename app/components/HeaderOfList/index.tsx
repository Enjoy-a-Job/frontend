import React from 'react';
import { View, Pressable } from 'react-native';
import { FontText } from '..';
import colors from "@/app/assets/colors";
import { normalize } from "@/app/helper/responsiveScreen";

const HeaderOfList = ({
  title,
  rightText,
  onPress
}: {
  title: string;
  rightText: string;
  onPress?: () => void;
}) => {
  return (
    <View style={{ flexDirection: 'row' }}>
      <FontText
        name={'inter-semibold'}
        size={normalize(16)}
        style={{ flex: 1, fontWeight: '500' }}
        color={colors.black}
      >
        {title}
      </FontText>
      <Pressable onPress={onPress}>
        <FontText
          name={'inter-semibold'}
          size={normalize(14)}
          style={{ fontWeight: '400', color: colors.darkGray }}
          color={colors.black}
        >
          {rightText}
        </FontText>
      </Pressable>
    </View>
  );
};

export default HeaderOfList;
