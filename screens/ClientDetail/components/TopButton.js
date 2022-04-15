import React from 'react';
import { Image, StyleSheet, TouchableOpacity } from 'react-native';
export default function TopButton(props) {
  return (
    <TouchableOpacity onPress={() => props.navigation.goBack()}>
      <Image
        source={require('../../../assets/arrow.png')}
        style={styles.image}
      />
    </TouchableOpacity>
  );
}
const styles = StyleSheet.create({
  image: {
    marginLeft: 20,
    marginTop: 26,
  },
});
