import React, { useState } from 'react';
import { View, Text, StyleSheet, Switch } from 'react-native';
import { HeaderButtons, Item } from 'react-navigation-header-buttons';
import HeaderButton from '../components/HeaderButton';
import Colors from '../constants/Colors';

const FilterSwitch = props => {
    <View style={styles.filterContainer}>
        <Text>{props.label}</Text>
        <Switch 
        trackColor={{true: Colors.primaryColor}}
        thumbColor={Colors.primaryColor}
        value={props.state} 
        onValueChange={props.onChange} />
    </View>
};

const FilterScreen = props => {

    const [isGlutenFree, setIsGlutenFree] = useState(false);
    return (
        <View style={styles.screen}>
            <Text>Avaliable Filters / Restrictions</Text>
            <FilterScreen 
                label='Gluten-free' 
                state={isGlutenFree} 
                onChange={newValue => setIsGlutenFree(newValue)} />
            <FilterScreen 
                label='Lactose-free' 
                state={isGlutenFree} 
                onChange={newValue => setIsGlutenFree(newValue)} />
            <FilterScreen 
                label='Vegan' 
                state={isGlutenFree} 
                onChange={newValue => setIsGlutenFree(newValue)} />
            <FilterScreen 
                label='Vegetarian' 
                state={isGlutenFree} 
                onChange={newValue => setIsGlutenFree(newValue)} />
            

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
        justifyContent: 'space-around',
        alignItems: 'center',
        width: '100%',
        paddingVertical: 20,
    }
});

export default FilterScreen;