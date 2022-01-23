import "react-native-gesture-handler";
import React, { FC } from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { MainScreen } from "../screens";

type NavigationProps = {};

const Stack = createStackNavigator<NavigationProps>();

const Navigation = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="MainScreen" component={MainScreen} />
    </Stack.Navigator>
  );
};

export default Navigation;
