import { TouchableOpacity, View } from 'react-native';
import React from 'react';
import styles from './style';
import { Inbox } from '@/app/utils/commonInterface';
import { FontText } from '..';
import { normalize } from '@/app/helper/responsiveScreen';
import { useTranslation } from 'react-i18next';
import ChatBadge from "../ChatBadge";

interface Props {
  item: Inbox;
  onPress?: () => void;
}

const Item: React.FC<Props> = (props: Props) => {
  const { t } = useTranslation();
  const { item, onPress } = props;
  return (
    <TouchableOpacity style={styles.renderView} onPress={onPress}>
      <View style={styles.subRenderView}>
        <View style={styles.inRenderView}>
          <View style={styles.iconView}>
            <ChatBadge icon={item.icon} status={item.status === t('chat.status') ? true : false} />
          </View>
          <View style={styles.nameView}>
            <View style={styles.rowView}>
              <FontText style={styles.name} size={normalize(14)}>
                {item.name}
              </FontText>
              <FontText style={styles.recent} size={normalize(12)}>
                {item.time}
              </FontText>
            </View>
            <FontText style={styles.recent} size={normalize(12)}>
              {item.recentMessage}
            </FontText>
          </View>
        </View>
      </View>
    </TouchableOpacity>
  );
};

export default Item;
