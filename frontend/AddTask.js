import React from "react";
import { i } from "./lang/langSetup";
import { useStyles } from "./Styles";
import { LangContext } from "./lang/langSetup";
import Backvenn from "./BackvennSvg";
import { View, Text, Animated, Dimensions } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import {
  TextInput,
  SegmentedButtons,
  Button,
  IconButton,
} from "react-native-paper";
import { useTheme } from "react-native-paper";
import DateTimePicker from "@react-native-community/datetimepicker";
import { useFocusEffect, useBlurEffect } from "@react-navigation/native";

export default function AddTask(props) {
  React.useContext(LangContext);
  const { colors } = useTheme();
  const [styles] = useStyles();
  const [text, setTitle] = React.useState("");
  const [description, setDescription] = React.useState("");
  const [startDate, setStartDate] = React.useState();
  const [endDate, setEndDate] = React.useState();
  const [dateType, setDateType] = React.useState("");

  const drawerAnim = React.useRef(
    new Animated.Value(Dimensions.get("screen").height + 300)
  ).current;

  useFocusEffect(() => {
    Animated.timing(drawerAnim, {
      toValue: 0,
      duration: 300,
      useNativeDriver: true,
    }).start();
    return () => {
      Animated.timing(drawerAnim, {
        toValue: Dimensions.get("screen").height + 300,
        duration: 300,
        useNativeDriver: true,
      }).start();
    };
  });

  function back() {
    Animated.timing(drawerAnim, {
      toValue: Dimensions.get("screen").height + 300,
      duration: 300,
      useNativeDriver: true,
    }).start(() => props.navigation.navigate("Home"));
  }

  return (
    <Animated.View
      style={{
        flex: 1,
        zIndex: 11,
        transform: [{ perspective: 1000 }, { translateY: drawerAnim }],
      }}
    >
      <View style={styles.container}>
        <View style={{ position: "absolute", top: -180, right: -135 }}>
          <Backvenn width={400} />
        </View>
        <SafeAreaView>
          <IconButton
            icon="arrow-left"
            style={{ position: "absolute", left: -15, top: 30 }}
            onPress={back}
          />
          <Text style={{ ...styles.h1, marginTop: 100, marginBottom: 60 }}>
            {i.t("createNew")}
          </Text>
          <TextInput
            label={i.t("labelTaskName")}
            value={text}
            onChangeText={(text) => setTitle(text)}
            mode="outlined"
            cursorColor={colors.secondary}
            outlineColor={colors.outline}
            textColor={colors.onSurface}
          />
          <TextInput
            style={{ marginTop: 20 }}
            label={i.t("labelTaskDescription")}
            value={description}
            onChangeText={(description) => setDescription(description)}
            mode="outlined"
            cursorColor={colors.secondary}
            outlineColor={colors.outline}
            multiline={true}
            textColor={colors.onSurface}
          />
          <View style={{ flexDirection: "row", marginTop: 20 }}>
            <SegmentedButtons
              value={dateType}
              onValueChange={setDateType}
              style={{ flex: 1 }}
              buttons={[
                {
                  value: "start",
                  icon: "calendar",
                  label:
                    startDate?.toLocaleDateString() || i.t("startDateLabel"),
                  labelStyle: {
                    textTransform: "none",
                    fontSize: 15,
                    color: startDate ? colors.onSurface : colors.subtitle,
                  },
                  style: {
                    borderColor: colors.outline,
                    borderWidth: 1,
                  },
                },
                {
                  value: "end",
                  icon: "calendar",
                  label: endDate?.toLocaleDateString() || i.t("endDateLabel"),
                  labelStyle: {
                    textTransform: "none",
                    fontSize: 15,
                    color: endDate ? colors.onSurface : colors.subtitle,
                  },
                  style: {
                    borderColor: colors.outline,
                    borderWidth: 1,
                  },
                },
              ]}
            />
            <IconButton
              icon="close"
              onPress={() => {
                setStartDate(undefined);
                setEndDate(undefined);
              }}
              size={16}
              style={{
                borderWidth: 1,
                borderRadius: 4,
                height: "100%",
                marginTop: 0,
                marginRight: 0,
                borderColor: colors.outline,
              }}
            />
            {dateType == "start" && (
              <DateTimePicker
                value={startDate ?? new Date()}
                mode="date"
                display="spinner"
                onChange={(event, date) => {
                  setDateType("");
                  setStartDate(date);
                }}
                maximumDate={endDate}
              />
            )}
            {dateType == "end" && (
              <DateTimePicker
                value={endDate ?? new Date()}
                mode="date"
                display="spinner"
                onChange={(event, date) => {
                  setDateType("");
                  setEndDate(date);
                }}
                minimumDate={startDate}
              />
            )}
          </View>
        </SafeAreaView>
      </View>
    </Animated.View>
  );
}
