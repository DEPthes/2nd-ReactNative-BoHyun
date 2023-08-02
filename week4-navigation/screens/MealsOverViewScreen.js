import { useLayoutEffect } from "react";
import { View, Text, StyleSheet, FlatList } from "react-native";
import { MEALS, CATEGORIES } from "../data/dummy-data";
import MealItem from "./../components/MealItem";

const MealsOverViewScreen = ({ route, navigation }) => {
  const catId = route.params.categoryId;

  const displayMeals = MEALS.filter((m) => {
    return m.categoryIds.indexOf(catId) >= 0;
  });

  useLayoutEffect(() => {
    // category에 있는 모든 항목에 대해 실행
    const catTitle = CATEGORIES.find((category) => category.id === catId).title;
    // navigation의 options와 같은 것, component에서 쓸 때 이용
    // 바로 컴포넌트에서 사용하면 안됨
    navigation.setOptions({
      title: catTitle,
    });
  }, [catId, navigation]);

  const renderMealItem = (itemData) => {
    const item = itemData.item;
    const mealItemProps = {
      id: item.id,
      title: item.title,
      imageUrl: item.imageUrl,
      affordability: item.affordability,
      complexity: item.complexity,
      duration: item.duration,
    };
    return <MealItem {...mealItemProps} />;
  };

  return (
    <View style={styles.container}>
      <FlatList
        data={displayMeals}
        keyExtractor={(item) => item.id}
        renderItem={renderMealItem}
      />
    </View>
  );
};

export default MealsOverViewScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  },
});
