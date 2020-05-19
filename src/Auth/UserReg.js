import React, { Component } from 'react'
import { StyleSheet } from 'react-native'
import { View, Text, Input, Item } from 'native-base'
import { ScrollView, TouchableOpacity } from 'react-native-gesture-handler';
import RNPickerSelect from 'react-native-picker-select';



import * as firebase from 'firebase';

import {
    BallIndicator,
    BarIndicator,
    DotIndicator,
    MaterialIndicator,
    PacmanIndicator,
    PulseIndicator,
    SkypeIndicator,
    UIActivityIndicator,
    WaveIndicator,
} from 'react-native-indicators';

export default class UserRed extends Component {

    constructor(props) {
        super(props);


        this.state = {
            email : '',
            name : '',
            password: '',
            age : '',
            city : '',
            country : '',
            height : '',
            weight : '',
            profile: null,
            loader: true,
            rfid : [],
            rfid_card_no : '',
            loadingRFID : true,
            loadingBtn : false
        };
    }

    componentDidMount(){
        this.getRFID((res)=>{
            this.setState({
                loadingRFID : false
            })
        })
    }

    static navigationOptions = {
        header: null,
    };

    registerUser = (email , password) => {
        this.setState({
            loadingBtn : true
        })
        console.log(email , password)
        firebase.auth().createUserWithEmailAndPassword(email, password).then(res=>{
            console.log(res.user.uid , 'User Ref')

            this.setState({
                loader: true
            })
            firebase.database().ref('Users').child(res.user.uid).push({
                rfif_card_no : this.state.rfid_card_no,
                name : this.state.name,
                age: this.state.age,
                city :this.state.city,
                country :this.state.country,
                height :this.state.height,
                weight :this.state.weight,
                
            }).then(res => {
                console.log(res , 'responce')
                this.setState({
                    loadingBtn : false
                })
                this.props.navigation.navigate('AdminHome' , {sucess : true})
            });
    
        }).catch((e)=>{
            console.log(e , 'error')
            this.setState({
                loadingBtn : false
            })
        })
    }


    getRFID = (callback) => { 
        var ref = firebase.database().ref("RFID");

        ref.once("value")
            .then((snapshot) => {
                var key = snapshot.key; // "ada"

                console.log(snapshot.val(), 'RFID TIKA')

                // this.setState({
                //   profile: snapshot.val()
                // })
                snapshot.forEach((item) => {
                    console.log(item.val())
                    this.state.rfid.push(
                        {
                            label : item.val(),
                            value : item.val()
                        }
                    )
                    callback(true)
                });

                // callback(true)
            });
    }



    render() {
        const placeholder = {
            label: 'Select The RFID Card',
            value: 0,
            color: '#9EA0A4',
        };
        return (
            <View style={{ flex: 1 }}>
                <ScrollView style={{ flex: 1, backgroundColor: 'white' }}>
                    <View style={{ marginTop: 50, marginLeft: 20 }}>
                        <Text style={{ fontSize: 32, fontWeight: 'bold' }}>User Registration</Text>
                    </View>

                    <View style={{ alignSelf: 'center' }}>

                        <View style={{marginTop : 20}}>
                            <RNPickerSelect
                                  pickerProps={{ style: { height: 214, overflow: 'hidden' } }}
                                  placeholder={placeholder}
                                  style={{
                                    ...pickerSelectStyles,
                                    placeholder: {
                                        textAlign: "center",
                                        color: 'white',
                                        fontSize: 14,
    
                                    },
                                }}
                                onValueChange={(value) => this.setState({rfid_card_no : value})}
                                items={this.state.rfid}
                            />

                        </View>


                        <Item style={{ width: '90%', marginTop: 20 }} >
                            <Input style={{ width: '90%', borderColor: 'grey', borderWidth: 1, borderRadius: 10 }} placeholder='Name' onChangeText={name => this.setState({ name })}
                            />
                        </Item>

                        <Item style={{ width: '90%', marginTop: 20 }} >
                            <Input style={{ width: '90%', borderColor: 'grey', borderWidth: 1, borderRadius: 10 }} placeholder='Email' onChangeText={email => this.setState({ email })}
                            />
                        </Item>

                        <Item style={{ width: '90%', marginTop: 20 }} >
                            <Input style={{ width: '90%', borderColor: 'grey', borderWidth: 1, borderRadius: 10 }} placeholder='Password' onChangeText={password => this.setState({ password })}
                            />
                        </Item>

                        <Item style={{ width: '90%', marginTop: 20 }} >
                            <Input style={{ width: '90%', borderColor: 'grey', borderWidth: 1, borderRadius: 10 }} placeholder='Age' onChangeText={age => this.setState({ age })}
                            />
                        </Item>

                        <Item style={{ width: '90%', marginTop: 20 }} >
                            <Input style={{ width: '90%', borderColor: 'grey', borderWidth: 1, borderRadius: 10 }} placeholder='City' onChangeText={city => this.setState({ city })}
                            />
                        </Item>

                        <Item style={{ width: '90%', marginTop: 20 }} >
                            <Input style={{ width: '90%', borderColor: 'grey', borderWidth: 1, borderRadius: 10 }} placeholder='Country' onChangeText={country => this.setState({ country })}
                            />
                        </Item>

                        <Item style={{ width: '90%', marginTop: 20 }} >
                            <Input style={{ width: '90%', borderColor: 'grey', borderWidth: 1, borderRadius: 10 }} placeholder='Height' onChangeText={height => this.setState({ height })}
                            />
                        </Item>

                        <Item style={{ width: '90%', marginTop: 20 }} >
                            <Input style={{ width: '90%', borderColor: 'grey', borderWidth: 1, borderRadius: 10 }} placeholder='Weight' onChangeText={weight => this.setState({ weight })}
                            />
                        </Item>

                    </View>


                </ScrollView>

                <View style={{ position: 'absolute', bottom: 30, width: '100%' }} >
                    <TouchableOpacity onPress={() => this.registerUser(this.state.email , this.state.password)}>
                        <View style={{ alignSelf: 'center', width: '70%', height: 50, backgroundColor: '#4FBCB7', borderRadius: 50 / 2, justifyContent: 'center' }}>
                            {this.state.loadingBtn ? (
                                <MaterialIndicator color='white' />
                            ): (
                                <Text style={{ textAlign: 'center', color: 'white', fontWeight: 'bold', fontSize: 18 }}> Submit Member</Text>
                            ) }
                           
                        </View>
                    </TouchableOpacity>

                </View>
            </View>


        )
    }
}

const pickerSelectStyles = StyleSheet.create({
    inputIOS: {
        fontSize: 14,
        paddingVertical: 12,
        paddingHorizontal: 10,
        height: 40,
        borderRadius: 30,
        textAlign: 'center',
        color: 'white',
        backgroundColor: '#4FBCB7',
        paddingRight: 30, // to ensure the text is never behind the icon
    },
    inputAndroid: {
        fontSize: 14,
        paddingVertical: 12,
        paddingHorizontal: 10,
        height: 40,
        borderRadius: 30,
        textAlign: 'center',
        color: 'white',
        backgroundColor: '#4FBCB7',
        paddingRight: 30 // to ensure the text is never behind the icon
    },
});