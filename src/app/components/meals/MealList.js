import React, {Component} from 'react';
import {FlatList, StyleSheet} from 'react-native';
import {Meal} from './Meal.js';

export class MealList extends Component {
    render() {
        return (
            <FlatList 
                contentContainerStyle={styles.list}
                numColumns={2}
                data = {[
                    {key: "Jambon-Beurre", thumbnailUri: 'http://www.disneyfoodblog.com/wp-content/uploads/2013/07/ham-and-cheese-baguette-Les-Halles.jpg'},
                    {key: "Jambon-Beurre", thumbnailUri: 'http://www.disneyfoodblog.com/wp-content/uploads/2013/07/ham-and-cheese-baguette-Les-Halles.jpg'},
                    {key: "Jambon-Beurre", thumbnailUri: 'http://micheltanguy.com/wp-content/uploads/2017/03/jambon-beurre2-1.jpg'}
                ]}

                renderItem = {({item}) => <Meal style={styles.item} name={item.key} thumbnailUri={item.thumbnailUri} />}
            />
        );
    }
}

const styles = StyleSheet.create({
    list: {
        flexDirection: 'column',
    },
    item: {
        margin: 10
    }
});