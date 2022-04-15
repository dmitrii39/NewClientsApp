import React from 'react';
import { Image, StyleSheet } from 'react-native';
export default function RightButton() {
  return (
    <Image
      source={require('../../../assets/EditSquare.png')}
      style={styles.image}
    />
  );
}
const styles = StyleSheet.create({
  image: {
    marginRight: 23,
    marginTop: 26,
  },
});
