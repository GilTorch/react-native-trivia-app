import { StatusBar } from 'expo-status-bar';
import React from 'react';
import AppNavigation from "./navigations/AppNavigation";
import { StyleSheet, Text, View } from 'react-native';


export default function App() {
  return <AppNavigation />
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
