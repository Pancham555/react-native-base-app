import { Icon } from "@rneui/themed";
import React from "react";
import { StyleSheet } from "react-native";
import { Text, View } from "react-native";
import { colors } from "../../constants/themes";

const LocationHeader = () => {
  return (
    <>
      <Text style={[styles.locationText, { paddingTop: 60, fontSize: 30 }]}>
        Welcome back, user
      </Text>
      <View style={styles.container}>
        <Icon
          type="ionicon"
          name="location-sharp"
          color={colors["theme-2"]}
          size={30}
        />
        <Text style={styles.locationText}>Delhi, India</Text>
      </View>
    </>
  );
};
const styles = StyleSheet.create({
  container: {
    backgroundColor: "white",
    padding: 8,
    alignItems: "center",
    flexDirection: "row",
  },
  locationText: {
    fontFamily: "outfit-medium",
    marginLeft: 5,
    fontSize: 26,
    width: "100%",
  },
});
export default LocationHeader;
