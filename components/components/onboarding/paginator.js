import React from "react";
import { Animated, StyleSheet, View, useWindowDimensions } from "react-native";
import { colors } from "../../../constants/themes";
const Paginator = ({ data, scrollX }) => {
  const { width } = useWindowDimensions();
  return (
    <View
      style={{
        flexDirection: "row",
        height: 64,
        width: "100%",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      {data.map((_, i) => {
        const inputRange = [(i - 1) * width, i * width, (i + 1) * width];
        const dotWidth = scrollX.interpolate({
          inputRange,
          outputRange: [10, 20, 10],
          extrapolate: "clamp",
        });
        const opacity = scrollX.interpolate({
          inputRange,
          outputRange: [0.3, 1, 0.3],
          extrapolate: "clamp",
        });
        return (
          <Animated.View
            key={i}
            style={[
              styles.dot,
              {
                width: dotWidth,
                opacity,
              },
            ]}
          />
        );
      })}
    </View>
  );
};
const styles = StyleSheet.create({
  dot: {
    backgroundColor: colors["theme-2"],
    height: 10,
    borderRadius: 5,
    marginHorizontal: 8,
  },
});
export default Paginator;
