import React from "react";
import { TextInput, Text, View, StyleSheet } from "react-native";
export default function TxtIn({text, phld, height, value, onChangeValue}) {
  return (
    <View style={styles.wrapper}>
      <Text style={styles.text}>{text}</Text>
      <View>
        <TextInput
          multiline
          numberOfLines={height}
          style={styles.input}
          placeholder={phld}
          value={value}
          onChangeText={onChangeValue}
        />
      </View>
    </View>
  );
}
const styles = StyleSheet.create({
  input: {
    borderRadius: 16,
    backgroundColor: "#F6F6F6",
    width: "auto",
    // placeholderTextColor: "#A3A3A3",
    fontSize: 20,
    paddingTop: 12,
    paddingBottom: 12,
    paddingLeft: 16,
    fontSize: 16,
    fontWeight: "400",
    
  },
  text: {
    fontWeight: "500",
    paddingLeft: 16,
    paddingBottom: 6.5,
    fontSize: 16,
    color: "#212322",
  },
  wrapper: {
    paddingLeft: 24,
    paddingRight: 24,
    paddingTop: 26.5,
  },
});
