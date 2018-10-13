import React, {Component} from 'react';
import {View, Text, FlatList, StyleSheet, TouchableOpacity} from 'react-native';
import {Meal} from './Meal.js';

export class MealList extends Component {
    static navigationOptions = {
        title: 'McGo',
    };
    render() {
        return (
            <View style={styles.container}>
                <FlatList 
                    contentContainerStyle={styles.list}
                    numColumns={2}
                    data = {[
                        {key: "Jambon-Beurre", thumbnailUri: 'http://www.disneyfoodblog.com/wp-content/uploads/2013/07/ham-and-cheese-baguette-Les-Halles.jpg'},
                        {key: "Jambon-Beurre", thumbnailUri: 'http://www.disneyfoodblog.com/wp-content/uploads/2013/07/ham-and-cheese-baguette-Les-Halles.jpg'},
                        {key: "Jambon-Beurre", thumbnailUri: 'http://micheltanguy.com/wp-content/uploads/2017/03/jambon-beurre2-1.jpg'}
                    ]}

                    renderItem = {({item}) =>
                        <TouchableOpacity onPress={() => this.props.navigation.navigate("Detail")} activeOpacity={0.5} >
                            <Meal style={styles.item} name={item.key} thumbnailUri={item.thumbnailUri} />
                        </TouchableOpacity>}
                />
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        alignItems: 'center'
    },
    list: {
        flexDirection: 'column',
    },
    item: {
        margin: 10
    }
});