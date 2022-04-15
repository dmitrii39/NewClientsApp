import React from "react";
import { Text, StyleSheet, TouchableOpacity } from "react-native";
export default function City({ city }) {
  return <Text style={styles.city}>{city}</Text>;
}
const styles = StyleSheet.create({
  city: {
    marginTop: 4,
    fontWeight: "400",
    fontSize: 13,
    textAlign: "center",
    fontSize: 36,
    fontStyle: "normal",
    color: "#A3A3A3",
  },
});
