import React, {Component} from 'react';
import {View, Alert, Text, FlatList, StyleSheet, TouchableOpacity} from 'react-native';
import RNShake from 'react-native-shake';

export class ShakeListener extends Component {

    render() {
        return null;
    }

    componentWillMount() {
        RNShake.addEventListener('shake', () => {
            this.props.addFaveToCart();
        });
    }
}