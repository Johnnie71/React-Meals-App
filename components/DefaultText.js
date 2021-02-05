import React from 'react';
import { Text, StyleSheet } from 'react-native';

const DefaultText = props => {
    return (
        <Text style={}>{props.children}</Text>
    )
};

const styles = StyleSheet.create({
    text: {
        fontWeight: 'bold'
    }
});

export default DefaultText;
