import React, { useState } from 'react';
import { View, TextInput, Button, Alert, Text, StyleSheet} from 'react-native';
import {
  createUserWithEmailAndPassword,
  sendEmailVerification
} from 'firebase/auth';

import { auth } from '../config/firebase';

export default function RegisterScreen({ navigation }) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleRegister = async () => {
    try {
      const cred = await createUserWithEmailAndPassword(
        auth,
        email,
        password
      );

      await sendEmailVerification(cred.user);

      Alert.alert(
        'Sukses',
        'Cek email Anda untuk verifikasi.'
      );
    } catch (e) {
      Alert.alert('Gagal', e.message);
    }
  };

    return (
    <View style={styles.container}>
      <Text style={styles.title}>
        Create Account
      </Text>

      <Text style={styles.subtitle}>
        Daftar akun baru untuk melanjutkan
      </Text>

      <TextInput
        style={styles.input}
        placeholder="Email"
        value={email}
        onChangeText={setEmail}
        autoCapitalize="none"
      />

      <TextInput
        style={styles.input}
        placeholder="Password"
        value={password}
        onChangeText={
          setPassword
        }
        secureTextEntry
      />

      <View style={styles.buttonGap}>
        <Button
          title="Register"
          onPress={
            handleRegister
          }
        />
      </View>

      <Text
        style={styles.link}
        onPress={() =>
          navigation.goBack()
        }
      >
        Sudah punya akun? Login
      </Text>
    </View>
  );
}

const styles =
  StyleSheet.create({
    container: {
      flex: 1,
      justifyContent:
        'center',
      padding: 24,
      backgroundColor:
        '#fff',
    },

    title: {
      fontSize: 28,
      fontWeight: 'bold',
      textAlign: 'center',
      marginBottom: 8,
    },

    subtitle: {
      fontSize: 14,
      color: 'gray',
      textAlign: 'center',
      marginBottom: 24,
    },

    input: {
      borderWidth: 1,
      borderColor: '#ccc',
      borderRadius: 8,
      padding: 12,
      marginBottom: 12,
    },

    buttonGap: {
      marginBottom: 12,
    },

    link: {
      textAlign: 'center',
      marginTop: 10,
      color: '#2563eb',
    },
  });