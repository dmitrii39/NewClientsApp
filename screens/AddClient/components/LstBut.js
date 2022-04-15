import React from "react";
import { Text, View, StyleSheet, TouchableOpacity } from "react-native";
export default function LstBut({ text, onPress }) {
  return (
    <View style={styles.but}>
      <TouchableOpacity onPress={onPress} style={styles.opa}>
        <Text style={styles.text}>{text}</Text>
      </TouchableOpacity>
    </View>
  );
}
const styles = StyleSheet.create({
  opa: {
    backgroundColor: "#FB7360",
    borderRadius: 16,
    height: 52,
    justifyContent: "center",
    alignItems: "center",
  },
  text: {
    fontWeight: "600",
    color: "#FFFFFF",
    textAlign: "center",
    paddingTop: 14,
    paddingBottom: 14,
    paddingRight: 24,
    paddingLeft: 24,
  },
  but: {
    justifyContent: "flex-end",
    flex: 1,
    paddingBottom: 44,
    paddingLeft: 24,
    paddingRight: 24,
    marginTop: 81,
  },
});
