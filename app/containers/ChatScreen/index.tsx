import { RouterProps } from '@/app/utils/commonInterface';
import React from 'react';
import { View, TouchableOpacity } from 'react-native';
import { useTranslation } from 'react-i18next';
import styles from './style';
import SvgIcons from '@/app/assets/svgIcons';
import { normalize } from '@/app/helper/responsiveScreen';
import { FontText } from '@/app/components';
import ChatBadge from '@/app/components/ChatBadge';
import ChatInput from '@/app/components/ChatInput';
import { CHAT_INBOX } from '@/app/helper/constantData';
import ChatList from '@/app/components/ChatList';

const ChatScreen = ({ navigation, route }: RouterProps): React.ReactElement => {
  const { t } = useTranslation();
  const { index }: any = route.params;
  const messages = CHAT_INBOX()[index];

  React.useLayoutEffect(() => {
    navigation.setOptions({
      headerStatusBarHeight: normalize(20),
      headerTitleAlign: 'left',
      headerLeft: () => (
        <TouchableOpacity
          style={styles.backIcon}
          onPress={() => navigation.goBack()}
        >
          <SvgIcons.BackIcon />
        </TouchableOpacity>
      ),
      headerTitle: () => (
        <View style={styles.headerMainView}>
          <ChatBadge
            icon={messages.icon}
            status={messages.status === t('chat.status') ? true : false}
          />
          <View style={styles.headerSubView}>
            <FontText style={styles.headerTitle}>{messages.name}</FontText>
            <FontText style={styles.headerStatus}>{messages.status}</FontText>
          </View>
        </View>
      )
    });
  }, [navigation]);

  return (
    <View style={styles.container}>
      <View style={styles.subContainer}>
        <View style={styles.chatListView}>
          <ChatList data={messages.chat} status={messages.status} />
        </View>
        <View style={styles.bottomView}>
          <View style={styles.bottomSubView}>
            <ChatInput />
          </View>
        </View>
      </View>
    </View>
  );
};

export default ChatScreen;
