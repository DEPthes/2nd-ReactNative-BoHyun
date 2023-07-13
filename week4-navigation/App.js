import { StatusBar } from "expo-status-bar";
import { Fragment } from "react";
import { StyleSheet } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import CategoriesScreen from "./screens/CategoriesScreen";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import MealsOverViewScreen from "./screens/MealsOverViewScreen";

const Stack = createNativeStackNavigator();
// Stack은 두 개의 프로퍼티를 가지고 얘네는 컴포넌트 기능을 가진 객체를 포함함

export default function App() {
  return (
    <>
      <StatusBar style="dark" />
      <NavigationContainer>
        <Stack.Navigator>
          {/* Screen 컴포넌트는 내비게이터가 관리할 화면을 등록할 수 있는 컴포넌트 */}
          <Stack.Screen name="MealsCatagories" component={CategoriesScreen} />
          <Stack.Screen name="MealsOverview" component={MealsOverViewScreen} />
        </Stack.Navigator>
      </NavigationContainer>
    </>
  );
}

const styles = StyleSheet.create({
  container: {},
});
