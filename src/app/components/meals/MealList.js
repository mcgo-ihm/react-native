import React, {Component} from 'react';
import {View, Alert, Text, FlatList, StyleSheet, TouchableOpacity} from 'react-native';
import {Meal} from './Meal.js';
import RNShake from 'react-native-shake';

export class MealList extends Component {
    static navigationOptions = {
        title: 'McGo',
    };
    
    constructor(props){
        super(props);
    }
    render() {
        return (
            <View style={styles.container}>
                <FlatList 
                    contentContainerStyle={styles.list}
                    numColumns={2}
                    data = {[
                        {key: "Parisien", description: "Un sandwich simple, certes, mais délicieux !", prize: "3,00€",
                            thumbnailUri: 'http://www.disneyfoodblog.com/wp-content/uploads/2013/07/ham-and-cheese-baguette-Les-Halles.jpg'},
                        {key: "Cheeseburger", description: "Le grand classique du burger, une valeur sure !", prize: "2,00€",
                            thumbnailUri: 'https://www.sbs.com.au/food/sites/sbs.com.au.food/files/lotus-burger-lead.jpg'},
                        {key: "Jambon-Beurre", description: "Le plus simple des sandwich, mais un immanquable.", prize: "2,00€",
                            thumbnailUri: 'http://micheltanguy.com/wp-content/uploads/2017/03/jambon-beurre2-1.jpg'}
                    ]}

                    renderItem = {({item}) =>
                        <TouchableOpacity onPress={() => this.props.navigation.navigate("Detail", {meal: item})} activeOpacity={0.5} >
                            <Meal style={styles.item} name={item.key} thumbnailUri={item.thumbnailUri} />
                        </TouchableOpacity>}
                />
            </View>
        );
    }
    componentWillMount() {
       navigator.geolocation.watchPosition(
            (position) => {
                if (Math.abs(position.coords.longitude - 7) < 0.005 && Math.abs(position.coords.latitude - 43.55) < 0.005) {
                    Alert.alert(position.coords.longitude + " " + position.coords.latitude);
                }
            });
        RNShake.addEventListener('shake', () => {
            Alert.alert("Shake it out!");
        });
    }
    componentWillUnmount() {
        RNShake.removeEventListener('shake');
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