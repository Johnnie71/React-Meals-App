import { createStackNavigator } from 'react-navigation-stack';
import { createAppContainer } from 'react-navigation'

import CatgoriesScreen from '../screens/CategoriesScreen';
import CategoryMealsScreen from '../screens/CategoryMealsScreen';
import MealDetailScreen from '../screens/MealDetailScreen';

const MealsNavigator = createStackNavigator({
    Categories: CatgoriesScreen,
    CategoryMeals: CategoryMealsScreen,
    MealDetail: MealDetailScreen
});

export default createAppContainer(MealsNavigator);