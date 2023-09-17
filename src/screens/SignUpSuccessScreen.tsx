import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';
import {COLORS} from '../UiUtility/Constants';

const SignUpSuccessScreen = ({navigation}: any) => {
  function moveToLoginScreen() {
    navigation.navigate('Login');
  }
  return (
    <View style={styles.container}>
      <View style={styles.card}>
        <Text style={styles.labelText}>You have Successfully Signed up.</Text>
        <TouchableOpacity
          style={styles.loginButton}
          onPress={moveToLoginScreen}>
          <Text style={styles.buttonText}>LOGIN</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default SignUpSuccessScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.colorBackground,
    justifyContent: 'center',
    alignItems: 'center',
  },
  card: {
    width: '80%',
    height: '30%',
    backgroundColor: COLORS.colorNavoption,
    borderRadius: 10,
    alignItems: 'center',
    justifyContent: 'center',
  },
  loginButton: {
    backgroundColor: COLORS.colorSecondaryGreen,
    width: '50%',
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
  labelText: {
    color: 'white',
    fontSize: 15,
  },
});
