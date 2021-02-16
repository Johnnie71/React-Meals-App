import React from 'react';
import { useSelector } from 'react-redux';
import { View, StyleSheet } from 'react-native';

import { CATEGORIES } from '../data/dummy-data';
import MealList from '../components/MealList';
import { View } from 'react-native';
import DefaultText from '../components/DefaultText';

const CategoryMealsScreen = props => {

    const catId = props.navigation.getParam('categoryId');

    const avaliableMeals = useSelector(state => state.meals.filteredMeals);

    const displayedMeals = avaliableMeals.filter(
        meal => meal.categoryIds.indexOf(catId) >= 0
    );

    if(displayedMeals.length === 0){
        return(
            <View style={styles.content}>
                <DefaultText></DefaultText>
            </View>
        )
    }

    return (
        <MealList listData={displayedMeals} navigation={props.navigation} />
    );
};

CategoryMealsScreen.navigationOptions = (navigationData) => {
    const catId = navigationData.navigation.getParam('categoryId');

    const selectedCategory = CATEGORIES.find(cat => cat.id === catId);
    
    return {
        headerTitle: selectedCategory.title,
    };
};


export default CategoryMealsScreen;