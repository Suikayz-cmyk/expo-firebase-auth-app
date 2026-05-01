import React, { useState } from 'react';
import { View, TextInput, Button, Alert, Text } from 'react-native';
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
    <View style={{ padding: 20 }}>
      <TextInput
        placeholder="Masukkan Email"
        value={email}
        onChangeText={setEmail}
        autoCapitalize="none"
      />

      <Button
        title="Reset Password"
        onPress={handleReset}
      />

      <Text onPress={() => navigation.goBack()}>
        Kembali ke Login
      </Text>
    </View>
  );
}