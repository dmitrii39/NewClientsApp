import React from 'react';
import { Image, StyleSheet, TouchableOpacity } from 'react-native';
export default function PersonImage() {
  return (
    <Image
      source={require('../../../assets/person.png')}
      style={styles.person}
    />
  );
}
const styles = StyleSheet.create({
  person: {
    width: 162.5,
    height: 162.5,
    borderRadius: 81.25,
    alignContent: 'center',
    justifyContent: 'center',
    alignItems: 'center',
  },
});
