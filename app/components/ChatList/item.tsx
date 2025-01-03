import { View } from 'react-native';
import React from 'react';
import styles from './style';
import ChatBadge from '../ChatBadge';
import SvgIcons from '@/app/assets/svgIcons';
import { useTranslation } from 'react-i18next';
import ThreeDots from '../ThreeDots';
import { FontText } from '..';
import { normalize } from '@/app/helper/responsiveScreen';
import { Chat } from '@/app/utils/commonInterface';

interface Props {
  item: Chat;
  status: string;
}

const Item: React.FC<Props> = (props: Props) => {
  const { item, status } = props;
  const { t } = useTranslation();
  return (
    <View>
      {item.sender === t('chat.bot') ? (
        <View style={styles.view}>
          <ChatBadge
            icon={SvgIcons.ChatIcon}
            status={status === t('chat.status') ? true : false}
          />
          <View style={styles.subView}>
            <View style={styles.messageContainer}>
              {item.isTyping ? (
                <ThreeDots />
              ) : (
                <FontText size={normalize(14)} style={styles.messageText}>
                  {item.text}
                </FontText>
              )}
            </View>
            {item.time && (
              <FontText size={normalize(12)} style={styles.timeText}>
                {item.time}
              </FontText>
            )}
          </View>
        </View>
      ) : (
        <View style={styles.userSubView}>
          <View style={styles.userContainer}>
            <FontText size={normalize(14)} style={styles.userMessageText}>
              {item.text}
            </FontText>
          </View>
          {item.time && (
            <FontText size={normalize(12)} style={styles.userTimeText}>
              {item.time}
            </FontText>
          )}
        </View>
      )}
    </View>
  );
};

export default Item;
