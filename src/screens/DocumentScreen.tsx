import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {COLORS} from '../UiUtility/Constants';

const DocumentScreen = () => {
  return (
    <View style={styles.container}>
      <Text>DocumentScreen</Text>
    </View>
  );
};

export default DocumentScreen;
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.colorBackground,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
