import { useStyles } from "./Styles";
import { useTheme } from "@react-navigation/native";
import { Text, View, Button } from "react-native";
import FontAwesome from "@expo/vector-icons/FontAwesome";
import { LangContext } from "./lang/langSetup";
import React from "react";

export default function SettingsItem(props) {
    const [styles] = useStyles();
    const { colors } = useTheme();
 


    let subItem = undefined;
    switch (props.item.type) {
        case "theme":
            subItem = (<FontAwesome.Button
                onPress={props.item.action}
                name={props.item.value === "light" ? "moon-o" : "sun-o"}
                iconStyle={{ marginRight: 0 }}
                color={colors.onPrimary}
                backgroundColor={colors.primary}
            ></FontAwesome.Button>)
            break;
        case "button":
            subItem = (<FontAwesome.Button
                onPress={props.item.action}
                name={props.item.icon}
                iconStyle={{ marginRight: 0 }}
                color={colors.onPrimary}
                backgroundColor={colors.primary}
            ></FontAwesome.Button>)
            break;
        default:
            break;
    }

    return (
        <View style={{
            flexDirection: "row",
            justifyContent: "space-between",
            borderBottomColor: "#cccccc55",
            borderBottomWidth: 1,
            padding: 10,
            alignItems: "center"
        }}>
            <Text style={styles.text}>{props.item.text}</Text>
            {subItem}
        </View>
    )
}