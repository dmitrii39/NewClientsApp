import React from "react";
import { Image, Text, View, StyleSheet, TouchableOpacity } from "react-native";
export default function TopBar({ navigation }) {
  return (
    <View style={{ paddingBottom: 10.5 }}>
      <View style={styles.title}>
        <Text style={styles.text}>Добавить нового</Text>
      </View>
      <TouchableOpacity
        style={styles.arrow}
        onPress={() => navigation.goBack()}
      >
        <Image source={require("../../../assets/arrow-left.png")} />
      </TouchableOpacity>
    </View>
  );
}
const styles = StyleSheet.create({
  arrow: {
    paddingLeft: 20,
    paddingTop: 26,
    paddingRight: 72.5,
    position: "absolute",
  },
  title: {
    alignItems: "center",
    paddingTop: 29.5,
  },
  text: {
    fontWeight: "600",
    fontStyle: "normal",
    fontSize: 16,
  },
});
