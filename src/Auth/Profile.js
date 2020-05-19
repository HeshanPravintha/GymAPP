import React, { Component } from 'react'
import { View, Text, Button, Container, Item, Input , Card, CardItem } from 'native-base'
import { StyleSheet, TextInput, TouchableOpacity, ScrollView, Dimensions } from 'react-native'

const { height, width } = Dimensions.get('window');


class Profile extends Component {
    
    constructor(props) {
        super(props);

    }

    static navigationOptions = {
        header: null,
    };
      
    render() {
        return (

            <View style={{ flex: 1, backgroundColor: '#fff' }}>

                <View>
                    <Text style={styles.profiletext}>Profile</Text>
                </View>

                
            </View>


        );

    }

}


const styles = StyleSheet.create({
    profiletext: {
        //fontWeight: 'bold',
        fontSize: 30,
        marginTop: 45,
        marginLeft: 20,
        backgroundColor: '#fff',
        //alignItems: 'center',
        justifyContent: 'center',
    },

    
})
export default Profile