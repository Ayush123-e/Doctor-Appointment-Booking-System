import React, { useState } from 'react';
import { View, StyleSheet, TouchableOpacity, Text, SafeAreaView, ScrollView } from 'react-native';
import { TextInput, Button, Title, Subheading, RadioButton } from 'react-native-paper';
import { Alert } from 'react-native';

const SignUpScreen = ({ navigation }) => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [role, setRole] = useState('patient');
  const handleSignUp = () => {
    if (!name || !email || !password) {
      Alert.alert('Error', 'Please fill in all required fields.');
      return;
    }
    if (password !== confirmPassword) {
      Alert.alert('Error', 'Passwords do not match.');
      return;
    }
    console.log('Signing up with the following details:');
    console.log('Name:', name);
    console.log('Email:', email);
    console.log('Password:', password);
    console.log('Role:', role);

    Alert.alert(
      'Success!',
      `Account for ${name} created as a ${role}. Check the console for details.`
    );
    navigation.navigate('Login');
  };

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView contentContainerStyle={styles.scrollContainer}>
        <Title style={styles.title}>Create an Account</Title>
        <Subheading style={styles.subheading}>Join our community</Subheading>

        <TextInput
          label="Full Name"
          value={name}
          onChangeText={setName}
          style={styles.input}
          mode="outlined"
          left={<TextInput.Icon icon="account" />}
        />

        <TextInput
          label="Email"
          value={email}
          onChangeText={setEmail}
          style={styles.input}
          mode="outlined"
          keyboardType="email-address"
          autoCapitalize="none"
          left={<TextInput.Icon icon="email" />}
        />

        <TextInput
          label="Password"
          value={password}
          onChangeText={setPassword}
          style={styles.input}
          mode="outlined"
          secureTextEntry
          left={<TextInput.Icon icon="lock" />}
        />

        <TextInput
          label="Confirm Password"
          value={confirmPassword}
          onChangeText={setConfirmPassword}
          style={styles.input}
          mode="outlined"
          secureTextEntry
          left={<TextInput.Icon icon="lock-check" />}
        />
        <View style={styles.roleContainer}>
          <Text style={styles.roleLabel}>I am a:</Text>
          <RadioButton.Group onValueChange={newValue => setRole(newValue)} value={role}>
            <View style={styles.radioButtonRow}>
              <RadioButton.Item label="Patient" value="patient" />
              <RadioButton.Item label="Doctor" value="doctor" />
            </View>
          </RadioButton.Group>
        </View>

        <Button
          mode="contained"
          onPress={handleSignUp}
          style={styles.button}
          labelStyle={styles.buttonLabel}
        >
          Sign Up
        </Button>

        <TouchableOpacity onPress={() => navigation.navigate('Login')}>
          <Text style={styles.loginText}>
            Already have an account? <Text style={styles.loginLink}>Log In</Text>
          </Text>
        </TouchableOpacity>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5',
  },
  scrollContainer: {
    justifyContent: 'center',
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
  roleContainer: {
    marginBottom: 15,
    alignItems: 'center',
  },
  roleLabel: {
    fontSize: 16,
    color: '#333',
    marginBottom: 10,
  },
  radioButtonRow: {
    flexDirection: 'row',
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
  loginText: {
    marginTop: 20,
    textAlign: 'center',
    color: '#555',
  },
  loginLink: {
    fontWeight: 'bold',
    color: '#087270fb',
  },
});

export default SignUpScreen;