import React from "react";
import { StatusBar, View } from "react-native";
import Onboarding from "../components/onboarding";
import { StyleSheet } from "react-native";
const OnBoardingPage = () => {
  return (
    <View style={styles.container}>
      <Onboarding />
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    paddingTop: StatusBar.currentHeight,
    backgroundColor: "white",
  },
});
export default OnBoardingPage;
