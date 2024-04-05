import { Icon, Text } from "@rneui/themed";
import React from "react";
import { Dimensions, Image, Pressable, StyleSheet, View } from "react-native";
import { colors } from "../../constants/themes";
import { useNavigation } from "@react-navigation/native";
const DEVICE_DIMENTION = Dimensions.get("screen");
const Card = () => {
  const navigation = useNavigation();
  return (
    <Pressable
      style={styles.container}
      onPress={() => navigation.navigate("Item")}
    >
      <View style={styles.imgbox}>
        <Pressable style={styles.location}>
          <Icon
            type="ionicon"
            name="location-sharp"
            color={colors["theme-2"]}
            size={24}
          />
          <Text style={{ fontFamily: "outfit-semibold", marginLeft: 5 }}>
            1.5 km
          </Text>
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
            uri: "https://cdn.downtoearth.org.in/library/large/2018-07-04/0.97391100_1530680882_1.jpg",
          }}
          style={styles.image}
        />
      </View>
      <View style={styles.textBox}>
        <Text numberOfLines={1} style={styles.heading}>
          Roman Milk
        </Text>
        <Text style={styles.price}>
          <Text
            style={[
              styles.price,
              {
                color: colors["theme-2"],
                fontFamily: "outfit-bold",
              },
            ]}
          >
            $25
          </Text>{" "}
          / hour
        </Text>
      </View>
    </Pressable>
  );
};
const styles = StyleSheet.create({
  container: {
    width: DEVICE_DIMENTION.width,
    backgroundColor: "white",
    paddingHorizontal: 10,
    paddingBottom: 5,
  },
  image: {
    width: "100%",
    height: DEVICE_DIMENTION.width * 0.65,
    borderRadius: 10,
  },
  imgbox: {
    position: "relative",
  },
  location: {
    position: "absolute",
    zIndex: 10,
    left: 10,
    top: 10,
    backgroundColor: "white",
    padding: 8,
    borderRadius: 10,
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "row",
    elevation: 1,
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
  textBox: { padding: 5 },
  heading: {
    fontSize: 26,
    fontFamily: "outfit-medium",
  },
  price: {
    fontSize: 16,
    fontFamily: "outfit-medium",
    color: colors.inactive,
  },
});
export default Card;
