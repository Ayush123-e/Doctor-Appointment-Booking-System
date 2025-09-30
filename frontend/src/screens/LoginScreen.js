import React, { useContext, useState } from 'react';
import { View, StyleSheet, TouchableOpacity, Text, SafeAreaView } from 'react-native';
import { TextInput, Button, Title, Subheading } from 'react-native-paper';
import { AuthContext } from '../navigation/AuthContext'; 

const LoginScreen = ({ navigation }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const { signIn } = useContext(AuthContext);

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.contentContainer}>
        <Title style={styles.title}>Welcome Back!</Title>
        <Subheading style={styles.subheading}>Log in to continue</Subheading>

        <TextInput
          label="Email"
          value={email}
          onChangeText={text => setEmail(text)}
          style={styles.input}
          mode="outlined"
          keyboardType="email-address"
          autoCapitalize="none"
          left={<TextInput.Icon icon="email" />}
        />

        <TextInput
          label="Password"
          value={password}
          onChangeText={text => setPassword(text)}
          style={styles.input}
          mode="outlined"
          secureTextEntry 
          left={<TextInput.Icon icon="lock" />}
        />

        <Button
          mode="contained"
          onPress={() => signIn()}
          style={styles.button}
          labelStyle={styles.buttonLabel}
        >
          Log In
        </Button>

        <TouchableOpacity onPress={() => navigation.navigate('SignUp')}>
          <Text style={styles.signUpText}>
            Don't have an account? <Text style={styles.signUpLink}>Sign Up</Text>
          </Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: '#f5f5f5',
  },
  contentContainer: {
    padding: 20,
  },
  title: {
    fontSize: 32,
    fontWeight: 'bold',
    textAlign: 'center',
    color: '#333',
    marginBottom: 10,
  },
  subheading: {
    textAlign: 'center',
    color: '#555',
    marginBottom: 30,
  },
  input: {
    marginBottom: 15,
  },
  button: {
    marginTop: 10,
    paddingVertical: 8,
    backgroundColor: '#087270fb', 
  },
  buttonLabel: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  signUpText: {
    marginTop: 20,
    textAlign: 'center',
    color: '#555',
  },
  signUpLink: {
    fontWeight: 'bold',
    color: '#087270fb', 
  },
});

export default LoginScreen;