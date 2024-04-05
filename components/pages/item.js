import { Button, Icon } from "@rneui/themed";
import React from "react";
import {
  Image,
  View,
  Text,
  Pressable,
  StyleSheet,
  StatusBar,
  Dimensions,
  ScrollView,
} from "react-native";
import { colors } from "../../constants/themes";
import { useNavigation } from "@react-navigation/native";
import Tag from "../components/tag";
const Item = () => {
  const navigation = useNavigation();
  const DEVICE_DIMENTION = Dimensions.get("screen");
  return (
    <View style={styles.container}>
      <View>
        <View style={styles.imgbox}>
          <Pressable style={styles.back} onPress={() => navigation.goBack()}>
            <Pressable
              style={{ padding: 8, width: 40 }}
              android_ripple={{ borderless: false }}
              onPress={() => navigation.goBack()}
            >
              <Icon
                type="octicon"
                name="arrow-left"
                color={colors["theme-2"]}
                size={24}
              />
            </Pressable>
          </Pressable>
          <Pressable style={styles.heart}>
            <Icon
              type="ant-design"
              size={24}
              name="heart"
              color={colors["theme-2"]}
            />
          </Pressable>
          <Image
            source={{
              uri: "https://www.home-designing.com/wp-content/uploads/2018/10/living-room-and-dining-room-with-globe-pendants.jpg",
            }}
            style={styles.image}
          />
        </View>
        <View style={styles.textBox}>
          <Text numberOfLines={1} style={styles.heading}>
            Roman Milk
          </Text>
          <View style={styles.location}>
            <View style={{ flexDirection: "row" }}>
              <Icon
                type="ionicon"
                name="location-sharp"
                color={colors["theme-2"]}
                size={24}
              />
              <Text
                numberOfLines={1}
                style={[
                  styles.locationText,
                  { maxWidth: DEVICE_DIMENTION.width * 0.75 },
                ]}
              >
                Indian islands of kuril land, andaman Indian islands of kuril
                land, andaman
              </Text>
            </View>
            <Text style={[styles.locationText, { color: colors.inactive }]}>
              1.5 km
            </Text>
          </View>
        </View>
        <ScrollView
          horizontal
          showsHorizontalScrollIndicator={false}
          contentContainerStyle={{ paddingVertical: 10 }}
        >
          <Tag />
          <Tag />
          <Tag />
        </ScrollView>
      </View>
      <Button
        size="lg"
        color={colors["theme-2"]}
        containerStyle={{
          borderRadius: 5,
        }}
      >
        Rent for $40.00/hour
      </Button>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    width: "100%",
    height: "100%",
    backgroundColor: "white",
    paddingTop: StatusBar.currentHeight,
    paddingHorizontal: 10,
    paddingBottom: 10,
    justifyContent: "space-between",
  },
  imgbox: {
    position: "relative",
  },
  image: {
    width: "100%",
    height: 300,
    borderRadius: 10,
    zIndex: 0,
  },
  back: {
    position: "absolute",
    zIndex: 20,
    left: 10,
    top: 10,
    backgroundColor: "white",
    borderRadius: 10,
    justifyContent: "center",
    alignItems: "center",
    elevation: 1,
    overflow: "hidden",
  },
  heart: {
    position: "absolute",
    zIndex: 10,
    right: 10,
    top: 10,
    backgroundColor: "white",
    padding: 8,
    borderRadius: 10,
    justifyContent: "center",
    alignItems: "center",
    elevation: 1,
  },
  textBox: { paddingVertical: 5, marginTop: 10 },
  heading: {
    fontSize: 26,
    fontFamily: "outfit-semibold",
  },
  location: {
    backgroundColor: "white",
    borderRadius: 10,
    alignItems: "center",
    flexDirection: "row",
    justifyContent: "space-between",
  },
  locationText: { fontFamily: "outfit-medium", fontSize: 16 },
});
export default Item;
