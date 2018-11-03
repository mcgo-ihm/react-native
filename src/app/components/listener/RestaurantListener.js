import React, {Component} from 'react';
import {View, Alert, Text, FlatList, StyleSheet, TouchableOpacity} from 'react-native';

export class RestaurantListener extends Component {
    constructor(props) {
        super(props);
    }

    componentWillMount() {
        this.watchId = navigator.geolocation.watchPosition(
            (position) => {
                if (Math.abs(position.coords.longitude - 7) < 0.005 && Math.abs(position.coords.latitude - 43.55) < 0.005) {
                    Alert.alert(position.coords.longitude + " " + position.coords.latitude);
                }
            });
    }

    componentWillUnmount() {
        navigator.clearWatch(this.watchId);
    }

    render() {
        return null;
    }
}