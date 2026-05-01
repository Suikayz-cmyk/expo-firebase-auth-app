import React, { createContext, useContext, useEffect, useState, useRef } from 'react';
import { AppState, Alert } from 'react-native';
import { onAuthStateChanged, signOut } from 'firebase/auth';
import * as SecureStore from 'expo-secure-store';
import { auth } from '../config/firebase';

const AuthContext = createContext();

export const useAuth = () => useContext(AuthContext);

export function AuthProvider({ children }) {
 const [user, setUser] = useState(null);
 const [loading, setLoading] = useState(true);

 const backgroundTimeRef = useRef(null);

 useEffect(() => {
    const unsub = onAuthStateChanged(auth, async (u) => {
        setUser(u);
        if (u) {
            const token = await u.getIdToken();
            await SecureStore.setItemAsync('auth_token', token);
        } else {
            await SecureStore.deleteItemAsync('auth_token');
        }
        setLoading(false);
    });

    return unsub;
    }, []);

 const logout = async () => {
   await signOut(auth);
   await SecureStore.deleteItemAsync('auth_token');
 };

 useEffect(() => {
  const subscription = AppState.addEventListener(
    'change',
    async (nextState) => {
      if (nextState === 'background') {
        backgroundTimeRef.current = Date.now();
      }

      if (nextState === 'active') {
        if (backgroundTimeRef.current && user) {
          const diff =
            Date.now() - backgroundTimeRef.current;

          if (diff >= 10000) { 
            await logout();

            Alert.alert(
              'Logout Otomatis',
              'Anda logout karena idle 5 menit.'
            );
          }
        }
      }
    }
  );

  return () => subscription.remove();
}, [user]);


 return (
    <AuthContext.Provider value={{ user, loading, logout }}>
        {children}
    </AuthContext.Provider>
 );
}