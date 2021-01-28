import { createStackNavigator} from 'react-navigation-stack';

import CatgoriesScreen from '../screens/CategoriesScreen';
import CategoriesMealScreen from '../screens/CategoryMealsScreen';
import CategoryMealsScreen from '../screens/CategoryMealsScreen';

createStackNavigator({
    Categories: CatgoriesScreen,
    CategoryMeals: CategoriesMealScreen,
});
