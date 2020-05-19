import React, { Component } from 'react'
import { View, Text, Button, Container, Item, Input, Card, Thumbnail, CardItem } from 'native-base'
import { StyleSheet, TextInput, TouchableOpacity, ScrollView, Dimensions } from 'react-native'


const { height, width } = Dimensions.get('window');


class Pool extends Component {

    constructor(props) {
        super(props);

    }

    static navigationOptions = {
        headerTitle: null
    };

    render() {
        return (

            <View style={{ flex: 1, backgroundColor: '#fff' }}>

                <View>
                    <Text style={styles.profiletext}>Pool Info</Text>
                </View>

                <View style={{ marginTop: 20, height: 150, width: '100%', backgroundColor: '#4FBCB7' }}>
                    <Text style={{ alignSelf: 'center', marginTop: 10, fontSize: 62, fontWeight: 'bold', color: 'white' }}>52 ph</Text>
                    <Text style={{ alignSelf: 'center', marginTop: 10, fontSize: 20, color: 'white' }}>Pool ph Value</Text>
                </View>

                <View>
                    <Text style={{ fontSize: 18, marginLeft: 20, marginTop: 20 }}>Pool Review</Text>
                </View>

                <View>
                    <Text style={{ fontSize: 16, marginLeft: 20, marginTop: 20 }}>Amazing Pool Experience</Text>
                    <Text style={{ fontSize: 16, marginLeft: 20, marginTop: 10 }}>20th May 2020</Text>
                </View>

                <View style={{position : 'absolute' , bottom : 80 , width: '100%'}} >
                        <Item rounded style={{ alignSelf : 'center', marginTop : 20, width :'90%'}}>
                            <Input rounded style={{marginLeft : 20 , marginRight :20 ,width: 100}} placeholder='Your Review' onChangeText={email => this.setState({ email })}/>
                        </Item>
                    </View>

                <TouchableOpacity style={{position : 'absolute' , bottom :0 ,width: '100%'}}>
                    
                    <View style={{ width: '100%', backgroundColor: '#4FBCB7', height: 60 }}>
                        <Text style={{ textAlign: 'center', fontSize: 16, marginLeft: 20, marginTop: 20, color: 'white' }}>Add Pool Review</Text>
                    </View>
                </TouchableOpacity>


            </View>


        );

    }

}


const styles = StyleSheet.create({
    profiletext: {
        fontWeight: 'bold',
        fontSize: 30,
        marginTop: 20,

        marginLeft: 20,
        backgroundColor: '#fff',
        //alignItems: 'center',
        justifyContent: 'center',
    },


})
export default Pool