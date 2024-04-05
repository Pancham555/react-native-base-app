import { Button, Icon } from "@rneui/themed";
import React from "react";
import {
  StyleSheet,
  View,
  Pressable,
  Image,
  StatusBar,
  Text,
  ScrollView,
} from "react-native";
import { colors } from "../../constants/themes";
import { useNavigation } from "@react-navigation/native";
const Profile = () => {
  const navigation = useNavigation();
  return (
    <ScrollView style={styles.container}>
      {/* <Pressable style={styles.back} onPress={() => navigation.goBack()}>
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
      </Pressable> */}
      {/* <Pressable style={styles.dots}>
        <Icon
          type="entypo"
          size={24}
          name="dots-three-vertical"
          color={colors["theme-2"]}
        />
      </Pressable> */}
      <View style={styles.imgbox}>
        <Image
          source={{
            uri: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=870&q=80",
          }}
          style={styles.image}
        />
      </View>
      <View style={{ paddingHorizontal: 10, paddingBottom: 10 }}>
        <View style={{ paddingVertical: 10 }}>
          <Text style={styles.name}>Jacob James</Text>
          <Text style={styles.job}>Health Specialist</Text>
        </View>
        {/* <View style={{ paddingVertical: 10 }}>
          <Text style={{ fontFamily: "outfit-semibold", fontSize: 24 }}>
            About
          </Text>
          <Text
            style={{
              fontFamily: "outfit",
              fontSize: 16,
              color: colors.inactive,
            }}
          >
            Elit ut anim do excepteur officia occaecat mollit elit elit amet
            dolor in consectetur labore. Qui sunt duis Lorem elit cillum ut ut
            dolor cupidatat cillum culpa ullamco quis. Commodo commodo laborum
            ea excepteur consectetur culpa do eu dolor occaecat ut adipisicing
            irure. Eu esse qui magna veniam mollit in. Velit magna consequat
            aliqua sit proident magna aliquip voluptate ut reprehenderit quis
            occaecat magna ipsum.
          </Text>
        </View> */}
      </View>
    </ScrollView>
  );
};
const styles = StyleSheet.create({
  container: {
    width: "100%",
    height: "100%",
    backgroundColor: "white",
    position: "relative",
  },
  imgbox: {
    position: "relative",
  },
  image: {
    width: "100%",
    height: 420,
    // borderRadius: 10,
    zIndex: 0,
  },
  back: {
    position: "absolute",
    zIndex: 20,
    left: 10,
    top: StatusBar.currentHeight + 10,
    backgroundColor: "white",
    borderRadius: 10,
    justifyContent: "center",
    alignItems: "center",
    elevation: 1,
    overflow: "hidden",
  },
  dots: {
    position: "absolute",
    zIndex: 10,
    right: 10,
    top: StatusBar.currentHeight + 10,
    backgroundColor: "white",
    padding: 8,
    borderRadius: 10,
    justifyContent: "center",
    alignItems: "center",
    elevation: 1,
  },
  name: {
    fontFamily: "outfit-semibold",
    // textAlign: "center",
    fontSize: 28,
  },
  job: {
    fontFamily: "outfit-medium",
    // textAlign: "center",
    fontSize: 18,
    color: colors.inactive,
  },
});
export default Profile;
