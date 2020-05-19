import React, { Component } from 'react'
import { View, Text, Button, Container, Item, Input , Card, Thumbnail,CardItem } from 'native-base'
import { StyleSheet, TextInput, TouchableOpacity, ScrollView, Dimensions } from 'react-native'


const { height, width } = Dimensions.get('window');


class Profile extends Component {
    
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
                    <Text style={styles.profiletext}>Profile</Text>
                </View>

                <View>
                <Thumbnail style={{marginTop: 10, borderRadius : 200/2, alignSelf: 'center', height: 200 , width :200}} source={require('../../Images/My.jpg')} />
                </View>
                <View>
                    <Text style={{marginTop: 30 , alignSelf : 'center' , fontWeight : 'bold' ,  fontSize: 30,}}>Heshan Pravintha</Text>
                    <Text style={{marginTop: 10 , alignSelf : 'center' , fontSize: 18,}}>Colombo | Sri Lanka</Text>

                    <View style={{marginTop : 10, flexDirection : 'row' , alignSelf : 'center'}}>
                        <View>
                        <Text style={{marginTop: 10 , marginLeft : 10,  alignSelf : 'center',fontSize: 18,}}>Age</Text>
                        <Text style={{marginTop: 10 , marginLeft : 10,alignSelf : 'center',fontSize: 18, fontWeight : '600'}}>25</Text>
                        </View>

                        <View>
                        <Text style={{marginTop: 10 ,marginLeft : 10, alignSelf : 'center',fontSize: 18,}}>Weight</Text>
                        <Text style={{marginTop: 10 ,marginLeft : 10, alignSelf : 'center',fontSize: 18, fontWeight : '600'}}>50KG</Text>
                        </View>

                        <View>
                        <Text style={{marginTop: 10 ,marginLeft : 10, alignSelf : 'center',fontSize: 18,}}>Height</Text>
                        <Text style={{marginTop: 10 ,marginLeft : 10, alignSelf : 'center',fontSize: 18, fontWeight : '600'}}>5.7in</Text>
                        </View>
                   
                    </View>
                </View>

                <View>
                <Text style={{marginTop: 20 , marginLeft :20, fontSize: 18,}}>Attendance Log</Text>
                <View style={{ height: 4, width: 130, backgroundColor: '#4FBCB7', borderRadius: 20 / 2, marginTop: 6, marginLeft: 20 }}></View>
                <Text style={{marginTop: 20 , marginLeft :20, fontSize: 16,}}>In : 14th May 2020  18:20 IST</Text>
                <Text style={{marginTop: 20 , marginLeft :20, fontSize: 16,}}>Out : 14th May 2020  20:20 IST</Text>
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
export default Profile