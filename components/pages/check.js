import { useNavigation } from "@react-navigation/native";
import React, { useEffect } from "react";
import { View } from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";

const Check = () => {
  const navigation = useNavigation();
  const checkFirstTimeUser = async () => {
    try {
      const showIntro = await AsyncStorage.getItem("showIntro");
      if (showIntro === null) {
        // User is opening the app for the first time
        await AsyncStorage.setItem("showIntro", "true");
        return false;
      } else {
        // User has opened the app before
        return JSON.parse(await AsyncStorage.getItem("showIntro"));
      }
    } catch (error) {
      // Handle error here
      console.log(error);
    }
  };
  useEffect(() => {
    navigation.navigate("OnBoarding");
    // checkFirstTimeUser()
    //   .then((val) => {
    //     if (!val) {
    //       navigation.navigate("OnBoarding");
    //     } else {
    //       navigation.navigate("Login");
    //     }
    //   })
    //   .catch((err) => console.log(err));
  }, []);
  return <View></View>;
};

export default Check;
