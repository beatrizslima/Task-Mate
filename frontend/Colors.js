import { DefaultTheme, DarkTheme } from "@react-navigation/native";

export const lightTheme = {
  ...DefaultTheme,
  dark: false,
  colors: {
    ...DefaultTheme.colors,
    background: "#FFFFFF",
    primary: "#6867AC",
    primaryVariant: "#A267AC",
    secondary: "#CE7BB0",
    secondaryVariant: "#FFBCD1",
    onPrimary: "#FFFFFF",
    surface: "#FBF5F5",
    title: "#333",
    subtitle: "#ccc",
  },
};

export const darkTheme = {
  ...DarkTheme,
  dark: true,
  colors: {
		...DarkTheme.colors,
    background: "#3F1D38",
    primary: "#E19898",
    primaryVariant: "#A2678A",
    secondary: "#BE8ABF",
    secondaryVariant: "#EA9ABB",
    onPrimary: "#ffffff",
    surface: "#4D3C77",
    title: "#FFFFFF",
    subtitle: "#ccc",
  },
};

