import React from "react";
import { Text, StyleSheet, TouchableOpacity } from "react-native";
export default function Name({ name }) {
  return <Text style={styles.name}>{name}</Text>;
}
const styles = StyleSheet.create({
  name: {
    marginTop: 12.75,
    fontWeight: "600",
    fontSize: 24,
    textAlign: "center",
    fontSize: 36,
    fontStyle: "normal",
  },
});
