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
          <Div w={"100%"} h={"30%"}>
            <LottieView
              source={require("../../assets/animations/72342-welcome.json")}
              autoPlay={true}
              loop={false}
            />
          </Div>

          <Text style={styles.header}>welcome</Text>
          <Text style={styles.text}>
            just getting started? Let's take a look at some great features of
            this app :)
          </Text>
        </View>
        {/* Second screen */}
        <View style={[styles.slide, { backgroundColor: "transperent" }]}>
          <Div w={"100%"} h={"30%"}>
            <LottieView
              source={require("../../assets/animations/42404-add-document.json")}
              autoPlay={true}
              loop={false}
            />
          </Div>
          <Text style={styles.header}>Add Attendance</Text>
          <Text style={styles.text}>
            create attendance with amezing ul design and save it to your device
          </Text>
        </View>
        {/* Third screen */}
        <View style={[styles.slide, { backgroundColor: "transperent" }]}>
          <Div w={"100%"} h={"30%"}>
            <LottieView
              source={require("../../assets/animations/24120-offline.json")}
              autoPlay={true}
              loop={false}
            />
          </Div>
          <Text style={styles.header}>offline use</Text>
          <Text style={styles.text}>
            This app dose not require internet service{" "}
          </Text>
        </View>
        <View style={[styles.slide, { backgroundColor: "transperent" }]}>
          <Div w={"100%"} h={"30%"}>
            <LottieView
              source={require("../../assets/animations/25923-download-arrow.json")}
              autoPlay={true}
              loop={false}
            />
          </Div>
          <Text style={styles.header}>Download data</Text>
          <Text style={styles.text}>
            created attendance can download in your device in csv file format
          </Text>
        </View>
        <View style={[styles.slide, { backgroundColor: "transperent" }]}>
          <Div w={"100%"} h={"30%"}>
            <LottieView
              source={require("../../assets/animations/start.json")}
              autoPlay={true}
              loop={false}
            />
          </Div>
          <Text style={styles.header}>Get start</Text>
          <Text style={styles.text}>
            ready to explore great features of this app ..
          </Text>
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
