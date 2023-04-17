import React, { useState } from 'react';
import { View, TextInput, Button, StyleSheet,Text } from 'react-native';
import Home from './Home';
export default function LoginScreen({navigation}) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const handleLogin = () => {
    if (email === 'user@gmail.com' && password === '123') {
      setIsLoggedIn(true);
    }
  }

  if (isLoggedIn) {
    // Chuyển hướng đến màn hình chính ở đây
    return (
      <View style={styles.container}>
        <Home/>
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <TextInput
        placeholder="Email"
        value={email}
        onChangeText={setEmail}
        style={styles.input}
      />
      <TextInput
        placeholder="Password"
        value={password}
        onChangeText={setPassword}
        secureTextEntry={true}
        style={styles.input}
      />
      <Button title="Login" onPress={handleLogin} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  input: {
    width: '80%',
    height: 50,
    borderWidth: 1,
    borderColor: 'gray',
    borderRadius: 10,
    marginBottom: 20,
    paddingHorizontal: 10,
  },
});
