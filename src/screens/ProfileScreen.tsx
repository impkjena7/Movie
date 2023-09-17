import {StyleSheet, Text, View, TouchableOpacity} from 'react-native';
import React from 'react';
import {COLORS} from '../UiUtility/Constants';

const ProfileScreen = ({navigation}: any) => {
  function logOut() {
    navigation.navigate('Login');
  }
  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.loginButton} onPress={logOut}>
        <Text style={styles.buttonText}>LOGOUT</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.colorBackground,
    justifyContent: 'center',
    alignItems: 'center',
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
});

export default ProfileScreen;
