import React from "react";
import ClientDetail from "./screens/ClientDetail";
import AddClient from "./screens/AddClient";
import ClientList from "./screens/ClientList";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { createStore } from "redux";
import clientsReducer from "./reducers/clientsReducer";
import { Provider } from "react-redux";
const store = createStore(clientsReducer);

const Stack = createStackNavigator();
function MyStack() {
  return (
    <Stack.Navigator
      screenOptions={{ headerShown: false }}
      initialRouteName="ClientList"
    >
      <Stack.Screen name="ClientDetail" component={ClientDetail} />
      <Stack.Screen name="AddClient" component={AddClient} />
      <Stack.Screen name="ClientList" component={ClientList} />
    </Stack.Navigator>
  );
}
export default function App() {
  return (
    <Provider store={store}>
      <NavigationContainer>
        <MyStack />
      </NavigationContainer>
    </Provider>
  );
}
