import { createStackNavigator } from 'react-navigation-stack';
import { createAppContainer } from 'react-navigation';
import { createBottomTabNavigator } from 'react-navigation-tabs';
import { Ionicons } from '@expo/vector-icons';

import CatgoriesScreen from '../screens/CategoriesScreen';
import CategoryMealsScreen from '../screens/CategoryMealsScreen';
import MealDetailScreen from '../screens/MealDetailScreen';
import FavoritesScreen from '../screens/FavoritesScreen';
import Colors from '../constants/Colors';


const MealsNavigator = createStackNavigator({
    Categories: CatgoriesScreen,
    CategoryMeals: CategoryMealsScreen,
    MealDetail: MealDetailScreen,
},  {
    //   initialRouteName: 'Categories',
      defaultNavigationOptions: {
        headerStyle: {
            backgroundColor: Platform.OS === 'android' ? Colors.primaryColor : 'white' ,
        },
        headerTintColor: Platform.OS === 'android' ? 'white' : Colors.primaryColor ,
      }
    }
);

const MealsFavTabNavigator = createBottomTabNavigator({
    Meals: {screen: MealsNavigator, navigationOptions: {
      tabBarIcon: (tabInfo) => {
        return <Ionicons name='ios-restaurant' size={25} color={tabInfo.tintColor} />
      }
    }},
    Favorites: {screen: FavoritesScreen, navigationOptions: {
      tabBarIcon: (tabInfo) => {
        return <Ionicons name='ice-cream' size={25} color={tabInfo.tintColor} />
      }
    }}
}, {
  tabBarOptions: {
    activeTintColor: Colors.primaryColor
  }
});

export default createAppContainer(MealsFavTabNavigator);