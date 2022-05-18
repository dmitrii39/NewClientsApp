import * as React from "react";
import {
  Text,
  View,
  StyleSheet,
  TextInput,
  Image,
  FlatList,
  SafeAreaView,
} from "react-native";
import ClientItem from "./components/ClientItem";
import LstBut from "./components/LstBut";
// import clientsData from "../../clients";
import { useSelector, useDispatch } from 'react-redux'
import { onAddClientAction } from "../../reducers/clientsReducer";
export default function ClientList({ navigation }) {

  const addClient = (client) => {
    dispatch(onAddClientAction(client))
    // clients.push(client);
    // setClients([...clients]);
    navigation.goBack()
    // console.log("селёдка", client);
    // console.log('length', clients.length)
  };
  const clients = useSelector(state => state.clients);
  const dispatch = useDispatch()
  console.log('clientsState', clients)
  const renderItem = ({ item }) => (
    <ClientItem client={item} navigation={navigation} />
  );
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: "#fff" }}>
      <View style={styles.container}>
        <View style={styles.title}>
          <Text style={styles.text}>Клиенты</Text>
        </View>
        <View style={styles.txtIn}>
          <Image
            style={styles.icon}
            source={require("../../assets/Search.png")}
          />
          <TextInput style={styles.input} placeholder={"Поиск"} />
        </View>
        <FlatList data={clients} renderItem={renderItem} />
        <LstBut
          text="Добавить нового"
          // navigation={navigation}
          onPress={() => navigation.navigate("AddClient", {addClient: addClient})}
        />
      </View>
    </SafeAreaView>
  );
}
const styles = StyleSheet.create({
  icon: {
    position: "absolute",
    marginLeft: 15.6,
    marginTop: 13.6,
  },
  container: {
    flex: 1,
    backgroundColor: "#FDFDFD",
  },
  title: {
    paddingTop: 92,
    paddingLeft: 24,
    paddingRight: 24,
    paddingBottom: 16,
  },
  text: {
    fontWeight: "700",
    fontSize: 34,
    fontStyle: "normal",
  },
  input: {
    width: "90%",
    marginLeft: 20,
    borderRadius: 12,
    backgroundColor: "#F6F6F6",
    paddingLeft: 44,
    paddingTop: 12,
    paddingBottom: 12,
    fontSize: 16,
    fontWeight: "400",
    fontStyle: "normal",
    // placeholderTextColor: "#A3A3A3",
  },
  txtIn: {
    paddingLeft: 24,
    paddingRight: 24,
    paddingBottom: 24,
  },
});
