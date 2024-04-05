import React from "react";
import { StyleSheet, Text, View, useWindowDimensions } from "react-native";
import { colors } from "../../../constants/themes";
import CardSvg from "../svg/cardSvg";
const OnBoardingItem = ({
  title = "Aliqua aliqua amet do ut dolore labore.",
  desc = ` Fugiat cillum duis anim laborum eiusmod minim cupidatat. Duis proident
          veniam sit culpa in adipisicing cupidatat aliqua.sedggs`,
  Svg = CardSvg,
}) => {
  const { width } = useWindowDimensions();
  return (
    <View style={[styles.container, { width }]}>
      <Svg
        style={[
          styles.svg,
          {
            height: width * 0.8,
            width: "100%",
          },
        ]}
      />
      <View style={styles.textHolder}>
        <Text style={styles.title}>{title}</Text>
        <Text style={styles.desc}>{desc}</Text>
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    paddingHorizontal: 10,
    paddingTop: 10,
    backgroundColor: "white",
  },
  svg: {},
  textHolder: {
    paddingTop: 5,
  },
  title: {
    fontFamily: "outfit-semibold",
    fontSize: 26,
    marginBottom: 10,
    color: colors["theme-2"],
    textAlign: "center",
  },
  desc: {
    fontFamily: "outfit",
    fontSize: 18,
    fontWeight: "300",
    color: colors.inactive,
    paddingHorizontal: 45,
    textAlign: "center",
  },
});
export default OnBoardingItem;
