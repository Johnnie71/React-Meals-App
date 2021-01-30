import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Platform, TouchableNativeFeedback } from 'react-native';

const MealItem = props => {

    let Touchable = TouchableOpacity;

    if(Platform.OS === 'android' && Platform.Version >= 21){
        Touchable = TouchableNativeFeedback
    }

    return (
        <View style={styles.mealItem}>
        <Touchable onPress={props.onSelectMeal}>
            <View>
                <View style={styles.mealRow}>
                    <Text>{props.title}</Text>
                </View>
                <View style={styles.mealRow} >
                    
                </View>
            </View>
        </Touchable>
        </View>
    );
};

const styles = StyleSheet.create({
    mealItem:{
        height: 200,
        width: '100%',
        backgroundColor: '#ccc'
    },
    mealRow:{
        flexDirection: 'row',
    }
});

export default MealItem;