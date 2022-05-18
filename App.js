import React from "react";
import ClientDetail from "./screens/ClientDetail";
import AddClient from "./screens/AddClient";
import ClientList from "./screens/ClientList";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

import { PersistGate } from "redux-persist/integration/react";
import { Provider } from "react-redux";
import { store, persistor } from "./reducers/store";

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
      <PersistGate loading={null} persistor={persistor}>
        <NavigationContainer>
          <MyStack />
        </NavigationContainer>
      </PersistGate>
    </Provider>
  );
}
