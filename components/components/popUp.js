import React, { useEffect, useRef } from "react";
import { StyleSheet, Animated, Text, TouchableOpacity } from "react-native";
const Popup = ({ mode, children }) => {
  const anim = useRef(new Animated.Value(0)).current;
  //   const dispatch = useDispatch();
  const Open = () => {
    Animated.timing(anim, {
      toValue: 1,
      duration: 100,
      useNativeDriver: true,
    }).start();
  };

  const Close = () => {
    Animated.timing(anim, {
      toValue: 0,
      duration: 100,
      useNativeDriver: true,
    }).start();
  };

  useEffect(() => {
    mode ? Open() : Close();
  }, [mode]);
  return (
    <Animated.View
      style={[
        styles.container,
        {
          transform: [
            {
              translateX: anim.interpolate({
                inputRange: [0, 1],
                outputRange: [100, 1],
              }),
            },
            {
              translateY: anim.interpolate({
                inputRange: [0, 1],
                outputRange: [-100, 1],
              }),
            },
            {
              scaleX: anim.interpolate({
                inputRange: [0, 1],
                outputRange: [0, 1],
              }),
            },
            {
              scaleY: anim.interpolate({
                inputRange: [0, 1],
                outputRange: [0, 1],
              }),
            },
          ],
          zIndex: anim.interpolate({
            inputRange: [0, 1],
            outputRange: [-10, 100],
          }),
        },
      ]}
    >
      {children}
    </Animated.View>
  );
};
const styles = StyleSheet.create({
  container: {
    backgroundColor: "#ffffff",
    elevation: 10,
    paddingHorizontal: 5,
    paddingVertical: 10,
    position: "absolute",
    top: 12,
    right: 20,
    width: 180,
    marginTop: 60,
    zIndex: 1000,
    borderRadius: 5,
  },
  textBox: {
    paddingVertical: 3,
    paddingHorizontal: 5,
    width: "100%",
  },
  text: {
    fontSize: 16.5,
    fontWeight: "400",
    paddingVertical: 5,
    fontFamily: "outfit",
  },
});
export default Popup;

export const PopUpItem = ({ children, onPress }) => {
  return (
    <TouchableOpacity
      style={styles.textBox}
      activeOpacity={0.5}
      onPress={onPress}
    >
      <Text style={styles.text}>{children}</Text>
    </TouchableOpacity>
  );
};
