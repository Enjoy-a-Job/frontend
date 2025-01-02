import { View } from 'react-native';
import React from 'react';
import styles from './style';

interface Props {
  icon: React.FC<React.SVGProps<SVGSVGElement>>;
  status?: Boolean;
}
const ChatBadge = (props: Props) => {
  const { icon, status } = props;
  return (
    <View>
      {icon({})}
      <View
        style={[
          styles.badge,
          status ? styles.badgeOnlineColor : styles.badgeOfflineColor
        ]}
      />
    </View>
  );
};

export default ChatBadge;
