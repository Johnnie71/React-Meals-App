import React from 'react';
import { View, Text, StyleSheet, FlatList } from 'react-native';

const CategoriesScreen = props => {

    return (
        <Flatlist numColums={2} />
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