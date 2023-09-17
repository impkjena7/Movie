import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {COLORS} from '../UiUtility/Constants';

const NotificationScreen = () => {
  return (
    <View style={styles.container}>
      <Text>NotificationScreen</Text>
    </View>
  );
};

export default NotificationScreen;
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.colorBackground,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
