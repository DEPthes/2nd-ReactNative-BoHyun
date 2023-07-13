import { StatusBar } from "expo-status-bar";
import {
  SafeAreaView,
  StyleSheet,
  View,
  FlatList,
  Image,
  Text,
} from "react-native";
import Header from "./components/common/Header";
import Navi from "./components/common/Navi";
import WriteButtonModal from "./components/WriteButtonModal";
import { NavigationContainer } from "@react-navigation/native";

export default function App() {
  
  return (
    <NavigationContainer>
      <Navi />
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  navi: {
    flex: 1,
  },

  header: {
    flex: 1,
  },

  container: {
    flex: 1,
    backgroundColor: "#2A2B32",
  },
});
