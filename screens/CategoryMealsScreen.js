import React from 'react';
import { View, Text, StyleSheet, Button } from 'react-native';

import { CATEGORIES } from '../data/dummy-data';

const CategoriesMealScreen = props => {

    const catId = props.navigation.getParam('categoryId');

    const selectedCategories = CATEGORIES.find(cat => cat.id === catId);

    return (
        <View style={styles.screen}>
            <Text>The Category Meal Screen!</Text>
            <Text>{selectedCategories.title}</Text>
            <Button title="Go To Details " onPress={() => {
                props.navigation.navigate('MealDetail')
            }}/>
            <Button title="Go Back" onPress={() => {
                props.navigation.pop();
            }} />
        </View>
    )
};

const styles = StyleSheet.create({
    screen:{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    }
});

export default CategoriesMealScreen;