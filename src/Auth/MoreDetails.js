import React, { Component } from 'react'
import { View, Text, Button, Container, Item, Input } from 'native-base'
import { StyleSheet, TextInput, TouchableOpacity, ScrollView, Dimensions } from 'react-native'

const { height, width } = Dimensions.get('window');
import * as firebase from 'firebase';

class MoreDetails extends Component {
    
    constructor(props) {
        super(props);

        this.state = {
            age: null,
            gender: null,
            gymid: null,
            weight: null,
            height: null,
            contactno: null,
        };
    }

    static navigationOptions = {
        header: null,
    };
    
        saveUserData(userId, age, gender, gymid, weight, height, contactno) {
            firebase.database().ref('users/' + userId).set({
              Age: age,
              Gender: gender,
              GymID: gymid,
              Weight: weight,
              Height: height,
              ContactNo: contactno,
            }, { merge: true }).then((res) => {
                console.log(res, 'User Data Saved created')
                callback('res', null)
            
              }).catch((err) => {
                console.log('Error writing document : ', err)
                callback(null, err)
              
              
            });
          }   
      
    render() {
        const name = this.props.navigation.getParam('name', null);
        console.log(this.props)
        return (

            <View style={{ flex: 1, backgroundColor: '#fff' }}>

                <View>
                    <Text style={styles.hellotext}>Hello , {name}</Text>
                </View>

                <View style={styles.welcometext}>
                    <Text style={styles.text2}>Welcome to Gym App we need more details about you!</Text>
                </View>
                <View style={styles.formView}>
                    <View style={styles.NameView}>
                        <Item regular>
                            <Input placeholder='Age' onChangeText={age=>{
                                    this.setState({
                                        age : age
                                    })
                                }} />
                        </Item>
                    </View>
                    <View style={styles.GenderView}>
                        <Item regular>
                            <Input placeholder='Gender' onChangeText={gender=>{
                                    this.setState({
                                        gender : gender
                                    })
                                }}/>
                        </Item>
                    </View>
                    <View style={styles.GymidView}>
                        <Item regular>
                            <Input placeholder='Gym ID' onChangeText={gymid=>{
                                    this.setState({
                                        gymid : gymid
                                    })
                                }} />
                        </Item>
                    </View>
                    <View style={styles.WeightView}>
                        <Item regular>
                            <Input placeholder='Weight' onChangeText={weight=>{
                                    this.setState({
                                        weight : weight
                                    })
                                }}/>
                        </Item>
                    </View>
                    <View style={styles.HeightView}>
                        <Item regular>
                            <Input placeholder='Height' onChangeText={height=>{
                                    this.setState({
                                        height : height
                                    })
                                }}/>
                        </Item>
                    </View>
                    <View style={styles.ContactView}>
                        <Item regular>
                            <Input placeholder='Contact No' onChangeText={contactno=>{
                                    this.setState({
                                        contactno : contactno
                                    })
                                }}/>
                        </Item>
                    </View>
                    

            

                </View>

                <View style={styles.buttonView}>
                    <TouchableOpacity onPress={()=>{
                            this.setState({
                                loader : true,
                                error : false
                            })
                            this.props.saveUserData(this.state.age , this.state.gender , this.state.gymid , this.state.weight , this.state.height , (res , err)=>{
                                if(res){
                                    this.props.navigation.navigate('Home')
                                    this.setState({
                                        loader : false
                                    })
                                }else{
                                    this.setState({
                                        error : true
                                    })
                                }
                                
                            })
                           
                        }}>
                        <View style={styles.btnNext}>
                            <Text style={styles.txtNext}>Next</Text>
                        </View>
                    </TouchableOpacity>
                </View>
                <View style={{ flex: 1, justifyContent: 'flex-end', marginBottom: 20 }}>
                    <Text style={styles.txtCopyright}>
                        All Rights Reserved By Gym App
                 </Text>
                </View>

            </View>


        );

    }

}


const styles = StyleSheet.create({
    hellotext: {
        //fontWeight: 'bold',
        fontSize: 30,
        marginTop: 45,
        marginLeft: 20,
        backgroundColor: '#fff',
        //alignItems: 'center',
        justifyContent: 'center',
    },

    welcometext: {
        marginTop: 4,
        marginLeft: 20,
        //fontSize: 2,
        backgroundColor: '#fff',
        justifyContent: 'center',
    },
    formView: {
        marginTop: 20,
        marginLeft: 20,
        marginRight: 20
    },
    NameView: {
        marginTop: 12
    },
    GenderView: {
        marginTop: 25
    },
    GymidView: {
        marginTop: 25
    },
    WeightView: {
        marginTop: 25
    },
    HeightView: {
        marginTop: 25
    },
    ContactView: {
        marginTop: 25
    },
    buttonView: {
        marginLeft: 20,
        marginRight: 20,
        marginTop: 55,
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    btnNext: {
        height: 50,
        width: width * 0.9,
        backgroundColor: '#4FBCB7',
        justifyContent: 'center'
    },
    txtNext: {
        fontSize: 14,
        textAlign: 'center',
        fontWeight: 'bold',
        color: 'white'
    },
    txtCopyright: {
        textAlign: 'center',
        fontSize: 12
    },
})
export default MoreDetails