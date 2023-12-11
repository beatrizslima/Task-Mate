import { StatusBar, setStatusBarStyle } from "expo-status-bar";
import React from "react";
import { StyleSheet, Text, View, Button } from "react-native";
import { getTheme } from "./Colors";
import { useTheme } from "@react-navigation/native";
import { ThemeContext } from "./ThemeContext";
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import { faLightbulb as darkBulb } from "@fortawesome/free-solid-svg-icons";
import { faLightbulb as lightBulb } from "@fortawesome/free-regular-svg-icons";
import FontAwesome from "@expo/vector-icons/FontAwesome";
import { i, LangContext } from "./lang/langSetup";
import en from "./lang/en";
import AsyncStorage from "@react-native-async-storage/async-storage";

export default function Settings() {
  const { colors } = useTheme();
  const { setTheme, theme } = React.useContext(ThemeContext);
  const { setLang, lang } = React.useContext(LangContext);

  const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: colors.background,
      alignItems: "center",
      justifyContent: "center",
    },
    subtitle: {
      padding: 1,
      alignSelf: "center",
      borderRadius: 4,
      color: colors.subtitle,
      fontWeight: "bold",
    },
    taskBoard: {
      alignItems: "center",
      borderRadius: 6,
      borderWidth: 5,
      padding: 30,
      borderColor: colors.primary,
    },
    title: {
      fontSize: 18,
      fontWeight: "bold",
      color: colors.title,
    },
  });

  return (
    <View style={styles.container}>
      <View style={styles.taskBoard}>
        <Text style={styles.title}>{i.t("today")}</Text>
        <Text style={styles.subtitle}>{i.t("fckinMadeThis")}</Text>
        <FontAwesome.Button
          onPress={() => [
            setTheme(theme === "light" ? "dark" : "light"),
            setStatusBarStyle(theme === "light" ? "light" : "dark"),
            AsyncStorage.setItem(
              "theme",
              theme === "light" ? "dark" : "light"
            ).then((x) => console.log("saved")),
          ]}
          name={theme === "light" ? "moon-o" : "sun-o"}
          iconStyle={{ marginRight: 0 }}
          color={colors.onPrimary}
          backgroundColor={colors.primary}
        ></FontAwesome.Button>

        <FontAwesome.Button
          onPress={() => [
            (i.locale = i.locale == "en" ? "pt" : "en"),
            setLang(i.locale),
            AsyncStorage.setItem("lang", i.locale).then((x) =>
              console.log("saved")
            ),
          ]}
          name="language"
          iconStyle={{ marginRight: 0 }}
          color={colors.onPrimary}
          backgroundColor={colors.primary}
        ></FontAwesome.Button>
      </View>
    </View>
  );
}
