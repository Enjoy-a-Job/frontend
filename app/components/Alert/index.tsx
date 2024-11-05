import React from 'react';

import style from './style';

interface Props {
  children: React.ReactNode;
  type: 'primary' | 'danger' | 'warning' | 'success';
}

const Alert = ({ children, type }: Props): JSX.Element => (
  <>
    <div style={{ ...style.notification, ...(style[type] || {}) }}>
      {children}
    </div>
  </>
);

export default Alert;