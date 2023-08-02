import { useContext } from 'react';
import { View,Text, StyleSheet } from 'react-native';
import MealsList from '../components/MealsList/MealsList';
import { FavoritesContext } from '../store/context/favorites-context';
import { MEALS } from '../data/dummy-data';


const  FavoritesScreen =() => {
  const favoriteMealsContext = useContext(FavoritesContext);
  const favoriteMeals = MEALS.filter((meal) => favoriteMealsContext.ids.includes(meal.id))

  if(favoriteMeals.length === 0) {
    return (<View style={styles.rootContainer}>
      <Text style={styles.text}>멸치구나</Text>
    </View>)
  }
  return <MealsList items={favoriteMeals} />;
}

export default FavoritesScreen;


const styles = StyleSheet.create({
  rootContainer: {
    flex:1, 
    justifyContent:'center',
    alignItems:'center'
  }, 
  text: {
    fontSize: 18, 
    fontWeight:'bold',
    color:'white'
  }

})