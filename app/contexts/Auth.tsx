import * as React from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';

interface AuthContextType {
  token: string | null;
  login: (token: string) => void;
  logout: () => void;
}

const AuthContext = React.createContext<AuthContextType | null>(null);

export const useAuth = (): AuthContextType => {
  const context = React.useContext(AuthContext);
  if (!context) {
    throw new Error('AuthContext not found');
  }
  return context;
};

export const AuthProvider = ({ children }: { children: React.ReactNode }): JSX.Element => {
  const [token, setToken] = React.useState<string | null>(null);

  React.useEffect(() => {
    // Retrieve token from AsyncStorage on mount
    const loadToken = async () => {
      try {
        const storedToken = await AsyncStorage.getItem('authToken');
        if (storedToken) {
          setToken(storedToken);
        }
      } catch (error) {
        console.error("Failed to load token", error);
      }
    };
    loadToken();
  }, []);

  const login = React.useCallback(async (newToken: string) => {
    try {
      setToken(newToken);
      await AsyncStorage.setItem('authToken', newToken); // Save token to AsyncStorage
    } catch (error) {
      console.error("Failed to save token", error);
    }
  }, []);

  const logout = React.useCallback(async () => {
    try {
      setToken(null);
      await AsyncStorage.removeItem('authToken'); // Remove token from AsyncStorage
    } catch (error) {
      console.error("Failed to remove token", error);
    }
  }, []);

  const value = React.useMemo(() => ({
    token,
    login,
    logout,
  }), [token, login, logout]);

  return (
    <AuthContext.Provider value={value}>
      {children}
    </AuthContext.Provider>
  );
};