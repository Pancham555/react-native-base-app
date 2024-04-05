import React, { useEffect, useRef } from "react";
import { Animated, StyleSheet, TouchableOpacity, View } from "react-native";
import Svg, { G, Circle } from "react-native-svg";
import { Icon } from "@rneui/themed";
import { colors } from "../../../constants/themes";
const NextButton = ({ percentage, scrollTo }) => {
  const size = 120;
  const strokeWidth = 2;
  const center = size / 2;
  const radius = center - strokeWidth / 2;
  const circumference = 2 * Math.PI * radius;

  const progressAnimation = useRef(new Animated.Value(0)).current;
  const progressRef = useRef(null);
  const animation = (toValue) => {
    return Animated.timing(progressAnimation, {
      toValue,
      duration: 200,
      useNativeDriver: true,
    }).start();
  };

  useEffect(() => {
    animation(percentage);
  }, [percentage]);

  useEffect(() => {
    progressAnimation.addListener(
      (value) => {
        const strokeDashoffset =
          circumference - (circumference * value.value) / 100;
        if (progressRef?.current) {
          progressRef.current.setNativeProps({ strokeDashoffset });
        }
      },
      [percentage]
    );
    return () => {
      progressAnimation.removeAllListeners();
    };
  }, []);
  return (
    <View style={styles.container}>
      <Svg width={size} height={size} fill="white">
        <G rotation="-90" origin={center}>
          <Circle
            stroke="#e6e7e8"
            cx={center}
            cy={center}
            r={radius}
            strokeWidth={strokeWidth}
          />
          <Circle
            ref={progressRef}
            stroke={colors["theme-2"]}
            cx={center}
            cy={center}
            r={radius}
            strokeWidth={strokeWidth}
            strokeDasharray={circumference}
          />
        </G>
      </Svg>
      <TouchableOpacity
        onPress={scrollTo}
        activeOpacity={0.6}
        style={styles.button}
      >
        <Icon name="arrowright" type="ant-design" size={40} color="#fff" />
      </TouchableOpacity>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "white",
  },
  button: {
    position: "absolute",
    backgroundColor: colors["theme-2"],
    borderRadius: 100,
    padding: 20,
  },
});

export default NextButton;
