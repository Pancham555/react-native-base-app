import {
  View,
  Dimensions,
  StyleSheet,
  StatusBar,
  ScrollView,
  Text,
} from "react-native";
import { colors } from "../../constants/themes";
import Svg from "../components/svg/cardSvg";
import { Button } from "@rneui/themed";
import { useNavigation } from "@react-navigation/native";
import { Input } from "@rneui/base";
const DEVICE_DIMENTION = Dimensions.get("screen");
const Login = () => {
  const navigation = useNavigation();
  return (
    <ScrollView style={styles.container}>
      {/* <Text style={styles.heading}>Get Started!</Text> */}
      <View style={{ alignItems: "center" }}>
        <Svg style={styles.svg} />
        <Text style={[styles.text, { fontFamily: "outfit-semibold" }]}>
          Shop App
        </Text>
      </View>
      <View style={styles.inputHolder}>
        <Text style={styles.text}>Please Login!</Text>
        <Input
          placeholder="Email"
          style={styles.input}
          leftIcon={{
            type: "fontisto",
            name: "email",
            color: colors.inactive,
            size: 24,
          }}
        />
        <Input
          textContentType="newPassword"
          dataDetectorTypes={["none"]}
          placeholder="Password"
          style={[styles.input, { borderTopWidth: 0 }]}
          leftIcon={{
            type: "fontisto",
            name: "locked",
            color: colors.inactive,
            size: 24,
          }}
        />
      </View>
      <Button
        onPress={() => navigation.navigate("Index")}
        size="lg"
        containerStyle={styles.button}
        color={colors["theme-2"]}
        titleStyle={{ fontFamily: "outfit-medium", fontSize: 18 }}
      >
        Log in
      </Button>
    </ScrollView>
  );
};
const styles = StyleSheet.create({
  container: {
    width: "100%",
    height: "100%",
    backgroundColor: "white",
    paddingHorizontal: 10,
    paddingTop: StatusBar.currentHeight,
    paddingBottom: 10,
  },
  heading: {
    fontSize: 32,
    fontFamily: "outfit-semibold",
    marginVertical: DEVICE_DIMENTION.width * 0.08,
    color: colors["theme-2"],
  },
  svg: {
    width: "70%",
    height: DEVICE_DIMENTION.width * 0.7,
  },
  text: {
    fontFamily: "outfit-medium",
    fontSize: 24,
    color: colors["theme-2"],
  },
  inputHolder: {
    marginBottom: 0,
    marginTop: 28,
  },
  input: {
    paddingHorizontal: 5,
    borderRadius: 2,
    fontFamily: "outfit-medium",
    fontSize: 18,
  },
  button: {
    borderRadius: 2,
    marginBottom: 36,
  },
});
export default Login;
