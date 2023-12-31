import { FlatList } from "react-native";
import CategoryGridTile from "../components/CategoryGridTile";
import { CATEGORIES } from "../data/dummy-data";

const CategoriesScreen = ({ navigation }) => {
  const renderCategoryItem = (categoryItem) => {
    const pressHandler = () => {
      navigation.navigate("MealsOverview", {
        categoryId: categoryItem.item.id,
      });
    };

    return (
      <CategoryGridTile
        title={categoryItem.item.title}
        color={categoryItem.item.color}
        onPress={pressHandler}
      />
    );
  };

  return (
    <FlatList
      data={CATEGORIES}
      keyExtractor={(item) => item.id}
      // renderItem은 ItemData 안에 들어있는 Item 객체
      renderItem={renderCategoryItem}
      numColumns={2}
    />
  );
};

export default CategoriesScreen;
