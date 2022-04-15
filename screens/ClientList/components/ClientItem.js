import * as React from "react";
import { Text, View, StyleSheet, Image, TouchableOpacity } from "react-native";
export default function ClientItem({ client, navigation}) {
  return (
    <TouchableOpacity
      style={styles.container}
      onPress={() => navigation.navigate("ClientDetail", {client})}
    >
      <View>
        <Text style={styles.name}>{client?.name}</Text>
        <Text style={styles.city}>{client?.city}</Text>
      </View>
      <Image source={client?.photo} style={styles.image} />
      {client?.online ? (
        <Image
          source={require("../../../assets/online.png")}
          style={styles.online}
        />
      ) : null}
      <View>
        <Image
          style={styles.arrow}
          source={require("../../../assets/arrow-right.png")}
        />
      </View>
    </TouchableOpacity>
  );
}
const styles = StyleSheet.create({
  online: {
    position: "absolute",
    marginTop: 59,
    marginLeft: 55,
  },
  arrow: {
    marginTop: 39,
    marginBottom: 39,
    marginRight: 23,
  },
  container: {
    marginLeft: 24,
    marginRight: 24,
    marginBottom: 16,
    borderRadius: 16,
    flexDirection: "row",
    justifyContent: "space-between",
    backgroundColor: "#FFFFFF",
    shadowColor: "#F6F6F6BF",
    borderWidth: 1,
    borderColor: "#F6F6F6BF",
    // borderOpacity: 0.5,
    shadowOffset: {
      width: 2,
      height: 4,
    },
    shadowOpacity: 0.75,
  },
  name: {
    paddingTop: 24,
    paddingLeft: 76,
    fontWeight: "600",
    fontSize: 16,
    color: "#212322",
  },
  city: {
    paddingTop: 4,
    paddingLeft: 76,
    paddingBottom: 24,
    fontWeight: "400",
    fontSize: 13,
    color: "#A3A3A3",
  },
  image: {
    position: "absolute",
    borderRadius: 22,
    marginTop: 24,
    marginLeft: 16,
    marginBottom: 24,
  },
});
