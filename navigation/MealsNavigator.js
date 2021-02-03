import React from 'react';
import { createStackNavigator } from 'react-navigation-stack';
import { createAppContainer } from 'react-navigation';
import { Ionicons } from '@expo/vector-icons';
import { Platform } from 'react-native';

import CatgoriesScreen from '../screens/CategoriesScreen';
import CategoryMealsScreen from '../screens/CategoryMealsScreen';
import MealDetailScreen from '../screens/MealDetailScreen';
import FavoritesScreen from '../screens/FavoritesScreen';
import Colors from '../constants/Colors';
import { createMaterialBottomTabNavigator } from 'react-navigation-material-bottom-tabs';
import { createBottomTabNavigator } from 'react-navigation-tabs';


const MealsNavigator = createStackNavigator({
    Categories: CatgoriesScreen,
    CategoryMeals: CategoryMealsScreen,
    MealDetail: MealDetailScreen,
},  
   {
    //   initialRouteName: 'Categories',
      defaultNavigationOptions: {
        headerStyle: {
            backgroundColor: Platform.OS === 'android' ? Colors.primaryColor : 'white' ,
        },
        headerTintColor: Platform.OS === 'android' ? 'white' : Colors.primaryColor ,
      }
    }
);

createStackNavigator({
  Favorites: FavoritesScreen,
  MealDetail: MealDetailScreen
}, 
{
  //   initialRouteName: 'Categories',
    defaultNavigationOptions: {
      headerStyle: {
          backgroundColor: Platform.OS === 'android' ? Colors.primaryColor : 'white' ,
      },
      headerTintColor: Platform.OS === 'android' ? 'white' : Colors.primaryColor ,
    }
  }
);

const tabScreenConfig = {
  Meals: {screen: MealsNavigator, navigationOptions: {
    tabBarIcon: (tabInfo) => {
      return (
      <Ionicons 
        name='ios-restaurant' 
        size={25} 
        color={tabInfo.tintColor} 
      />
      );
    },
    tabBarColor: Colors.primaryColor
  }},
  Favorites: {screen: FavoritesScreen, navigationOptions: {
    tabBarLabel: 'Favorites!',
    tabBarIcon: (tabInfo) => {
      return (
      <Ionicons 
      name='ios-star' 
      size={25} 
      color={tabInfo.tintColor} 
      />
      );
    },
    tabBarColor: Colors.accentColor
  }}
};

const MealsFavTabNavigator = 
  Platform.OS === 'android'
    ? createMaterialBottomTabNavigator(tabScreenConfig, {
        activeTintColor: 'white',
        shifting: true,
        // barStyle: {
        //   backgroundColor: Colors.primaryColor
        // }
        }) 
      : createBottomTabNavigator(tabScreenConfig, {
              tabBarOptions: {
                activeTintColor: Colors.primaryColor
              }
          });

export default createAppContainer(MealsFavTabNavigator);