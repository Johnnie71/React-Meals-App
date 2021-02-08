import React from 'react';
import { View, Text, StyleSheet, Switch } from 'react-native';
import { HeaderButtons, Item } from 'react-navigation-header-buttons';
import HeaderButton from '../components/HeaderButton';

const FilterScreen = props => {
    return (
        <View style={styles.screen}>
            <Text>Avaliable Filters / Restrictions</Text>
            <View style={styles.filterContainer}>
                <Text>Gluten-free</Text>
                <Switch />
            </View>
        </View>
    )
};

FilterScreen.navigationOptions = (navData) => {
    return {
    headerTitle: 'Filter Meals',
    headerLeft: (
    <HeaderButtons HeaderButtonComponent={HeaderButton}> 
        <Item title="Menu" iconName='ios-menu' onPress={() => {
            navData.navigation.toggleDrawer();
        }} />
    </HeaderButtons>
    )};
};

const styles = StyleSheet.create({
    screen:{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    title: {
        
    },
    filterContainer: {

    }
});

export default FilterScreen;