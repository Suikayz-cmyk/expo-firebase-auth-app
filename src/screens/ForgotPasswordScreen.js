import React, { useState } from 'react';
import { View, TextInput, Button, Alert, Text, StyleSheet } from 'react-native';
import { sendPasswordResetEmail } from 'firebase/auth';
import { auth } from '../config/firebase';

export default function ForgotPasswordScreen({ navigation }) {
  const [email, setEmail] = useState('');

  const handleReset = async () => {
    try {
      await sendPasswordResetEmail(auth, email);

      Alert.alert(
        'Sukses',
        'Email reset password telah dikirim'
      );
    } catch (e) {
      Alert.alert('Gagal', e.message);
    }
  };

   return (
    <View style={styles.container}>
      <Text style={styles.title}>
        Reset Password
      </Text>

      <Text style={styles.subtitle}>
        Masukkan email untuk menerima link reset password
      </Text>

      <TextInput
        style={styles.input}
        placeholder="Masukkan Email"
        value={email}
        onChangeText={setEmail}
        autoCapitalize="none"
      />

      <View style={styles.buttonGap}>
        <Button
          title="Reset Password"
          onPress={handleReset}
        />
      </View>

      <Text
        style={styles.link}
        onPress={() =>
          navigation.goBack()
        }
      >
        Kembali ke Login
      </Text>
    </View>
  );
}

const styles =
  StyleSheet.create({
    container: {
      flex: 1,
      justifyContent:'center',
      padding: 24,
      backgroundColor:'#fff',
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