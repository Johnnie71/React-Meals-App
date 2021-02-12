import React from 'react';
import MealList from '../components/MealList';
import { useSelector } from 'react-redux';
import { HeaderButtons, Item } from 'react-navigation-header-buttons';
import HeaderButton from '../components/HeaderButton';
import { View, Text } from 'react-native';

const FavoritesScreen = props => {

    const favMeals = useSelector(state => state.meals.favoriteMeals);

    if(favMeals.length === 0 || !favMeals){
        return (
            <View>
                <Text>No favorite meals found. Start adding some!</Text>
            </View>
        )
    }

    
    return <MealList listData={favMeals} navigation={props.navigation} />
};

FavoritesScreen.navigationOptions = (navData) => {
    return {
    headerTitle: 'Your Favorites',
    headerLeft:() => (
    <HeaderButtons HeaderButtonComponent={HeaderButton}> 
        <Item title="Menu" iconName='ios-menu' onPress={() => {
            navData.navigation.toggleDrawer();
        }} />
    </HeaderButtons>
    )};
};


export default FavoritesScreen;