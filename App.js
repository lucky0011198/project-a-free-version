import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { Button, Icon, Text, Div } from "react-native-magnus";
import { LogBox } from "react-native";
LogBox.ignoreLogs(["Warning: ..."]);

LogBox.ignoreAllLogs(true);

//importing components
import CreateScreen from "./components/Create";
import HomeScreen from "./components/Home";
import UpdateScreen from "./components/update";
import StudentScreen from "./components/Student";
import ClassScreen from "./components/Class";
import ViewScreen from "./components/View";
import TempletScreen from "./components/Templet";

//importing onboard screen
import OnboardScreen from "./components/Onboard/App";

const Stack = createNativeStackNavigator();

import {
  Feather,
  FontAwesome5,
  MaterialCommunityIcons,
  Foundation,
  AntDesign,
  MaterialIcons,
  Ionicons,
  FontAwesome,
  Entypo,
  Fontisto,
} from "@expo/vector-icons";

function App({ navigation, route }) {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Onboard"
          component={OnboardScreen}
          options={{
            title: "OnboardScreen",
            headerShown: false,
          }}
        />
        <Stack.Screen
          name="Home"
          component={HomeScreen}
          options={{
            title: "Attendance",
          }}
        />

        <Stack.Screen
          name="Templet"
          component={TempletScreen}
          options={{ headerShown: false }}
        />

        <Stack.Screen
          name="Create"
          component={CreateScreen}
          options={{ title: "Create Attendance" }}
        />
        <Stack.Screen
          name="Update"
          component={UpdateScreen}
          options={{ title: "Add Attendance" }}
        />
        <Stack.Screen
          name="View"
          component={ViewScreen}
          options={{ title: "Add Attendance" }}
        />

        <Stack.Screen
          name="Student"
          component={StudentScreen}
          options={{
            title: "Add Attendance",
          }}
        />
        <Stack.Screen
          name="Class"
          component={ClassScreen}
          options={{
            title: "Add Attendance",
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
