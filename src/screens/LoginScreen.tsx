import React, {useRef, useState} from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import {COLORS} from '../UiUtility/Constants';
import {validateLoginForm} from '../UiUtility/ValidateForm';

function LoginScreen({navigation}: any) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [errors, setErrors] = useState<{email?: string; password?: string}>({});
  const lastInputRef = useRef();

  const handleLogin = () => {
    const validationErrors = validateLoginForm(email, password);
    setErrors(validationErrors);

    if (Object.keys(validationErrors).length === 0) {
      // Validation successful, proceed with login logic
      navigation.navigate('DashBoard');
    }
  };
  const MoveToSignUpScreen = () => {
    navigation.navigate('SignUp');
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>LOGIN</Text>
      <View style={styles.inputTextContainer}>
        <Text style={styles.label}>Email</Text>
        <TextInput
          style={styles.emailInput}
          placeholder="Email"
          placeholderTextColor="grey"
          onChangeText={text => setEmail(text)}
          value={email}
          returnKeyType="next"
          onSubmitEditing={() => {
            lastInputRef.current.focus();
          }}
          blurOnSubmit={false}
        />
        {errors.email ? (
          <Text style={styles.errorText}>{errors.email}</Text>
        ) : null}
      </View>
      <View style={styles.inputTextContainer}>
        <Text style={styles.label}>Password</Text>
        <View
          style={{
            marginTop: 15,
            borderRadius: 15,
            flexDirection: 'row',
          }}>
          <TextInput
            style={styles.passwordInput}
            placeholder="Password"
            placeholderTextColor="grey"
            inlineImageLeft=""
            ref={lastInputRef}
            secureTextEntry={showPassword ? false : true}
            onChangeText={text => setPassword(text)}
            value={password}
          />
          <TouchableOpacity
            style={styles.eyeButton}
            onPress={() => {
              setShowPassword(!showPassword);
            }}>
            <Icon
              name={showPassword ? 'eye' : 'eye-slash'}
              size={25}
              color="grey"
            />
          </TouchableOpacity>
        </View>
        {errors.password ? (
          <Text style={styles.errorText}>{errors.password}</Text>
        ) : null}
      </View>
      <TouchableOpacity style={styles.loginButton} onPress={handleLogin}>
        <Text style={styles.buttonText}>Login</Text>
      </TouchableOpacity>
      <View style={styles.signupLinkContainer}>
        <Text style={styles.signupText}>Don't have an account?{'  '}</Text>
        <TouchableOpacity onPress={() => MoveToSignUpScreen()}>
          <Text style={styles.signupLink}>Sign Up</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 16,
    backgroundColor: COLORS.colorBackground,
  },
  title: {
    fontSize: 24,
    marginBottom: 16,
  },
  loginButton: {
    backgroundColor: COLORS.colorSecondaryGreen,
    width: '100%',
    height: 40,
    marginTop: 20,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 15,
  },
  buttonText: {
    color: 'white',
    fontSize: 18,
  },
  signupText: {
    fontSize: 16,
  },
  errorText: {
    color: 'red',
    fontSize: 16,
    marginBottom: 8,
  },
  signupLink: {
    fontSize: 20,
    color: COLORS.colorSecondaryGreen,
    textDecorationLine: 'underline',
  },
  signupLinkContainer: {
    marginTop: 20,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  label: {
    color: 'grey',
    fontWeight: 'bold',
    fontSize: 15,
  },
  emailInput: {
    marginTop: 15,
    color: 'white',
    backgroundColor: COLORS.colorPrimary,
    borderRadius: 15,
    paddingLeft: 15,
  },
  passwordInput: {
    width: '100%',
    color: 'white',
    backgroundColor: COLORS.colorPrimary,
    borderRadius: 15,
    paddingLeft: 15,
  },
  eyeButton: {
    top: 10,
    bottom: 10,
    position: 'absolute',
    right: 20,
  },
  errorMsg: {
    padding: 5,
    color: 'red',
  },
  inputTextContainer: {
    width: '100%',
    marginBottom: 10,
  },
});

export default LoginScreen;
