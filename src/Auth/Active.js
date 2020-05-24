import React, { Component } from 'react'
import { View, Text, Button, Container, Item, Input, Card, Thumbnail, CardItem } from 'native-base'
import { StyleSheet, TextInput, TouchableOpacity, ScrollView, Dimensions, FlatList } from 'react-native'

import * as firebase from 'firebase';
export default class Active extends Component {

    constructor(props) {
        super(props);


        this.state = {
            profile: null,
            loader: true,
            online_Count: 0
        };
    }



    componentDidMount() {

        this.getActiveCount(() => {
            this.setState({
              loader: false
            })
          });

    }

    getActiveCount(callback) {
        var ref = firebase.database().ref("Online_count");

        ref.once("value")
            .then((snapshot) => {
                var key = snapshot.key; // "ada"

                console.log(snapshot.val(), 'online count eka')

                this.setState({
                    online_Count: snapshot.val()
                })
                // snapshot.forEach((item) => {
                //     console.log(item.val())
                //     if (item.val() === this.state.profile.rfid_card_no) {
                //         console.log('Match')
                //         this.state.attendance_log.push(item.key)
                //     }

                //     callback(true)
                // });

                callback(true)
            });
    }


    render() {
        return (
            <ScrollView style={{ flex: 1, backgroundColor: '#fff' }}>

                <View>
                    <Text style={{ margin: 20, fontSize: 24, fontWeight: 'bold' }}>Acitve User Count</Text>

                     <Text style={{ margin: 20, fontSize: 52, fontWeight: 'bold', textAlign: 'center' }}>{this.state.online_Count}</Text>
                </View>
            </ScrollView>
        )
    }
}
