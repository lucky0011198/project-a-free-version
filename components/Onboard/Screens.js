import React, { Component } from "react";
import {
  StyleSheet, // CSS-like styles
  Text, // Renders text
  View,
  Image, // Container component
} from "react-native";

import Swiper from "./Swiper";
import { Icon, Div } from "react-native-magnus";
import LottieView from "lottie-react-native";

export default class Screens extends Component {
  render(Props) {
    return (
      <Swiper style={{ backgroundColor: "white" }} data={this.props.data}>
        {/* First screen */}
        <View style={[styles.slide, { backgroundColor: "transperent" }]}>
          {/* <Icon name="ios-nutrition" {...iconStyles} /> */}
          <Div w={"100%"} h={"50%"}>
            <LottieView
              source={require("../../assets/animations/72342-welcome.json")}
              autoPlay={true}
              loop={false}
            />
          </Div>

          <Text style={styles.header}>welcome</Text>
          <Text style={styles.text}>
            Good nutrition is an important part of leading a healthy lifestyle
          </Text>
        </View>
        {/* Second screen */}
        <View style={[styles.slide, { backgroundColor: "transperent" }]}>
          <Div w={"100%"} h={"50%"}>
            <LottieView
              source={require("../../assets/animations/42404-add-document.json")}
              autoPlay={true}
              loop={false}
            />
          </Div>
          <Text style={styles.header}>Add Attendance</Text>
          <Text style={styles.text}>
            Prayer is one of the most important things a Christian can do
          </Text>
        </View>
        {/* Third screen */}
        <View style={[styles.slide, { backgroundColor: "transperent" }]}>
          <Div w={"100%"} h={"50%"}>
            <LottieView
              source={require("../../assets/animations/24120-offline.json")}
              autoPlay={true}
              loop={false}
            />
          </Div>
          <Text style={styles.header}>offline use</Text>
          <Text style={styles.text}>we can this app as offline</Text>
        </View>
        <View style={[styles.slide, { backgroundColor: "transperent" }]}>
          <Div w={"100%"} h={"50%"}>
            <LottieView
              source={require("../../assets/animations/25923-download-arrow.json")}
              autoPlay={true}
              loop={false}
            />
          </Div>
          <Text style={styles.header}>download data</Text>
          <Text style={styles.text}>Where there is love there is life</Text>
        </View>
        <View style={[styles.slide, { backgroundColor: "transperent" }]}>
          <Div w={"100%"} h={"50%"}>
            <LottieView
              source={require("../../assets/animations/start.json")}
              autoPlay={true}
              loop={false}
            />
          </Div>
          <Text style={styles.header}>get start</Text>
          <Text style={styles.text}>Where there is love there is life</Text>
        </View>
      </Swiper>
    );
  }
}

const iconStyles = {
  size: 100,
  color: "#FFFFFF",
};

const styles = StyleSheet.create({
  // Slide styles
  slide: {
    flex: 1, // Take up all screen
    justifyContent: "center", // Center vertically
    alignItems: "center", // Center horizontally
  },
  // Header styles
  header: {
    color: "black",
    fontSize: 30,
    fontWeight: "bold",
    marginVertical: 15,
  },
  // Text below header
  text: {
    color: "#4a5568",
    fontSize: 18,
    marginHorizontal: 40,
    textAlign: "center",
  },
});
