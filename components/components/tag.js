import React from "react";
import { StyleSheet } from "react-native";
import { Text } from "react-native";
import { colors } from "../../constants/themes";

const Tag = () => {
  return <Text style={styles.container}>Rent</Text>;
};
const styles = StyleSheet.create({
  container: {
    fontFamily: "outfit-medium",
    color: "white",
    backgroundColor: colors["theme-2"],
    width: 100,
    paddingHorizontal: 10,
    paddingVertical: 8,
    borderRadius: 10,
    textAlign: "center",
    fontSize: 16,
    marginHorizontal: 6,
  },
});
export default Tag;
