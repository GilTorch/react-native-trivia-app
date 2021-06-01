import React from 'react';
import AppNavigation from "./navigations/AppNavigation";
import { ThemeProvider } from "styled-components";
import theme from "./utils/theme";

export default function App() {
  return <ThemeProvider theme={theme}>
    <AppNavigation />
  </ThemeProvider>
}