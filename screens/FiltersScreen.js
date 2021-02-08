import React, { useState } from 'react';
import { View, Text, StyleSheet, Switch } from 'react-native';
import { HeaderButtons, Item } from 'react-navigation-header-buttons';
import HeaderButton from '../components/HeaderButton';
import Colors from '../constants/Colors';

const FilterScreen = props => {

    const [isGlutenFree, setIsGlutenFree] = useState(false);
    return (
        <View style={styles.screen}>
            <Text>Avaliable Filters / Restrictions</Text>
            <View style={styles.filterContainer}>
                <Text>Gluten-free</Text>
                <Switch 
                trackColor={{true: Colors.primaryColor}}
                value={isGlutenFree} 
                onValueChange={newValue => setIsGlutenFree(newValue)} />
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