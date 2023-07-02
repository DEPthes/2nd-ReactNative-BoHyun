import React from "react";
import { StyleSheet, View, Text, Image } from "react-native";

const Header = () => {
  return (
    <View style={styles.container}>
      <View>
        <Text style={styles.place}>송파동</Text>
      </View>

      <View style={styles.iconContainer}>
        <Image
          style={styles.icon}
          source={require("../../assets/images/search.png")}
        />
        <Image
          style={styles.icon}
          source={require("../../assets/images/menu.png")}
        />
        <Image
          style={styles.icon}
          source={require("../../assets/images/bell.png")}
        />
      </View>
    </View>
  );
};

export default Header;

const styles = StyleSheet.create({
  container: {
    height: 80,
    justifyContent: "space-between",

    paddingLeft: 15,
    paddingRight: 15,
    alignItems: "center",
    flexDirection: "row",
  },
  place: {
    color: "white",
    fontSize: 20,
    fontWeight: "600",
    marginRight: 10,
  },
  iconContainer: {
    flexDirection: "row",
    alignItems: "center",
  },
  icon: {
    width: 24,
    height: 24,
    marginLeft: 17,
  },
});
