import * as React from 'react';

export type AlertTypes = 'primary' | 'danger' | 'warning' | 'success';

interface Alert {
  type: AlertTypes;
  message: string;
}

interface DisplayAlertContext {
  displayAlert: (alert: Alert) => void;
  hideAlert: () => void;
  alert: Alert | null;
}

const AlertContext = React.createContext<DisplayAlertContext | null>(null);

export const useDisplayAlert = (): DisplayAlertContext => {
  const value = React.useContext(AlertContext);
  if (!value) {
    throw new Error('DisplayAlert context not found');
  }
  return value;
};

export const DisplayAlertProvider = ({ children }: { children: React.ReactNode }): JSX.Element => {
  const [alert, setAlert] = React.useState<Alert | null>(null);

  const displayAlert = React.useCallback((alert: Alert) => {
    setAlert(alert);
    setTimeout(() => setAlert(null), 5 * 1000);
  }, []);

  const hideAlert = React.useCallback(() => setAlert(null), []);

  const value = React.useMemo(() => ({
    displayAlert,
    hideAlert,
    alert,
  }), [alert, displayAlert, hideAlert]);

  return (
    <AlertContext.Provider value={value}>
      {children}
    </AlertContext.Provider>
  );
};
