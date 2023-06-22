import React from "react";
import { useState } from "react";
import {
  Button,
  View,
  Text,
  Image,
  ScrollView,
  TextInput,
  TouchableOpacity,
} from "react-native";
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";

import { LinearGradient } from "expo-linear-gradient";
import { vw, vh, vmin, vmax } from "react-native-expo-viewport-units";

const array = [
  {
    id: 0,
    mytegory: "Flower",
    src: require("../image/test.svg"),
    text: "꽃선물",
  },
  {
    id: 1,
    mytegory: "Cloth",
    src: require("../image/test.svg"),
    text: "커플룩",
  },
  {
    id: 2,
    mytegory: "Home",
    src: require("../image/test.svg"),
    text: "Home",
  },
  {
    id: 3,
    mytegory: "Anniversary",
    src: require("../image/test.svg"),
    text: "기념일",
  },
  {
    id: 4,
    mytegory: "Accessary",
    src: require("../image/test.svg"),
    text: "커플템",
  },
];

const Nav = ({ navigation, category }) => {
  const [idx, setidx] = useState(0);
  return (
    <View
      style={{
        width: vw(100),
        backgroundColor: "#FFFFFF",
        borderTopColor: "#d2d2d2",
        borderTopWidth: 2,
        borderTopLeftRadius: 10,
        borderTopRightRadius: 10,
        flexDirection: "row",
        justifyContent: "space-around",
        shadowColor: "#d2d2d2",
        shadowOffset: {
          width: 0,
          height: -2,
        },
        shadowOpacity: 0.55,
        shadowRadius: 1,
      }}
    >
      {array.map((list) => (
        <TouchableOpacity
          key={list.id}
          style={{
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            alignContent: "center",
          }}
          onPress={() => {
            navigation.navigate(list.mytegory);
          }}
        >
          <LinearGradient
            style={
              category === list.mytegory
                ? {
                    transform: [{ scale: 1.1 }, { translateY: -5 }],
                    padding: vw(3),
                    borderRadius: 15,
                  }
                : {}
            }
            colors={
              category === list.mytegory
                ? ["#e66465", "#FFC8CD"]
                : ["#ffffff", "#ffffff"]
            }
          >
            <Image
              style={{
                width: 30,
                height: 30,
              }}
              source={array[list.id].src}
            />
            <Text
              style={{
                fontWeight: "bold",
                fontSize: 10,
                color: "#828282",
              }}
            >
              {list.text}
            </Text>
          </LinearGradient>
        </TouchableOpacity>
      ))}
    </View>
  );
};

export default Nav;