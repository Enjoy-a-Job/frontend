import React from 'react';

import style from './style';
import styles from '@/app/containers/styles';
import { normalize, hp } from '@/app/helper/responsiveScreen';
import { FontText } from '@/app/components';
import { useDisplayAlert } from '@/app/contexts/DisplayAlert';


const cfg = {
  timer: 1000 * 5,
};

const Alert = (): JSX.Element => {
  const { alert } = useDisplayAlert();

  if (!alert) {
    return <></>;
  }

  return (
    <FontText
      name="inter-bold"
      size={normalize(16)}
      style={{ ...styles.headerText, ...style[alert.type] }}
      pTop={hp(2)}
    >
      {alert.message}
    </FontText>
  );
}

export default Alert;