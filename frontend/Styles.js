import { StyleSheet, Text, View } from "react-native";
import { useTheme } from "@react-navigation/native";

export const useStyles = () => {
    const { colors } = useTheme();
    const styles = StyleSheet.create({
        container: {
            flex: 1,
            backgroundColor: colors.background,
            padding: 20
          },
          subtitle: {
            padding: 1,
            alignSelf: "center",
            borderRadius: 4,
            color: colors.subtitle,
            fontWeight: "bold",
          },
          board: {
            alignItems: "center",
            borderRadius: 6,
            borderWidth: 5,
            padding: 30,
            borderColor: colors.primary,
          },
          h1: {
            fontSize: 36,
            fontWeight: "bold",
            color: colors.title, 
          },
          h2: {
            fontSize: 24,
            fontWeight: "bold",
            color: colors.title,
          },
          text: {
            fontSize: 18,
            color: colors.text
          }
    });
    return [styles]
} 