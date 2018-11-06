import React, {Component} from 'react';
import {View, Alert, Text, FlatList, StyleSheet, TouchableOpacity} from 'react-native';
import PushNotification from 'react-native-push-notification';

export class RestaurantListener extends Component {
    constructor(props) {
        super(props);
    }

    componentWillMount() {

        PushNotification.configure({

            // (required) Called when a remote or local notification is opened or received
            onNotification: function(notification) {
                console.log( 'NOTIFICATION:', notification );

                // process the notification

                // required on iOS only (see fetchCompletionHandler docs: https://facebook.github.io/react-native/docs/pushnotificationios.html)
                notification.finish(PushNotificationIOS.FetchResult.NoData);
            },

            // IOS ONLY (optional): default: all - Permissions to register.
            permissions: {
                alert: true,
                badge: true,
                sound: true
            },

        });

        this.watchId = navigator.geolocation.watchPosition(
            (position) => {
                if (Math.abs(position.coords.longitude - 7) < 0.005 && Math.abs(position.coords.latitude - 43.55) < 0.005) {
                    //Alert.alert(position.coords.longitude + " " + position.coords.latitude);
                    PushNotification.localNotification({
                        title: "Hey!",
                        message: position.coords.longitude + " " + position.coords.latitude
                    });
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