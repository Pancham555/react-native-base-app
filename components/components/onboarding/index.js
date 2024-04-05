import React, { useRef, useState } from "react";
import { Animated, FlatList, StyleSheet, View } from "react-native";
import OnBoardingItem from "./onboardingItem";
import Paginator from "./paginator";
import NextButton from "./nextButton";
import data from "./data";
import { useNavigation } from "@react-navigation/native";
const OnBoarding = () => {
  const navigation = useNavigation();
  const [currentIndex, setCurrentIndex] = useState(0);
  const scrollX = useRef(new Animated.Value(0)).current;

  const slidesRef = useRef(null);

  const onViewableItemsChanges = useRef(({ viewableItems }) => {
    setCurrentIndex(viewableItems[0].index);
  }).current;

  const viewConfig = useRef({ viewAreaCoveragePercentThreshold: 50 }).current;

  const scrollTo = () => {
    if (currentIndex < data.length - 1) {
      slidesRef.current.scrollToIndex({ index: currentIndex + 1 });
    } else {
      navigation.navigate("Login");
    }
  };
  return (
    <View style={styles.container}>
      <FlatList
        data={data}
        renderItem={({ item }) => <OnBoardingItem {...item} />}
        horizontal
        showsHorizontalScrollIndicator={false}
        bounces={false}
        pagingEnabled
        keyExtractor={(item) => item.id}
        onScroll={Animated.event(
          [
            {
              nativeEvent: {
                contentOffset: {
                  x: scrollX,
                },
              },
            },
          ],
          { useNativeDriver: false }
        )}
        onViewableItemsChanged={onViewableItemsChanges}
        viewabilityConfig={viewConfig}
        ref={slidesRef}
      />
      <Paginator data={data} scrollX={scrollX} />
      <NextButton
        scrollTo={scrollTo}
        percentage={(currentIndex + 1) * (100 / data.length)}
      />
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    width: "100%",
    height: "100%",
    backgroundColor: "white",
    paddingBottom: 15,
    // paddingHorizontal: 10,
  },
});
export default OnBoarding;
