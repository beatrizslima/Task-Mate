import { StatusBar } from "expo-status-bar";
import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { getTheme } from "./Colors";
import { useTheme } from "@react-navigation/native";
import { ThemeContext } from "./ThemeContext";
import { i } from "./lang/langSetup";



export default function Home() {

const { colors, dark } = useTheme();
const { theme } = React.useContext(ThemeContext);

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
    taskTitle: {
      fontSize: 18,
      fontWeight: "bold",
      color: colors.title,
    },
  });
  
  return (
    <View style={styles.container}>
      <View style={styles.taskBoard}>
        <Text style={styles.taskTitle}>{i.t("today")}</Text>
        <Text style={styles.subtitle}>{i.t("madeThis")}</Text>
      </View>
    </View>
  );
}

