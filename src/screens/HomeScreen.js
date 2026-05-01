import React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';
import { useAuth } from '../contexts/AuthContext';

export default function HomeScreen() {
  const { logout } = useAuth();

  return (
    <View style={styles.container}>
      <Text style={styles.title}>
        Welcome Home
      </Text>

      <Text style={styles.subtitle}>
        Login berhasil dan session aktif.
      </Text>

      <View style={styles.buttonWrap}>
        <Button
          title="Logout"
          onPress={logout}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    padding: 24,
    backgroundColor: '#fff',
  },

  title: {
    fontSize: 28,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 8,
  },

  subtitle: {
    textAlign: 'center',
    color: 'gray',
    marginBottom: 24,
  },

  buttonWrap: {
    marginTop: 8,
  },
});