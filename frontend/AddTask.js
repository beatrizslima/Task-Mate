import React from "react";
import { i } from "./lang/langSetup";
import { useStyles } from "./Styles";
import { LangContext } from "./lang/langSetup";
import Backvenn from "./BackvennSvg";
import { View, Text } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { TextInput } from "react-native-paper";
import { useTheme } from "react-native-paper";

export default function AddTask() {
    React.useContext(LangContext)
    const { colors } = useTheme();
    const [styles] = useStyles();
    const [text, setText] = React.useState("");

    return (
        <View style={styles.container}>
            <View style={{ position: "absolute", top: -150, right: -135 }}>
                <Backvenn width={400} />
            </View>
            <SafeAreaView>
                <Text style={{ ...styles.h1, marginTop: 100, marginBottom: 60 }}>{i.t("createNew")}</Text>
                <TextInput label={i.t("labelTaskName")} value={text} onChangeText={text => setText(text)} mode= 'outlined' cursorColor= {colors.secondary}/>
            </SafeAreaView>
        </View>

    )
}