import React, {Component} from 'react';
import {View, Text, Image, StyleSheet, Button, FlatList} from 'react-native';
import { OrderElement } from './OrderElement';

export class Order extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <FlatList data={this.props.navigation.getParam('orderedMeals', [])}
                renderItem = {({item}) => <OrderElement meal={item} />} />
        );
    }
}