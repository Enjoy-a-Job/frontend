import React from 'react';
import {View, Pressable} from 'react-native';
import {normalize} from '../../helper/responsiveScreen';
import colors from '../../assets/colors';
import {FontText} from '..';

const HeaderOfList = ({
  title,
  rightText,
}: {
  title: string;
  rightText: string;
}) => {
  return (
    <View style={{flexDirection: 'row'}}>
      <FontText
        name={'inter-semibold'}
        size={normalize(16)}
        style={{flex: 1, fontWeight: '500'}}
        color={colors.black}>
        {title}
      </FontText>
      <Pressable>
        <FontText
          name={'inter-semibold'}
          size={normalize(14)}
          style={{fontWeight: '400', color: colors.darkGray}}
          color={colors.black}>
          {rightText}
        </FontText>
      </Pressable>
    </View>
  );
};

export default HeaderOfList;
