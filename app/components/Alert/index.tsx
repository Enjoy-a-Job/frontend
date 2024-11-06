import React from 'react';

import style from './style';
import styles from '@/app/containers/styles';
import { normalize, hp } from '@/app/helper/responsiveScreen';
import { FontText } from '@/app/components';

export type AlertTypes = 'primary' | 'danger' | 'warning' | 'success';
interface Props {
  children: React.ReactNode;
  type: AlertTypes;
  timer?: number;
}

const cfg = {
  timer: 1000 * 5,
};

const Alert = ({ children, type, timer = cfg.timer }: Props): JSX.Element => {
  const [disabled, setDisabled] = React.useState<boolean>(false);
  React.useEffect(() => {
    const timer = setTimeout(() => {
      setDisabled(true);
    }, cfg.timer);
    return () => clearTimeout(timer);
  }, [alert]);

  if (disabled) {
    return <></>;
  }

  return (
    <FontText
      name="inter-bold"
      size={normalize(16)}
      style={{ ...styles.headerText, ...style[type] }}
      pTop={hp(2)}
    >
      {children}
    </FontText>
  );
}

export default Alert;