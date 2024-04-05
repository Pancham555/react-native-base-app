import React, { useEffect, useState } from "react";
import { Dimensions, StyleSheet, TextInput, View } from "react-native";
import { Icon, createTheme } from "@rneui/themed";
import Popup, { PopUpItem } from "../popUp";
import { Keyboard } from "react-native";
const theme = createTheme();
const SearchBar = ({
  state,
  setState,
  onSubmitEditing,
  placeholder = "Where do you want to work?",
}) => {
  const handleRemoveSpaces = (e) => {
    const trimmedText = e.replace(/^\s+/, "");
    setState(trimmedText);
  };
  const [openPopUp, setOpenPopUp] = useState(false);
  useEffect(() => {
    const listen = Keyboard.addListener("keyboardDidShow", () => {
      setOpenPopUp(false);
    });
    return () => listen.remove();
  }, []);
  return (
    <>
      <Popup mode={openPopUp}>
        <PopUpItem>New Item</PopUpItem>
        <PopUpItem>New Item -2</PopUpItem>
      </Popup>
      <View style={styles.inputHolder}>
        <View
          style={{
            flexDirection: "row",
            justifyContent: "center",
            alignItems: "center",
            gap: 5,
          }}
        >
          <Icon
            name="magnifying-glass"
            type="entypo"
            size={26}
            color={theme.lightColors.grey3}
          />
          <TextInput
            style={styles.input}
            placeholder={placeholder}
            value={state}
            onChangeText={(e) => handleRemoveSpaces(e)}
            onSubmitEditing={onSubmitEditing}
          />
        </View>
        {state.trim().length > 0 ? (
          <Icon
            name="cross"
            type="entypo"
            size={26}
            color={theme.lightColors.grey3}
            containerStyle={styles.icon}
            onPress={() => setState("")}
          />
        ) : (
          <Icon
            type="material-community"
            name="tune"
            size={26}
            color={theme.lightColors.grey3}
            containerStyle={styles.icon}
            onPress={() => setOpenPopUp(!openPopUp)}
          />
        )}
      </View>
    </>
  );
};
const styles = StyleSheet.create({
  inputHolder: {
    marginTop: 10,
    marginBottom: 15,
    paddingVertical: 14,
    paddingHorizontal: 10,
    flexDirection: "row",
    borderWidth: 0.5,
    borderRadius: 30,
    borderColor: theme.lightColors.grey5,
    justifyContent: "space-between",
    alignItems: "center",
    backgroundColor: theme.lightColors.grey5,
  },
  input: {
    width: Dimensions.get("screen").width - 24 * 4.5,
    fontSize: 16,
    fontFamily: "outfit-medium",
    color: theme.lightColors.grey2,
  },
  icon: {
    borderRadius: 5,
  },
});
export default SearchBar;
