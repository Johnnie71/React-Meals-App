import React, { useEffect } from 'react';
import { ScrollView, View, Image, Text, StyleSheet } from 'react-native';
import { HeaderButtons, Item } from 'react-navigation-header-buttons';
import DefaultText from '../components/DefaultText';
import { useSelector } from 'react-redux';
import HeaderButton from '../components/HeaderButton';

const ListItem = props => {
    return (
        <View style={styles.listItem}>
            <DefaultText>{props.children}</DefaultText>
        </View>
    )
};

const MealDetailScreen = props => {

    const availableMeals = useSelector(state => state.meals.meals);

    const mealId =props.navigation.getParam('mealId');

    const selectedMeal = availableMeals.find(meal => meal.id === mealId);

    useEffect(() => {
        props.navigation.setParams({mealTitle: selectedMeal.title});
    });

    

    return (
        <ScrollView>
            <Image source={{uri: selectedMeal.imageUrl}} style={styles.image}/>
            <View style={styles.details}> 
                <DefaultText >{selectedMeal.duration}m</DefaultText>
                <DefaultText >{selectedMeal.complexity.toUpperCase()}</DefaultText>
                <DefaultText >{selectedMeal.affordability.toUpperCase()}</DefaultText>
            </View>
            <Text style={styles.title}>Ingredients</Text>
            {selectedMeal.ingredients.map(ingredient => (
            <ListItem key={ingredient}>{ingredient}</ListItem>
            ))}
            <Text style={styles.title}>Steps</Text>
            {selectedMeal.steps.map(step => (
            <ListItem key={step}>{step}</ListItem>
            ))}
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
    },
    listItem:{
        marginVertical: 10,
        marginHorizontal: 20,
        borderColor: '#ccc',
        borderWidth: 1,
        padding: 10
    }

});

export default MealDetailScreen;