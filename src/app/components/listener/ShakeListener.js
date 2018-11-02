import React, {Component} from 'react';
import {View, Alert, Text, FlatList, StyleSheet, TouchableOpacity} from 'react-native';
import RNShake from 'react-native-shake';

export class ShakeListener extends Component {

    constructor(props) {
        super(props);
        this.shakes = 0;
        this.maxShakes = 5;
        this.countResetMs = 500;
    }

    render() {
        return null;
    }

    componentWillMount() {
        RNShake.addEventListener('shake', () => {
            this.shakes++;
            setTimeout(() => { this.shakes = 0; }, this.countResetMs);
            if (this.shakes == this.maxShakes)
                this.props.execute();
        });
    }

    componentWillUnmount() {
        RNShake.removeEventListener('shake');
    }
}