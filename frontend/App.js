import React, { useEffect, useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  useColorScheme,
  Animated,
  Dimensions,
  StatusBar,
} from "react-native";
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
  faCircleXmark,
} from "@fortawesome/free-solid-svg-icons";
import { ThemeContext } from "./ThemeContext";
import { DeviceLanguage, LangContext, i } from "./lang/langSetup";
import AsyncStorage from "@react-native-async-storage/async-storage";
import AddTask from "./AddTask";
import { PaperProvider } from "react-native-paper";

const Tab = createBottomTabNavigator();

export default function App() {
  const [theme, setTheme] = useState("");
  const themeData = { theme, setTheme };
  const [lang, setLang] = useState("");
  const langData = { lang, setLang };
  const scheme = useColorScheme();

  let screenHeight = Dimensions.get("screen").height;
  let windowHeight = Dimensions.get("window").height;
  let navbarHeight = screenHeight - windowHeight;
  const [bottomHeight, setBottomHeight] = useState(navbarHeight);

  const tabAnim = React.useRef(new Animated.Value(1)).current;

  useEffect(() => {
    console.log("useEffect App", lang);
    async function getSettings() {
      console.log("getsettings App", lang);
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
  }, [lang]);

  function stateChange(evt) {
    if (evt.index == 1) {
      Animated.timing(tabAnim, {
        toValue: 0,
        duration: 300,
        useNativeDriver: true,
      }).start(() => setBottomHeight(0));
    } else {
      const screenHeight = Dimensions.get("screen").height;
      const windowHeight = Dimensions.get("window").height;
      const navbarHeight = screenHeight - windowHeight;
      setBottomHeight(navbarHeight);
      Animated.timing(tabAnim, {
        toValue: 1,
        duration: 300,
        useNativeDriver: true,
      }).start();
    }
  }

  return (
    <LangContext.Provider value={langData}>
      <ThemeContext.Provider value={themeData}>
        <PaperProvider theme={theme === "dark" ? darkTheme : lightTheme}>
          <View
            style={{
              flex: 1,
              backgroundColor:
                theme === "dark"
                  ? darkTheme.colors.background
                  : lightTheme.colors.background,
            }}
          >
            <NavigationContainer
              theme={theme === "dark" ? darkTheme : lightTheme}
              onStateChange={stateChange}
            >
              <Tab.Navigator
                screenOptions={{
                  unmountOnBlur: true,
                  tabBarStyle: { opacity: tabAnim, height: bottomHeight },
                }}
              >
                <Tab.Screen
                  options={{
                    headerShown: false,
                    tabBarShowLabel: false,
                    tabBarIcon: ({ focused, color, size }) => (
                      <FontAwesomeIcon
                        icon={faHouse}
                        color={color}
                        size={size * focused ? 23 : 18}
                      />
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
                      <FontAwesomeIcon
                        icon={faPlusCircle}
                        color={color}
                        size={size * focused ? 23 : 18}
                      />
                    ),
                  }}
                  name="Add"
                  component={AddTask}
                />
                <Tab.Screen
                  options={{
                    headerShown: false,
                    tabBarShowLabel: false,
                    tabBarIcon: ({ focused, color, size }) => (
                      <FontAwesomeIcon
                        icon={faSliders}
                        color={color}
                        size={size * focused ? 23 : 18}
                      />
                    ),
                  }}
                  name="Settings"
                  component={Settings}
                />
              </Tab.Navigator>
            </NavigationContainer>
          </View>
        </PaperProvider>
      </ThemeContext.Provider>
    </LangContext.Provider>
  );
}
