import React from "react";
import { Text, StyleSheet, TouchableOpacity } from "react-native";
export default function Button({ text, accent }) {
  return (
    <TouchableOpacity
      style={accent ? styles.buttonRight : styles.buttonLeftAccent}
    >
      <Text style={accent ? styles.call : styles.chatAccent}>{text}</Text>
    </TouchableOpacity>
  );
}
const styles = StyleSheet.create({
  call: {
    color: "#FFFFFF",
    fontWeight: "600",
    fontSize: 16,
    fontSize: 24,
    textAlign: "center",
    paddingTop: 14,
    paddingBottom: 14,
  },
  buttonRight: {
    flex: 1,
    height: 52,
    backgroundColor: "#FB7360",
    borderRadius: 16,
    alignItems: "center",
    marginRight: 24,
    marginLeft: 4,
  },
  buttonLeftAccent: {
    flex: 1,
    height: 52,
    borderWidth: 1.5,
    borderColor: "#FB7360",
    borderRadius: 16,
    textAlign: "center",
    justifyContent: "center",
    marginLeft: 24,
    marginRight: 4,
  },
  chatAccent: {
    color: "#FB7360",
    fontWeight: "600",
    fontSize: 16,
    fontSize: 24,
    textAlign: "center",
  },
});
