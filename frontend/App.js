import { StatusBar } from "expo-status-bar";
import React, { useEffect, useState } from "react";
import { StyleSheet, Text, View, useColorScheme } from "react-native";
import { darkTheme, lightTheme } from "./Colors";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Home from "./Home";
import { NavigationContainer, DefaultTheme } from "@react-navigation/native";
import Settings from "./Settings";
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import {
  faHouse,
  faSliders,
  faPlusCircle,
} from "@fortawesome/free-solid-svg-icons";
import { ThemeContext } from "./ThemeContext";
import { DeviceLanguage, LangContext, i } from "./lang/langSetup";
import AsyncStorage from "@react-native-async-storage/async-storage";

const Tab = createBottomTabNavigator();

export default function App() {
  const [theme, setTheme] = useState("");
  const themeData = { theme, setTheme };
  const [lang, setLang] = useState("");
  const langData = { lang, setLang };
  const scheme = useColorScheme();

  useEffect(() => {
    async function getSettings() {
      AsyncStorage.getItem("theme")
        .then((x) => setTheme(x))
        .catch((err) => setTheme(scheme));
      AsyncStorage.getItem("lang")
        .then((x) => {
          i.locale = x;
          setLang(i.locale);
        })
        .catch((err) => {
          i.locale = DeviceLanguage;
          setLang(i.locale);
        });
    }

    if (!theme || !lang) getSettings();
  }, []);

  return (
    <LangContext.Provider value={langData}>
      <ThemeContext.Provider value={themeData}>
        <NavigationContainer theme={theme === "dark" ? darkTheme : lightTheme}>
          <Tab.Navigator>
            <Tab.Screen
              options={{
                headerShown: false,
                tabBarShowLabel: false,
                tabBarIcon: ({ focused, color, size }) => (
                  <FontAwesomeIcon icon={faHouse} color={color} size={size * focused ? 23 : 18}/>
                ),
              }}
              name="Home"
              component={Home}
            />
            <Tab.Screen
              options={{
                headerShown: false,
                tabBarShowLabel: false,
                tabBarIcon: ({ focused, color, size }) => (
                  // if (focused) {
                  //   return (<FontAwesomeIcon icon={faPlusCircle} color={color} size={size * focused ? 30 : 20}/>)
                  // }else{
                  //   return ()
                  // }
                  <FontAwesomeIcon icon={faPlusCircle} color={color} size={size * focused ? 23 : 18}/>
                ),
              }}
              name="Add"
              component={Home}
            />
            <Tab.Screen
              options={{
                headerShown: false,
                tabBarShowLabel: false,
                tabBarIcon: ({ focused, color, size }) => (
                  <FontAwesomeIcon icon={faSliders} color={color} size={size * focused ? 23 : 18}/>
                ),
              }}
              name="Settings"
              component={Settings}
            />
          </Tab.Navigator>
        </NavigationContainer>
      </ThemeContext.Provider>
    </LangContext.Provider>
  );
}
