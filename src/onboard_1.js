import { StatusBar } from "expo-status-bar";
import { React, useState } from "react";
import { Image, View, Text, Pressable, TouchableOpacity } from "react-native";
import styles from "../component/style";
import LottieView from 'lottie-react-native';
export default function Page1({ navigation }) {
  // const [myText, setMyText] = useState("GET START");
  const navigator = (navigation) => {
    navigation.navigate("Onboard-2");
    // if (myText=='GET START'){ setMyText('clicked')}
    // else setMyText('GET START')
    // setMyText('NEXT')
  };
  return (
    <View style={styles.container}>
      <StatusBar style="auto" />
      <LottieView source={require('./../assets/welcome.json')} autoPlay loop speed={0.5}  style={styles.banner} />
      <View style={styles.title_wrap}>
        <Text style={styles.headerTitle}>WELCOME TO PACEPAL</Text>
        <Text style={styles.subTitle}>Suggest runners within a 1km radius around you</Text>
      </View>
      <TouchableOpacity
        activeOpacity={0.5}
        onPress={() => navigator(navigation)}
        style={styles.btn_orange}
      >
        <Text style={styles.textInbutton}>GET START</Text>
      </TouchableOpacity>
    </View>
  );
}
