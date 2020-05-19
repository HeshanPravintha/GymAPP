import React, { Component } from 'react'
import { View, Text, Button, Container, Item, Input , Card, Thumbnail,CardItem } from 'native-base'
import { StyleSheet, TextInput, TouchableOpacity, ScrollView, Dimensions ,FlatList } from 'react-native'


const { height, width } = Dimensions.get('window');
import * as firebase from 'firebase';

class Locker extends Component {
    
    constructor(props) {
        super(props);

        this.state = {
            profile: null,
            loader: true,
            locker_log: [], 
            locker_log_out: [],
            loadAtIN : true
        };


    }

    static navigationOptions = {
        headerTitle : null
    };

    componentDidMount(){
        const profile = this.props.navigation.getParam('profile', '')
        this.setState({
            profile: profile
        })


        this.getLockerTimeIn((res)=>{
            this.setState({
                loadAtIN : false
            })
        })

        this.getLockerTimeOut((res)=>{
            this.setState({
                loadAtIN : false
            })
        })
    }


    getLockerTimeIn(callback){
        var ref = firebase.database().ref("Locker_Log_Open");

        ref.once("value")
            .then((snapshot) => {
                var key = snapshot.key; // "ada"

                console.log(snapshot.val(), 'locker logins tika')

                // this.setState({
                //   profile: snapshot.val()
                // })
                snapshot.forEach((item) => {
                    console.log(item.val())
                    if (item.val() === this.state.profile.rfid_card_no) {
                        console.log('Match')
                        this.state.locker_log.push(item.key)
                    }

                    callback(true)
                });

                // callback(true)
            });
    }


    getLockerTimeOut(callback){
        var ref = firebase.database().ref("Locker_Log_Close");

        ref.once("value")
            .then((snapshot) => {
                var key = snapshot.key; // "ada"

                console.log(snapshot.val(), 'locker logins out tika')

                // this.setState({
                //   profile: snapshot.val()
                // })
                snapshot.forEach((item) => {
                    console.log(item.val())
                    if (item.val() === this.state.profile.rfid_card_no) {
                        console.log('Match')
                        this.state.locker_log_out.push(item.key)
                    }

                    callback(true)
                });

                // callback(true)
            });
    }
      
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
                <Text style={{marginTop: 20 , marginLeft :20, fontSize: 18,}}>Locker Log Open</Text>
                <View style={{ height: 4, width: 90, backgroundColor: '#4FBCB7', borderRadius: 20 / 2, marginTop: 6, marginLeft: 20 }}></View>

                <View >
                        <FlatList

                            data={this.state.locker_log}
                            showsHorizontalScrollIndicator={false}

                            renderItem={({ item, index }) => {
                                console.log(item)
                                return (
                                    <View >
                                           <Text style={{marginTop: 20 , marginLeft :20, fontSize: 16,}}>Locker Open : {item} IST</Text>
                                    </View>

                                )
                            }}
                        />

                    </View>

           
             
              
                </View>


                <Text style={{marginTop: 20 , marginLeft :20, fontSize: 18,}}>Locker Log Close</Text>
                <View style={{ height: 4, width: 90, backgroundColor: '#4FBCB7', borderRadius: 20 / 2, marginTop: 6, marginLeft: 20 }}></View>
                <View >
                        <FlatList

                            data={this.state.locker_log_out}
                            showsHorizontalScrollIndicator={false}

                            renderItem={({ item, index }) => {
                                console.log(item)
                                return (
                                    <View >
                                            <Text style={{marginTop: 20 , marginLeft :20, fontSize: 16,}}>Locker Close : {item} IST</Text>
                                    </View>

                                )
                            }}
                        />

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