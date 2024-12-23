import React from 'react';
import { View, Pressable } from 'react-native';
import styles from './style';
import { FontText } from '..';
import { normalize } from '@/app/helper/responsiveScreen';
import colors from '@/app/assets/colors';
import { CategoriesItem } from '@/app/utils/commonInterface';

interface Props {
  item: CategoriesItem;
  onPress?: () => void;
}
const Item: React.FC<Props> = (props: Props) => {
  const { item, onPress } = props;
  return (
    <Pressable style={styles.renderView} onPress={onPress}>
      <View style={styles.iconView}>
        <item.icon />
      </View>
      <View style={styles.transparentIconView} />
      <View style={styles.titleView}>
        <FontText
          size={normalize(12)}
          pTop={normalize(25)}
          style={styles.title}
          color={colors.black}
        >
          {item.title}
        </FontText>
      </View>
    </Pressable>
  );
};

export default Item;
