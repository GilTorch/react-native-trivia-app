import React from "react";
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from "@react-navigation/stack";
import HomeScreen from "../screens/Home";
import QuizzScreen from "../screens/Quizz";


const AppNavigation = () => {

  const { Navigator, Screen} = createStackNavigator();

  return (
    <NavigationContainer>
      <Navigator>
        <Screen name="Home" component={HomeScreen} />
        <Screen name="Quizz" component={QuizzScreen} />
      </Navigator>
    </NavigationContainer>
  )
}

export default AppNavigation;