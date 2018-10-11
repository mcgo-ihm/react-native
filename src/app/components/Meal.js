import React, {Component} from 'react';
import {View, Text, StyleSheet, Image} from 'react-native';

export class Meal extends Component {
    render() {
        return (
            <View style={mealStyles.container}>
                <Text style={mealStyles.name}>{this.props.name}</Text>
                <Image style={mealStyles.thumbnail} source={{uri: this.props.thumbnailUri}} />
            </View>
        );
    }
}

const mealStyles = StyleSheet.create({
    container: {
        borderColor: "#777",
        borderStyle: "solid",
        borderWidth: 1,
        borderRadius: 5,
        padding: 5,
        width: 150
    },
    name: {
        fontSize: 20,
        textAlign: "center"
    },
    thumbnail: {
        height: 100,
    }
});