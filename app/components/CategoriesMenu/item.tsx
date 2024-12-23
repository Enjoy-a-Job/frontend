import React from 'react';
import { View, TouchableOpacity } from 'react-native';
import styles from './style';
import { FontText } from '..';
import { normalize } from '@/app/helper/responsiveScreen';
import { CategoriesMenu } from '@/app/utils/commonInterface';
import SvgIcons from '@/app/assets/svgIcons';

interface Props {
  item: CategoriesMenu;
  onPress?: () => void;
}
const Item: React.FC<Props> = (props: Props) => {
  const { item, onPress } = props;
  return (
    <TouchableOpacity style={styles.renderMenuView} onPress={onPress}>
      <FontText size={normalize(16)} style={styles.titleMenu}>
        {item.title}
      </FontText>
      <View style={styles.leftIconView}>
        <SvgIcons.LeftIcon />
      </View>
    </TouchableOpacity>
  );
};

export default Item;
