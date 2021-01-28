import { createStackNavigator } from 'react-navigation-stack';
import { createAppContainer } from 'react-navigation'

import CatgoriesScreen from '../screens/CategoriesScreen';
import CategoryMealsScreen from '../screens/CategoryMealsScreen';
import MealDetailScreen from '../screens/MealDetailScreen';
import Colors from '../constants/Colors';


const MealsNavigator = createStackNavigator({
    Categories: CatgoriesScreen,
    CategoryMeals: CategoryMealsScreen,
    MealDetail: MealDetailScreen,
},  {
      defaultNavigationOptions: {
        headerStyle: {
            backgroundColor: Platform.OS === 'android' ? Colors.primaryColor : 'white' ,
        },
        headerTintColor: Platform.OS === 'android' ? 'white' : Colors.primaryColor ,
      }
    }
);

export default createAppContainer(MealsNavigator);