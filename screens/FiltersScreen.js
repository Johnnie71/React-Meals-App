import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, Switch } from 'react-native';
import { HeaderButtons, Item } from 'react-navigation-header-buttons';
import HeaderButton from '../components/HeaderButton';
import Colors from '../constants/Colors';

const FilterSwitch = props => {
    return (<View style={styles.filterContainer}>
        <Text>{props.label}</Text>
        <Switch 
        trackColor={{true: Colors.primaryColor}}
        thumbColor={Colors.primaryColor}
        value={props.state} 
        onValueChange={props.onChange}
        />
    </View>
    )
};


const FilterScreen = props => {

    const [isGlutenFree, setIsGlutenFree] = useState(false);
    const [isLactoseFree, setIsLactoseFree] = useState(false);
    const [isVegan, setIsVegan] = useState(false);
    const [isVegetarian, setIsVegetarian] = useState(false);

    const saveFilters = () => {
        const appliedFilters = {
            glutenFree: isGlutenFree,
            lactoseFree: isLactoseFree,
            vegan: isVegan,
            vegetarian: isVegetarian
        };
    };

    useEffect(() => {
        props.navigation.setParams({save: saveFilters});
    }, [saveFilters]);

    return (
        <View style={styles.screen}>
            <Text>Avaliable Filters / Restrictions</Text>
            <FilterSwitch 
                label='Gluten-free' 
                state={isGlutenFree} 
                onChange={newValue => setIsGlutenFree(newValue)} />
            <FilterSwitch
                label='Lactose-free' 
                state={isLactoseFree} 
                onChange={newValue => setIsLactoseFree(newValue)} />
            <FilterSwitch
                label='Vegan' 
                state={isVegan} 
                onChange={newValue => setIsVegan(newValue)} />
            <FilterSwitch
                label='Vegetarian' 
                state={isVegetarian} 
                onChange={newValue => setIsVegetarian(newValue)} />
        </View>
    )
};

FilterScreen.navigationOptions = (navData) => {
    return {
    headerTitle: 'Filter Meals',
    headerLeft: () => (
    <HeaderButtons HeaderButtonComponent={HeaderButton}> 
        <Item 
        title="Menu" 
        iconName='ios-menu' 
        onPress={() => {
            navData.navigation.toggleDrawer();
        }} />
    </HeaderButtons>
    ),
    headerRight: () => (
        <HeaderButtons HeaderButtonComponent={HeaderButton}> 
        <Item 
        title="Save" 
        iconName='ios-save' 
        onPress={() => {
            navData.navigation.getParam('save');
        }} />
    </HeaderButtons>
    )
};
};

const styles = StyleSheet.create({
    screen:{
        flex: 1,
        alignItems: 'center'
    },
    title: {
        fontWeight: 'bold',
        fontSize: 15,
        margin: 20,
        textAlign: 'center'
    },
    filterContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        width: '80%',
        marginVertical: 20,
    }
});

export default FilterScreen;