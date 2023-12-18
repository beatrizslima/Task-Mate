import React from "react";
import { Text, View } from "react-native";
import { i } from "./lang/langSetup";
import { useStyles } from "./Styles";
import { LangContext } from "./lang/langSetup";
import { SafeAreaView } from "react-native-safe-area-context";

export default function Home() {
  const [styles] = useStyles();
  React.useContext(LangContext)

  return (
    <SafeAreaView style={{flex: 1}}>
      <View style={styles.container}>
        <View style={styles.board}>
          <Text style={styles.h1}>{i.t("today")}</Text>
          <Text style={styles.subtitle}>{i.t("madeThis")}</Text>
        </View>
      </View>
    </SafeAreaView>
  );
}

