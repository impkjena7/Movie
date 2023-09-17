import {ActivityIndicator, Text, View} from 'react-native';
import React, {useEffect, useState} from 'react';
import {Modal, StyleSheet} from 'react-native';
import {COLORS} from './Constants';
interface ProgressBarModalProps {
  isVisible: boolean;
}
export const ProgressBar = ({isVisible}: ProgressBarModalProps) => {
  const [loadingText, setLoadingText] = useState('Loading');

  useEffect(() => {
    let animationInterval: number;
    if (isVisible) {
      let dots = '';
      animationInterval = setInterval(() => {
        if (dots.length < 3) {
          dots += '.';
        } else {
          dots = '';
        }
        setLoadingText('Loading' + dots);
      }, 500); // Adjust the interval to control the animation speed
    } else {
      setLoadingText('Loading'); // Reset the loading text when the modal is hidden
    }

    return () => {
      clearInterval(animationInterval);
    };
  }, [isVisible]);

  return (
    <Modal
      animationType="fade"
      transparent={true}
      visible={isVisible}
      onRequestClose={() => {}}>
      <View style={styles.modalContainer}>
        <View style={styles.modalContent}>
          <ActivityIndicator size="small" color={COLORS.white} />
          <Text style={styles.loadingText}>{loadingText}</Text>
        </View>
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  modalContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
  modalContent: {
    backgroundColor: COLORS.colorBackground,
    padding: 20,
    borderRadius: 8,
    alignItems: 'center',
  },
  loadingText: {
    marginTop: 10,
    fontSize: 16,
    fontWeight: 'bold',
    color: COLORS.white,
  },
});
