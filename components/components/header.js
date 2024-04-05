import React, { useEffect, useState } from "react";
import { Keyboard, StyleSheet, Text, View } from "react-native";
import { colors } from "../../constants/themes";
import { Icon } from "@rneui/themed";
import Popup, { PopUpItem } from "./popUp";
const Header = () => {
  const [openPopUp, setOpenPopUp] = useState(false);
  useEffect(() => {
    const listen = Keyboard.addListener("keyboardDidShow", () => {
      setOpenPopUp(false);
    });
    return () => listen.remove();
  }, []);
  return (
    <>
      <View style={styles.container}>
        <Popup mode={openPopUp}>
          <PopUpItem>New Item</PopUpItem>
          <PopUpItem>New Item -2</PopUpItem>
        </Popup>
        <Text style={styles.text}>12 places found</Text>
        <View style={styles.topItemsHolder}>
          <View style={styles.badge}>
            <Text style={styles.badgeText}>2</Text>
          </View>
          <Icon
            type="material-community"
            name="tune"
            color={colors["theme-2"]}
            size={32}
            onPress={() => setOpenPopUp(!openPopUp)}
          />
        </View>
      </View>
    </>
  );
};
const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 10,
    paddingVertical: 20,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    zIndex: 20,
    position: "relative",
  },
  topItemsHolder: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },
  text: {
    fontFamily: "outfit-medium",
    fontSize: 22,
  },
  badge: {
    backgroundColor: colors["theme-2"],
    borderRadius: 50,
    width: 30,
    height: 30,
    justifyContent: "center",
    alignItems: "center",
    marginRight: 15,
  },
  badgeText: { fontFamily: "outfit-medium", color: "white" },
});
export default Header;
