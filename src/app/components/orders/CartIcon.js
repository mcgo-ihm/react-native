import React, {Component} from 'react';
import {View, Text, Image, StyleSheet, Button, FlatList, TouchableOpacity} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

export class CartIcon extends Component {
    render() {
        return (
            <TouchableOpacity onPress={() => this.props.navigation.navigate("Order")} style={{paddingRight: 20}} activeOpacity={0.5}>
                <Icon name="shopping-cart" size={40} color="#5A5A5A" />
            </TouchableOpacity>
        )
    }
}