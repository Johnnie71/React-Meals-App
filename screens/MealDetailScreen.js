import React from 'react';
import { ScrollView, View, Image, Text, StyleSheet, Button } from 'react-native';
import { HeaderButtons, Item } from 'react-navigation-header-buttons';
import DefaultText from '../components/DefaultText';
import { MEALS } from '../data/dummy-data';
import HeaderButton from '../components/HeaderButton';

const MealDetailScreen = props => {

    const mealId =props.navigation.getParam('mealId');

    const selectedMeal = MEALS.find(meal => meal.id === mealId)

    return (
        <ScrollView>
            <Image source={{uri: selectedMeal.imageUrl}} style={styles.image}/>
            <View style={styles.details}> 
                <DefaultText >{selectedMeal.duration}m</DefaultText>
                <DefaultText >{selectedMeal.complexity.toUpperCase()}</DefaultText>
                <DefaultText >{selectedMeal.affordability.toUpperCase()}</DefaultText>
            </View>
            <Text style={styles.title}>Ingredients</Text>
            
            <Text style={styles.title}>Steps</Text>
            <Text>List of Steps...</Text>
        </ScrollView>
    )
};

MealDetailScreen.navigationOptions = (navigationData) => {

    const mealId = navigationData.navigation.getParam('mealId');
    const selectedMeal = MEALS.find(meal => meal.id === mealId);

    return {
        headerTitle: selectedMeal.title,
        headerRight: () => <HeaderButtons HeaderButtonComponent={HeaderButton}>
            <Item 
                title='Favorite' 
                iconName='ios-star' 
                onPress={() => {
                    console.log('Mark as favorite!')
                }}   
            />
            <Item 
                title='Favorite' 
                iconName='ios-star-outline' 
                onPress={() => {
                    console.log('Mark as favorite!')
                }}   
            />
        </HeaderButtons>
    };
};

const styles = StyleSheet.create({
    image: {
        width: '100%',
        height: 200
    },
    details: {
        flexDirection: 'row',
        padding: 15,
        justifyContent: 'space-around'
    },
    title:{
        fontWeight: 'bold',
        fontSize: 15,
        textAlign: 'center'
    }

});

export default MealDetailScreen;