import React, {Component} from 'react';
import {View, Text, Image, StyleSheet} from 'react-native';
import {Meal} from './Meal.js';

export class DetailedMeal extends Component {
    static navigationOptions = {
        title: 'Jambon-Beurre'
    }
    render() {
        return (
            <View style={styles.header}>
                <Image style={styles.image} source={{ uri: 'http://micheltanguy.com/wp-content/uploads/2017/03/jambon-beurre2-1.jpg' }}></Image>
                <Text>"Jambon-Beurre"</Text>
                <View style={{flex: 1}}></View>
            </View>
        );
    }


}

const styles = StyleSheet.create({
    header: {
        flex: 1,
    },
    image: {
        flex: 1,
        resizeMode: 'cover',
    }
});