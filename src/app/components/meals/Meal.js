import React, {Component} from 'react';
import {View, Text, StyleSheet, Image, Button} from 'react-native';

export class Meal extends Component {
    render() {
        return (
            <View style={[mealStyles.container, this.props.style]}>
                <Text style={mealStyles.name}>{this.props.name}</Text>
                <Image style={mealStyles.thumbnail} source={{uri: this.props.thumbnailUri}} />
            </View>
        );
    }
}

const mealStyles = StyleSheet.create({
    container: {
        elevation: 2,
        borderRadius: 5,
        backgroundColor: "#FFF",
        padding: 5,
        width: 150
    },
    name: {
        fontSize: 20,
        textAlign: "center"
    },
    thumbnail: {
        height: 100,
        borderRadius: 10,
        margin: 2
    },
    button: {
        margin: 6
    }
});