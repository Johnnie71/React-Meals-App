import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Platform, TouchableNativeFeedback } from 'react-native';

const MealItem = props => {

    let Touchable = TouchableOpacity;

    if(Platform.OS === 'android' && Platform.Version >= 21){
        Touchable = TouchableNativeFeedback
    }

    return (
        <Touchable onPress={props.onSelectMeal}>
            <View>
                <Text>{itemData.item.title}</Text>
            </View>
        </Touchable>
    );
};

const styles = StyleSheet.create({

});

export default MealItem;