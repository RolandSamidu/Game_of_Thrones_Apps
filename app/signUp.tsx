import React, { useState } from 'react';
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
} from 'react-native';

const Signup = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const handleSignup = () => {
    // TODO: Implement signup logic
    console.log('Signup button pressed');
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>My App</Text>

      <View style={styles.inputContainer}>
        <Text style={styles.label}>Name</Text>
        <TextInput
          style={styles.input}
          value={name}
          onChangeText={setName}
          placeholder="Enter your name"
        />
      </View>

      <View style={styles.inputContainer}>
        <Text style={styles.label}>Email Address</Text>
        <TextInput
          style={styles.input}
          value={email}
          onChangeText={setEmail}
          placeholder="Enter your email"
        />
      </View>

      <View style={styles.inputContainer}>
        <Text style={styles.label}>Password</Text>
        <TextInput
          style={styles.input}
          secureTextEntry={true}
          value={password}
          onChangeText={setPassword}
          placeholder="Enter new password"
        />
      </View>

      <View style={styles.inputContainer}>
        <Text style={styles.label}>Confirm Password</Text>
        <TextInput
          style={styles.input}
          secureTextEntry={true}
          value={confirmPassword}
          onChangeText={setConfirmPassword}
          placeholder="Enter confirm password"
        />
      </View>

      <View style={styles.passwordRequirements}>
        <Text style={styles.passwordRequirement}>
          <Text style={{ color: 'white' }}>✔</Text> One lowercase character
        </Text>
        <Text style={styles.passwordRequirement}>
          <Text style={{ color: 'white' }}>✔</Text> One uppercase character
        </Text>
        <Text style={styles.passwordRequirement}>
          <Text style={{ color: 'white' }}>✔</Text> One number
        </Text>
        <Text style={styles.passwordRequirement}>
          <Text style={{ color: 'white' }}>✔</Text> 8 characters minimum
        </Text>
      </View>

      <TouchableOpacity style={styles.button} onPress={handleSignup}>
        <Text style={styles.buttonText}>Sign Up</Text>
      </TouchableOpacity>

      <View style={styles.loginText}>
        <Text style={styles.signinText}>Have an account?</Text>
        <TouchableOpacity>
          <Text style={styles.link}>Sign In</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#2a2a2a',
    alignItems: 'center',
    padding: 20,
  },
  title: {
    fontSize: 32,
    fontWeight: 'bold',
    color: 'white',
    marginBottom: 40,
    paddingTop: 80,
  },
  inputContainer: {
    marginBottom: 15,
    width: '100%',
  },
  label: {
    fontSize: 16,
    color: 'white',
    marginBottom: 5,
  },
  input: {
    height: 50,
    borderColor: '#3d3d3d',
    backgroundColor: '#3d3d3d',
    borderWidth: 1,
    borderRadius: 10,
    paddingHorizontal: 10,
    color: 'white',
  },
  button: {
    backgroundColor: '#FFD482',
    padding: 15,
    borderRadius: 5,
    width: '100%',
    alignItems: 'center',
    marginTop: 30,
  },
  buttonText: {
    fontSize: 18,
    color: '#000',
    fontWeight: 'bold',
  },
  loginText: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 20,
  },
  link: {
    color: '#FFD482',
    fontWeight: 'bold',
    marginLeft: 5,
  },
  passwordRequirements: {
    marginTop: 10,
  },
  passwordRequirement: {
    fontSize: 12,
    color: '#fff',
  },
  signinText: {
    color: '#fff',
  }
});

export default Signup;
