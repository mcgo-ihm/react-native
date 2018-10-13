import React, {Component} from 'react';
import {View, Text, Image, StyleSheet, Button, Alert} from 'react-native';
import {Meal} from './Meal.js';

export class DetailedMeal extends Component {
    static navigationOptions = {
        title: 'Jambon-Beurre'
    }
    onPressButton() {
        Alert.alert("Yay!");
    }
    render() {
        return (
            <View style={styles.container}>
                <View style={styles.header}>
                    <Image style={styles.image} source={{ uri: 'http://micheltanguy.com/wp-content/uploads/2017/03/jambon-beurre2-1.jpg' }}></Image>
                    <View style={styles.titleBox}>
                        <Text style={styles.titleBoxText}>Jambon-Beurre</Text>
                        <View>
                            <Text style={styles.prize}>2,00€</Text>
                        </View>
                    </View>
                </View>
                <View style={{flex: 1}}>
                    <Text style={{margin: 15}}>Un délicieux jambon beurre qui ravira petits et grands !</Text>
                </View>
                <Button onPress={this.onPressButton} title="Ajouter à la commande"
                    color="#FCA10F" accessibilityLabel="Ajouter cet article à votre commande actuelle" />
            </View>
        );
    }


}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: "column"
    },
    header: {
        flex: 1,
        marginBottom: 5,
        backgroundColor: "#fff",
        borderBottomColor: "#c5c5c0",
        borderBottomWidth: 1
    },
    image: {
        flex: 1,
        resizeMode: 'cover',
    },
    titleBox: {
        flexDirection: "row",
        justifyContent: "space-between",
        padding: 10
    },
    titleBoxText: {
        fontSize: 30
    },
    prize: {
        fontSize: 20,
        backgroundColor: "#FCA10F",
        borderRadius: 100,
        padding: 10,
        color: "#fff"
    }
});