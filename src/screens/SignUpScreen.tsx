import React, {useState} from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  ScrollView,
} from 'react-native';
import {validateSignupForm} from '../UiUtility/ValidateForm';
import {COLORS} from '../UiUtility/Constants';
const SignUpScreen: React.FC<{navigation: any}> = ({navigation}) => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    password: '',
    phoneNumber: '',
  });

  const [errors, setErrors] = useState<{[key: string]: string}>({});

  const handleSignup = () => {
    const validationErrors = validateSignupForm(formData);
    setErrors(validationErrors);

    if (Object.keys(validationErrors).length === 0) {
      // Validation successful, proceed with sign-up logic
      navigation.navigate('SignUpSuccess');
    }
  };

  return (
    <ScrollView style={{flex: 1, backgroundColor: COLORS.colorBackground}}>
      <View style={styles.container}>
        <Text style={styles.title}>SIGN UP</Text>
        <View style={styles.inputTextContainer}>
          <Text style={styles.label}>First Name</Text>
          <TextInput
            style={styles.input}
            placeholder="First Name"
            onChangeText={text => setFormData({...formData, firstName: text})}
            value={formData.firstName}
          />
          {errors.firstName ? (
            <Text style={styles.errorText}>{errors.firstName}</Text>
          ) : null}
        </View>
        <View style={styles.inputTextContainer}>
          <Text style={styles.label}>Last Name</Text>
          <TextInput
            style={styles.input}
            placeholder="Last Name"
            onChangeText={text => setFormData({...formData, lastName: text})}
            value={formData.lastName}
          />
          {errors.lastName ? (
            <Text style={styles.errorText}>{errors.lastName}</Text>
          ) : null}
        </View>
        <View style={styles.inputTextContainer}>
          <Text style={styles.label}>Email</Text>
          <TextInput
            style={styles.input}
            placeholder="Email"
            onChangeText={text => setFormData({...formData, email: text})}
            value={formData.email}
          />
          {errors.email ? (
            <Text style={styles.errorText}>{errors.email}</Text>
          ) : null}
        </View>
        <View style={styles.inputTextContainer}>
          <Text style={styles.label}>Password</Text>
          <TextInput
            style={styles.input}
            placeholder="Password"
            onChangeText={text => setFormData({...formData, password: text})}
            value={formData.password}
            secureTextEntry
          />
          {errors.password ? (
            <Text style={styles.errorText}>{errors.password}</Text>
          ) : null}
        </View>
        <View style={styles.inputTextContainer}>
          <Text style={styles.label}>Phone Number</Text>
          <TextInput
            style={styles.input}
            placeholder="Phone Number"
            keyboardType="numeric"
            onChangeText={text => setFormData({...formData, phoneNumber: text})}
            value={formData.phoneNumber}
          />
          {errors.phoneNumber ? (
            <Text style={styles.errorText}>{errors.phoneNumber}</Text>
          ) : null}
        </View>
        <TouchableOpacity style={styles.signupButton} onPress={handleSignup}>
          <Text style={styles.buttonText}>Sign Up</Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
};

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
  input: {
    width: '100%',
    marginTop: 15,
    color: 'white',
    backgroundColor: COLORS.colorPrimary,
    borderRadius: 15,
    paddingLeft: 15,
  },
  buttonText: {
    color: 'white',
    fontSize: 18,
    fontWeight: 'bold',
  },
  errorText: {
    color: 'red',
    fontSize: 16,
    marginBottom: 5,
  },
  signupButton: {
    backgroundColor: COLORS.colorSecondaryGreen,
    width: '100%',
    height: 40,
    marginTop: 20,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 15,
  },
  inputTextContainer: {
    width: '100%',
    marginBottom: 10,
  },
  label: {
    color: 'grey',
    fontWeight: 'bold',
    fontSize: 15,
  },
});

export default SignUpScreen;
