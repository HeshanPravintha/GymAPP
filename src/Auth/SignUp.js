import React, { Component } from 'react'
import { View, Text, Button, Container, Item , Input} from 'native-base'
import { StyleSheet, TextInput, TouchableOpacity, ScrollView, Dimensions } from 'react-native'

const { height, width } = Dimensions.get('window');


export default class SignUp extends Component {

    static navigationOptions = {
        header: null,
    };

    render() {
        return (
            
            <View style={{ flex: 0 , backgroundColor : "white" }}>


                <View style={styles.logotext}>

                    <Text style={styles.logotext}>Logo</Text>
                </View>

                <View style={styles.signup}>
                    <Text style={styles.signup}>Sign Up</Text>
                </View>
                
<View>
                <View style={styles.name}>
                <Item>
                <Input placeholder='Name' />
                </Item>
                </View>
                <View style={styles.email}>
                <Item>
                <Input placeholder='Email' />
                </Item>
                </View>
                <View style={styles.mobile}>
                <Item>
                <Input placeholder='Mobile Number' />
                </Item>
                </View>
</View>
                <View style={styles.password}>
                <Item>
                                <Input placeholder='Password' secureTextEntry={true} />
                            </Item>
                </View>
                <View style={styles.fixToText}>
                    <Button bordered 
                    style={{height: 40 , 
                        borderColor:'#4FBCB7',
                        
                        width : width * 0.4 ,
                        justifyContent: 'center'
                    }}
                        title="Forget Password?"
                        onPress={() => Alert.alert('Left button pressed')}
                    >
<Text style={{textAlign: 'center' , fontSize: 12}}>Forget Password?</Text>

                    </Button>
                    <Button onPress={() => {
                                this.props.navigation.navigate('MoreDetails')
                            }}>
                    
                        
                        <Text style={{textAlign: 'center' , fontSize: 12}}>Sign In</Text>
                    </Button>
                </View>
                <View style={styles.signupHintView}>
                            <Text style={styles.txtNewaccount}>
                                Do you have account?
                            </Text>

                            <TouchableOpacity onPress={() => {
                                this.props.navigation.navigate('SignIn')
                            }}>
                                <Text style={styles.txtSignup}>
                                    Sign In
                            </Text>
                            </TouchableOpacity>

                        </View>
                        
            </View>


        );

    }

}


const styles = StyleSheet.create({
    logotext: {
        fontWeight: 'bold',
        fontSize: 50,
        marginTop: 65,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
    signup: {
        fontWeight: 'bold',
        marginTop: 40,
        fontSize: 25,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },

    
name: {
    marginTop: 1,
    padding: 15,
    fontSize: 16,
    backgroundColor: '#fff',
    //alignItems: 'center',
    justifyContent: 'center',
},
    email: {
    marginTop: 1,
        padding: 15,
        fontSize: 16,
        backgroundColor: '#fff',
        //alignItems: 'center',
        justifyContent: 'center',
    },       
        mobile: {
            marginTop: 1,
                padding: 15,
                fontSize: 16,
                backgroundColor: '#fff',
                //alignItems: 'center',
                justifyContent: 'center',

    },
    password: {
        marginTop: 0,
        padding: 15,
        fontSize: 16,
        backgroundColor: '#fff',
        //alignItems: 'center',
        justifyContent: 'center',
    },
    fixToText: {
        marginLeft : 20,
        marginRight: 20,
        flexDirection: 'row',
//        padding: 60, *Bad Code Too High Padding
        justifyContent: 'space-between',
   
},
signupHintView: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginBottom: 30,
},
    txtNewaccount: {
        
        color: 'grey',
        fontSize: 16,
        textAlign: 'center',
    },
    txtSignup: {
        fontSize: 16,
        
        color: '#4FBCB7',
        marginLeft: 5
    },

})
