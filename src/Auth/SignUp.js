import React, { Component } from 'react'
import { View, Text, Button, Container, Item, Input } from 'native-base'
import { StyleSheet, TextInput, TouchableOpacity, ScrollView, Dimensions } from 'react-native'
import { connect } from 'react-redux'

const { height, width } = Dimensions.get('window');

import { createUser , saveUserData } from '../actions';

class SignUp extends Component {

    constructor(props) {
        super(props);

        this.state = {
            email: null,
            password: '',
            loader: false,
            error: false

        };
    }
    static navigationOptions = {
        header: null,
    };

    render() {
        console.log(this.props)
        return (

            <View style={{ flex: 1, backgroundColor: '#fff' }}>
                <View style={styles.logoView}>
                    <Text style={styles.logoText}>Logo</Text>
                </View>
                <View>
                    <Text style={styles.mainSignUptxt}>Sign Up</Text>
                </View>
                <View style={styles.formView}>
                <View>
                        <Item>
                            <Input placeholder='Name' />
                        </Item>
                    </View>
                    <View style={styles.inputEmailView}>
                        <Item>
                            <Input placeholder='Email' />
                        </Item>
                    </View>

                    <View style={styles.inputPasswordView}>
                        <Item>
                            <Input placeholder='Password' secureTextEntry={true} />
                        </Item>
                    </View>

                </View>

                <View style={styles.buttonView}>
                        <TouchableOpacity onPress={() => {
                                this.props.navigation.navigate('MoreDetails')
                            }}>
                        <View style={styles.btnSignUp}>
                        <Text style={styles.txtSignUp}>Sign Up</Text>
                        </View>
                        </TouchableOpacity>
                        </View>

                <View style={styles.signinView}>
                    <Text style={styles.txtMsg}>
                        Dont You Have Acocunt ?
                 </Text>
                 <TouchableOpacity onPress={() => {
                                this.props.navigation.navigate('SignIn')
                            }}>
                    <Text style={styles.txtSignIn}> Sign In</Text>
                    </TouchableOpacity>
                </View>
 
                <View style={{flex: 1, justifyContent: 'flex-end' , marginBottom: 20}}>
                    <Text style={styles.txtCopyright}>
                            All Rights Reserved By Gym App
                 </Text>
                </View>

            </View>


        );

    }

}


const styles = StyleSheet.create({
    logoView: {
        marginTop: 30,
        alignSelf: 'center',
        backgroundColor: 'red',
        justifyContent: 'center',
        height: 200,
        width: 200
    },
    logoText: {
        textAlign: 'center',
        fontSize: 32,
        fontWeight: 'bold'
    },
    mainSignUptxt: {
        fontWeight: 'bold',
        marginTop: 40,
        fontSize: 25,
        backgroundColor: '#fff',
        textAlign: 'center',
        justifyContent: 'center',


    },

    formView: {
        marginTop: 20,
        marginLeft: 20,
        marginRight: 20
    },
    inputEmailView: {
        marginTop: 10
    },
    inputPasswordView: {
        marginTop: 10
    },
    buttonView: {
        marginLeft: 20,
        marginRight: 20,
        marginTop: 20,
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    btnSignUp: {
        height: 50,
        width: width * 0.9,
        backgroundColor: '#4FBCB7',
        justifyContent: 'center'
    },
    txtSignUp: {
        fontSize: 14,
        textAlign: 'center',
        fontWeight: 'bold',
        color: 'white'
    },
    signinView: {
        flexDirection: 'row',
        justifyContent: 'center',
        margin: 20
    },
    txtMsg: {
        textAlign: 'center',
        fontSize: 14
    },
    txtSignIn: {
        textAlign: 'center',
        fontSize: 14,
        fontWeight: 'bold',
        color: '#4FBCB7',
    },
    txtCopyright: {
        textAlign: 'center',
        fontSize: 12
    },
})


const mapStateToProps = state => {
    return {
      test: state.user.redux,
    };
  };
  


  export default connect(mapStateToProps, { createUser , saveUserData })(SignUp);
