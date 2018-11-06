import React, {Component} from 'react';
import {PushNotificationIOS} from 'react-native';
import PushNotification from 'react-native-push-notification';

export class RestaurantListener extends Component {
    constructor(props) {
        super(props);
        this.bipper = false;
        this.longitude = 7;
        this.latitude = 43.55;
        this.threshold = 0.005;
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

            requestPermissions: true,

            // IOS ONLY (optional): default: all - Permissions to register.
            permissions: {
                alert: true,
                badge: true,
                sound: true
            },

            visibility: "public",
            priority: "high",
            importance: "high"

        });

        this.watchId = navigator.geolocation.watchPosition(
            (position) => {
                if (!this.bipper && Math.abs(position.coords.longitude - this.longitude) < this.threshold
                  && Math.abs(position.coords.latitude - this.latitude) < this.threshold) { // activate bipper
                    this.bipper = true;
                    PushNotification.localNotification({
                        title: "Bipper activé",
                        message: "Votre téléphone sonnera quand votre commande sera prête.",
                    });
                } else if (this.bipper
                  && !(Math.abs(position.coords.longitude - this.longitude) < this.threshold
                  && Math.abs(position.coords.latitude - this.latitude) < this.threshold)) { //desactivate bipper
                    this.bipper = false;
                    PushNotification.localNotification({
                        title: "Bipper désactivé",
                        message: "Votre téléphone repasse en mode normal.",
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