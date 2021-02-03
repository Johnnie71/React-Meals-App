import React from 'react';
import { View, StyleSheet, FlatList} from 'react-native';

const MealList = props => {
    return (
        <View style={styles.list}>
            <FlatList 
            data={props.listData} 
            keyExtractor={(item, index) => item.id} 
            renderItem={renderMealItem} 
            style={{width: '100%'}}
            />
        </View>
    )
};

const styles = StyleSheet.create({
    list:{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        padding: '3%',
    }
});

export default MealList;