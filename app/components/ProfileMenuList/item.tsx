import React from 'react';
import { View, FlatList, TouchableOpacity } from 'react-native';
import styles from './style';
import { normalize } from '@/app/helper/responsiveScreen';
import colors from '@/app/assets/colors';
import SvgIcons from '@/app/assets/svgIcons';
import { FontText } from '..';
import { MenuItem } from '@/app/containers/Profile/index';

interface Props {
  item: MenuItem;
  isBorderDisplayed?: boolean;
}
const Item: React.FC<Props> = (props: Props) => {
  const { item, isBorderDisplayed } = props;
  return (
    <View>
      {isBorderDisplayed && (
        <View
          style={{
            borderBottomColor: colors.borderColor,
            borderBottomWidth: 1
          }}
        />
      )}
      <TouchableOpacity style={styles.renderView}>
        <View style={styles.subView}>
          <View style={styles.iconView}>
            <item.icon />
          </View>
          <FontText
            size={normalize(16)}
            style={styles.titleStyle}
            color={colors.black}
          >
            {item.title}
          </FontText>
        </View>
        <View style={styles.iconView}>
          <SvgIcons.LeftIcon />
        </View>
      </TouchableOpacity>
    </View>
  );
};

export default Item;
