import React, { Component } from 'react'
import { View, Text, Button, Container, Item, Input, Card, Thumbnail, CardItem } from 'native-base'
import { StyleSheet, TextInput, TouchableOpacity, ScrollView, Dimensions , FlatList } from 'react-native'


const { height, width } = Dimensions.get('window');
import * as firebase from 'firebase';

class Profile extends Component {

    constructor(props) {
        super(props);

        this.state = {
            profile: null,
            loader: true,
            attendance_log: [], 
            attendance_log_out: [],
            loadAtIN : true
        };

    }

    componentDidMount() {

        const profile = this.props.navigation.getParam('profile', '')
        this.setState({
            profile: profile
        })

        this.getAttendenceLogIn((res)=>{
            this.setState({
                loadATiN : false
            })
        })

        this.getAttendenceLogOut((res)=>{
            this.setState({
                loadATiN : false
            })
        })
    }

    static navigationOptions = {
        headerTitle: null
    };

    getAttendenceLogIn(callback) {
        var ref = firebase.database().ref("Door_Log_IN");

        ref.once("value")
            .then((snapshot) => {
                var key = snapshot.key; // "ada"

                console.log(snapshot.val(), 'logins tika')

                // this.setState({
                //   profile: snapshot.val()
                // })
                snapshot.forEach((item) => {
                    console.log(item.val())
                    if (item.val() === this.state.profile.rfid_card_no) {
                        console.log('Match')
                        this.state.attendance_log.push(item.key)
                    }

                    callback(true)
                });

                // callback(true)
            });
    }


    getAttendenceLogOut(callback) {
        var ref = firebase.database().ref("Door_Log_OUT");

        ref.once("value")
            .then((snapshot) => {
                var key = snapshot.key; // "ada"

                console.log(snapshot.val(), 'login OUT tika')

                // this.setState({
                //   profile: snapshot.val()
                // })
                snapshot.forEach((item) => {
                    console.log(item.val())
                    if (item.val() === this.state.profile.rfid_card_no) {
                        console.log('Match')
                        this.state.attendance_log_out.push(item.key)
                    }

                    callback(true)
                });

                // callback(true)
            });
    }

    render() {
        console.log(this.state.attendance_log)
        return (

            <ScrollView style={{ flex: 1, backgroundColor: '#fff' }}>

                <View>
                    <Text style={styles.profiletext}>Profile</Text>
                </View>

                <View>
                    <Thumbnail style={{ marginTop: 10, borderRadius: 200 / 2, alignSelf: 'center', height: 200, width: 200 }} source={require('../../Images/My.jpg')} />
                </View>
                <View>
                    <Text style={{ marginTop: 30, alignSelf: 'center', fontWeight: 'bold', fontSize: 30, }}>{this.state.profile ? this.state.profile.name : ''}</Text>
                    <Text style={{ marginTop: 10, alignSelf: 'center', fontSize: 18, }}>{this.state.profile ? this.state.profile.city : ''} | {this.state.profile ? this.state.profile.country : ''}</Text>

                    <View style={{ marginTop: 10, flexDirection: 'row', alignSelf: 'center' }}>
                        <View>
                            <Text style={{ marginTop: 10, marginLeft: 10, alignSelf: 'center', fontSize: 18, }}>Age</Text>
                            <Text style={{ marginTop: 10, marginLeft: 10, alignSelf: 'center', fontSize: 18, fontWeight: '600' }}>{this.state.profile ? this.state.profile.age : ''}</Text>
                        </View>

                        <View>
                            <Text style={{ marginTop: 10, marginLeft: 10, alignSelf: 'center', fontSize: 18, }}>Weight</Text>
                            <Text style={{ marginTop: 10, marginLeft: 10, alignSelf: 'center', fontSize: 18, fontWeight: '600' }}>{this.state.profile ? this.state.profile.weight : ''}</Text>
                        </View>

                        <View>
                            <Text style={{ marginTop: 10, marginLeft: 10, alignSelf: 'center', fontSize: 18, }}>Height</Text>
                            <Text style={{ marginTop: 10, marginLeft: 10, alignSelf: 'center', fontSize: 18, fontWeight: '600' }}>{this.state.profile ? this.state.profile.height : ''}</Text>
                        </View>

                    </View>
                </View>

                <View>
                    <Text style={{ marginTop: 20, marginLeft: 20, fontSize: 18, }}>Attendance Log In</Text>
                    <View style={{ height: 4, width: 150, backgroundColor: '#4FBCB7', borderRadius: 20 / 2, marginTop: 6, marginLeft: 20 }}></View>


                    <View >
                        <FlatList

                            data={this.state.attendance_log}
                            showsHorizontalScrollIndicator={false}

                            renderItem={({ item, index }) => {
                                console.log(item)
                                return (


                                    <View >
                                        <Text style={{ marginTop: 20, marginLeft: 20, fontSize: 16, }}>In: {item} IST</Text>
                                    </View>

                                )
                            }}
                        />

                    </View>
                    

                 
                </View>


                <View style={{marginBottom : 20}}>
                    <Text style={{ marginTop: 20, marginLeft: 20, fontSize: 18, }}>Attendance Log Out</Text>
                    <View style={{ height: 4, width: 150, backgroundColor: '#4FBCB7', borderRadius: 20 / 2, marginTop: 6, marginLeft: 20 }}></View>


                    <View >
                        <FlatList

                            data={this.state.attendance_log_out}
                            showsHorizontalScrollIndicator={false}

                            renderItem={({ item, index }) => {
                                console.log(item)
                                return (


                                    <View >
                             <Text style={{ marginTop: 20, marginLeft: 20, fontSize: 16, }}>Out : {item} IST</Text>
                                    </View>

                                )
                            }}
                        />

                    </View>
                    

                    
                  
                </View>

            </ScrollView>


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