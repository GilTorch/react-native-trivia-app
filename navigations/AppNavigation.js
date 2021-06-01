import React from "react";
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from "@react-navigation/stack";
import HomeScreen from "../screens/home";


const AppNavigation = () => {

  const { Navigator, Screen} = createStackNavigator();

  return (
    <NavigationContainer>
      <Navigator>
        <Screen name="Home" component={HomeScreen} />
      </Navigator>
    </NavigationContainer>
  )
}

export default AppNavigation;
