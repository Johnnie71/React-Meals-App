import React from 'react';
import { View, Text, StyleSheet, FlatList } from 'react-native';

import { CATEGORIES }from '../data/dummy-data';

const renderGridItem = (itemData) => {
    return <View><Text>{itemData.item.title}</Text></View>;
};

const CategoriesScreen = props => {

    return (
        <Flatlist keyExtractor={(item, index) => item.id}
            data={CATEGORIES}
            renderItem={renderGridItem}
            numColums={2}
        />
    );
};

const styles = StyleSheet.create({
    screen:{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    }
});

export default CategoriesScreen;