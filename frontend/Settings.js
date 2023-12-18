import { setStatusBarStyle } from "expo-status-bar";
import React from "react";
import { Text, View, Button, List, FlatList } from "react-native";
import { useTheme } from "@react-navigation/native";
import { ThemeContext } from "./ThemeContext";
import FontAwesome from "@expo/vector-icons/FontAwesome";
import { i, LangContext } from "./lang/langSetup";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { useStyles } from "./Styles";
import SettingsItem from "./SettingsItem";
import { SafeAreaView } from "react-native-safe-area-context";

export default function Settings() {
  const [styles] = useStyles();
  const { colors } = useTheme();
  const { setTheme, theme } = React.useContext(ThemeContext);
  const { setLang, lang } = React.useContext(LangContext);

  const handleTheme = () => [
    setTheme(theme === "light" ? "dark" : "light"),
    setStatusBarStyle(theme === "light" ? "light" : "dark"),
    AsyncStorage.setItem(
      "theme",
      theme === "light" ? "dark" : "light"
    ),
  ]
  const handleLang = () => [
    (i.locale = i.locale == "en" ? "pt" : "en"),
    AsyncStorage.setItem("lang", i.locale),
    setLang(i.locale == "en" ? "pt" : "en"),
  ]

  let settingsData = [
    {
      text: i.t("switchTheme"),
      value: theme,
      type: "theme",
      action: handleTheme,
      icon: null
    },
    {
      text: i.t("switchLang"),
      value: lang,
      type: "button",
      action: handleLang,
      icon: "language"
    }
  ]

  return (
    <SafeAreaView style={{flex: 1}}>
      <View style={styles.container}>
        <Text style={styles.h1}>{i.t("settings")}</Text>
        <FlatList style={{ width: "100%" }}
          data={settingsData}
          renderItem={({ item }) => <SettingsItem item={item}></SettingsItem>}
        />
      </View>
    </SafeAreaView>
  );
}
