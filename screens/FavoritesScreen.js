import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import MealList from '../components/MealList';

const FavoritesScreen = props => {
    return <MealList />
};

FavoritesScreen.navigationOptions = {
    headerTitle: "Your Favorites"
};

const styles = StyleSheet.create({
    screen:{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    }
});

export default FavoritesScreen;