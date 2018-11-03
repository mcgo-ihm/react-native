import React, {Component} from 'react';
import {View, Alert, Text, FlatList, StyleSheet, TouchableOpacity} from 'react-native';
import {Meal} from './Meal.js';
import Icon from 'react-native-vector-icons/FontAwesome';
import { FavoriteShakeListener } from '../../container/FavoriteShakeListener.js';
import { RestaurantListener } from '../listener';

export class MealList extends Component {
    static navigationOptions = ({navigation}) => {
        return {
            title: 'McGo',
            headerRight: (
                <TouchableOpacity onPress={() => navigation.navigate("Order", {orderedMeals: [
                    {key: "Parisien", description: "Un sandwich simple, certes, mais délicieux !", prize: "3,00€",
                        thumbnailUri: 'http://www.disneyfoodblog.com/wp-content/uploads/2013/07/ham-and-cheese-baguette-Les-Halles.jpg'},
                    {key: "Cheeseburger", description: "Le grand classique du burger, une valeur sure !", prize: "2,00€",
                        thumbnailUri: 'https://www.sbs.com.au/food/sites/sbs.com.au.food/files/lotus-burger-lead.jpg'},
                    {key: "Jambon-Beurre", description: "Le plus simple des sandwich, mais un immanquable.", prize: "2,00€",
                        thumbnailUri: 'http://micheltanguy.com/wp-content/uploads/2017/03/jambon-beurre2-1.jpg'}
                ]})} style={{paddingRight: 20}} activeOpacity={0.5}>
                    <Icon name="shopping-cart" size={40} color="#FCA10F" />
                </TouchableOpacity>
            )
        }
    };
    
    constructor(props){
        super(props);
        this.data = [
                {key: "Parisien", description: "Un sandwich simple, certes, mais délicieux !", prize: "3,00€",
                    thumbnailUri: 'http://www.disneyfoodblog.com/wp-content/uploads/2013/07/ham-and-cheese-baguette-Les-Halles.jpg'},
                {key: "Cheeseburger", description: "Le grand classique du burger, une valeur sure !", prize: "2,00€",
                    thumbnailUri: 'https://www.sbs.com.au/food/sites/sbs.com.au.food/files/lotus-burger-lead.jpg'},
                {key: "Jambon-Beurre", description: "Le plus simple des sandwich, mais un immanquable.", prize: "2,00€",
                    thumbnailUri: 'http://micheltanguy.com/wp-content/uploads/2017/03/jambon-beurre2-1.jpg'}
            ];
    }
    render() {
        return (
            <View style={styles.container}>
                <FlatList 
                    contentContainerStyle={styles.list}
                    numColumns={2}
                    data = {this.data}
                    renderItem = {({item}) =>
                        <TouchableOpacity onPress={() => this.props.navigation.navigate("Detail", {meal: item})} activeOpacity={0.5} >
                            <Meal style={styles.item} name={item.key} thumbnailUri={item.thumbnailUri} />
                        </TouchableOpacity>}
                />
                <FavoriteShakeListener meal={this.data[0]} />
                <RestaurantListener />
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