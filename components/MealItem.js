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
                    <View style={{ ...styles.mealRow, ...styles.mealHeader }}>
                        <Text>{props.title}</Text>
                    </View>
                    <View style={{ ...styles.mealRow, ...styles.mealDetail }}> 
                        <Text>{props.duration}m</Text>
                        <Text>{props.complexity.toUpperCase()}</Text>
                        <Text>{props.affordability.toUpperCase()}</Text>
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
    },
    mealHeader:{
        height: '87%',
    },
    mealDetail:{
        paddingHorizontal: 10,
        justifyContent: 'space-between'
    },
});

export default MealItem;