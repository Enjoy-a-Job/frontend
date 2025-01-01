import React from 'react';
import { View } from 'react-native';
import styles from './style';
import { CourseDetailIcon } from '@/app/utils/commonInterface';

interface Props {
  item: CourseDetailIcon;
  onPress?: () => void;
}
const Item: React.FC<Props> = (props: Props) => {
  const { item, onPress } = props;
  return (
    <View style={styles.renderView}>
      <View style={styles.iconView}>
        <item.icon />
      </View>
    </View>
  );
};

export default Item;
