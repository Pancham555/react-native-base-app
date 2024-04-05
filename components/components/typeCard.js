import React, { useState } from "react";
import { Dimensions, StyleSheet, TouchableOpacity } from "react-native";
import { colors } from "../../constants/themes";
import { Icon } from "@rneui/themed";
import { Text } from "react-native";

const DEVICE_DIMENTION = Dimensions.get("screen");
const TypeCard = ({
  name = "ios-home",
  type = "ionicon",
  title = "Private Office",
  selected = false,
  onPress,
}) => {
  return (
    <TouchableOpacity
      onPress={onPress}
      style={[styles.container, { opacity: selected ? 0.5 : 1 }]}
      activeOpacity={0.5}
    >
      <Icon name={name} type={type} size={40} color="white" />
      <Text style={styles.text} numberOfLines={1}>
        {title}
      </Text>
    </TouchableOpacity>
  );
};
const styles = StyleSheet.create({
  container: {
    borderRadius: 10,
    margin: DEVICE_DIMENTION.width * 0.028,
    width: DEVICE_DIMENTION.width * 0.44,
    height: 120,
    backgroundColor: colors["theme-2"],
    justifyContent: "center",
    alignItems: "center",
  },
  text: {
    fontFamily: "outfit-semibold",
    color: "white",
    marginTop: 10,
    fontSize: 14,
  },
});
export default TypeCard;
