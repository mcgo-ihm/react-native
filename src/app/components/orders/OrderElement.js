import React, {Component} from 'react';
import {View, Text, StyleSheet, Image, TouchableOpacity} from 'react-native';

export class OrderElement extends Component {
    constructor(props) {
        super(props);
        this.meal = this.props.meal || {key: "Error", description: "Error", prize: "0,00€",
            thumbnailUri: "https://facebook.github.io/react-native/docs/assets/favicon.png"};
    }

    render() {
        return (
            <View style={styles.container}>
                <View style={styles.thumbnailContainer}>
                    <Image style={styles.thumbnailImage} source={{uri: this.meal.thumbnailUri}} />
                </View>
                <View style={styles.infos}>
                    <Text style={styles.label}>{this.meal.key}</Text>
                    <TouchableOpacity onPress={() => { this.props.remove(this.meal);}} style={styles.delete} activeOpacity={0.5}>
                        <Text style={styles.deleteText}>Suppr.</Text>
                    </TouchableOpacity>
                </View>
                <View style={{justifyContent: "center"}}>
                    <Text style={styles.prize}>{this.meal.prize}</Text>
                </View>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flexDirection: "row",
        backgroundColor: "#fff",
        height: 80,
        padding: 10
    },
    thumbnailContainer: {
        justifyContent: 'center',
        margin: 5
    },
    thumbnailImage: {
        width: 60,
        height: 60,
        borderRadius: 100
    },
    infos: {
        flex: 1,
        marginLeft: 5,
        justifyContent: 'space-between'
    },
    label: {
        fontSize: 20
    },
    delete: {
        backgroundColor: "#FCA10F",
        width: 60,
        elevation: 1.5,
        borderRadius: 15,
        padding: 2
    },
    deleteText: {
        color: "#fff",
        textAlign: "center"
    },
    prize: {
        fontSize: 15,
        backgroundColor: "#FCA10F",
        borderRadius: 100,
        padding: 7,
        color: "#fff"
    }
});