import React from 'react';
import { View, 
    Text, 
    StyleSheet, 
    TouchableOpacity, 
    Platform, 
    TouchableNativeFeedback,
    ImageBackground 
} from 'react-native';

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
                        <ImageBackground 
                        source={{uri: props.image}} 
                        style={styles.bgImge} 
                        >  
                        <View style={styles.titleContainer}>
                                <Text style={styles.title} numberOfLines={1} >{props.title}</Text>
                        </View>
                        </ImageBackground>
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
        backgroundColor: '#CCD1D1',
        borderRadius: 10,
        // paddingHorizontal: '1%',
        overflow: 'hidden',
    },
    mealRow:{
        flexDirection: 'row',
    },
    mealHeader:{
        height: '87%',
    },
    mealDetail:{
        paddingHorizontal: 10,
        justifyContent: 'space-between',
        alignItems: 'center',
        height: '13%'
    },
    bgImge: {
        width: '100%',
        height: '100%',
        justifyContent: 'flex-end'
    },
    title:{
        fontWeight: 'bold',
        color: 'white',
        textAlign: 'center'
    },
    titleContainer:{
        backgroundColor: 'rgba(0,0,0,0.4)',
        paddingVertical: 5,
        paddingHorizontal: 12,
    }
});

export default MealItem;