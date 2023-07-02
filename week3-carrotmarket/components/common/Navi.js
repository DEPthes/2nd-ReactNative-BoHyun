import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import React from "react";
import { StyleSheet, View, Text, Image } from "react-native";
import Icon from "react-native-vector-icons/MaterialIcons";
import App from "../../App";
import Location from "../Location";
import Chat from "../Chat";
import MyPlace from "../MyPlace";
import Life from "../Life";
import Home from "../Home";

const Tab = createBottomTabNavigator();

const Navi = () => {
  return (
    <Tab.Navigator
      screenOptions={{ headerShown: false, tabBarStyle: styles.tabBarStyle }}
      initialRouteName="홈"
    >
      <Tab.Screen
        name="홈"
        component={Home}
        options={{
          title: "홈",
          tabBarIcon: ({ color, size }) => (
            <Icon name="home" color={color} size={size} />
          ),
        }}
      />
      <Tab.Screen
        name="동네생활"
        component={Life}
        options={{
          title: "Screen",
          tabBarIcon: ({ color, size }) => (
            <Icon name="notifications" color={color} size={size} />
          ),
        }}
      />
      <Tab.Screen
        name="내 근처"
        component={Location}
        options={{
          title: "내 근처",
          tabBarIcon: ({ color, size }) => (
            <Icon name="search" color={color} size={size} />
          ),
        }}
      />
      <Tab.Screen
        name="채팅"
        component={Chat}
        options={{
          title: "채팅",
          tabBarIcon: ({ color, size }) => (
            <Icon name="message" color={color} size={size} />
          ),
        }}
      />
    </Tab.Navigator>
  );
};

export default Navi;

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    height: 80,
    justifyContent: "space-around",
  },

  // icon: {
  //   justifyContent: "center",
  //   alignItems: "center",
  // },

  // iconImg: {
  //   width: 20,
  //   height: 20,
  //   marginBottom: 10,
  // },

  // iconText: {
  //   color: "white",
  //   fontSize: 10,
  // },
});
