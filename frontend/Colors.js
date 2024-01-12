import { DefaultTheme, DarkTheme } from "@react-navigation/native";
import { MD2DarkTheme, MD2LightTheme } from "react-native-paper";

export const lightTheme = {
  ...MD2LightTheme,
  ...DefaultTheme,
  dark: false,
  colors: {
    ...MD2LightTheme.colors,
    ...DefaultTheme.colors,
    background: "#FFFFFF",
    primary: "#6867AC",
    primary: "#A2678A",
    primaryVariant: "#A267AC",
    secondary: "#CE7BB0",
    secondaryVariant: "#FFBCD1",
    onPrimary: "#ffffff",
    outline: "#ccc",
    surface: "#FBF5F5",
    title: "#333",
    text: "#333",
    subtitle: "#777",
  },
};

export const darkTheme = {
  ...MD2DarkTheme,
  ...DarkTheme,
  dark: true,
  colors: {
    ...MD2DarkTheme.colors,
		...DarkTheme.colors,
    background: "#302030",
    primary: "#A2678A",
    primaryVariant: "#6867AC",
    secondary: "#BE8ABF",
    secondaryVariant: "#EA9ABB",
    onPrimary: "#ffffff",
    outline: "#555",
    surface: "#4D3C77",
    title: "#FFFFFF",
    text: "#FFFFFF",
    subtitle: "#ccc",
  },
};

