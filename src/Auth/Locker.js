import React, { Component } from 'react'
import { View, Text, Button, Container, Item, Input , Card, Thumbnail,CardItem } from 'native-base'
import { StyleSheet, TextInput, TouchableOpacity, ScrollView, Dimensions } from 'react-native'


const { height, width } = Dimensions.get('window');


class Locker extends Component {
    
    constructor(props) {
        super(props);

    }

    static navigationOptions = {
        headerTitle : null
    };
      
    render() {
        return (

            <View style={{ flex: 1, backgroundColor: '#fff' }}>

                <View>
                    <Text style={styles.profiletext}>Locker</Text>
                </View>

                <View>
                <Thumbnail style={{marginTop: 10, borderRadius : 200/2, alignSelf: 'center', height: 200 , width :200}} source={require('../../Images/lock.png')} />
                </View>

                <View>
                <Text style={{marginTop: 20 , marginLeft :20, fontSize: 18,}}>Locker Log</Text>
                <View style={{ height: 4, width: 90, backgroundColor: '#4FBCB7', borderRadius: 20 / 2, marginTop: 6, marginLeft: 20 }}></View>
                <Text style={{marginTop: 20 , marginLeft :20, fontSize: 16,}}>Locker Open : 14th May 2020  18:20 IST</Text>
                <Text style={{marginTop: 20 , marginLeft :20, fontSize: 16,}}>Locker Close : 14th May 2020  20:20 IST</Text>
                </View>
          
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
export default Locker