import React, { Component } from 'react'
import { View, Text, Button, Container, Item, Input, Thumbnail } from 'native-base'
import { StyleSheet, TextInput, TouchableOpacity, ScrollView, Dimensions } from 'react-native'
import { connect } from 'react-redux'
const { height, width } = Dimensions.get('window');

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


import * as firebase from 'firebase';


class AdminLogin extends Component {

    constructor(props) {
        super(props);

        this.state = {
            email: null,
            password: '',
            loginLoader: false,
            error : false,
            errorMsg  :''

        };
    }
    userLogin = async (email, password) => {
        console.log('login')
        this.setState({
            error : false,
            loginLoader: true
        })

       await firebase.auth().signInWithEmailAndPassword(email, password).then(res => {
            this.setState({
                loginLoader: false
            })
            console.log(res.user.email),
                this.props.navigation.navigate('AdminHome')
        }).catch((e) => {
            console.log(e , 'Error')
            this.setState(  {
                loginLoader: false,
                error : true,
                errorMsg : e.message
            })
        });

    };

    static navigationOptions = {
        header: null,
    };

    renderErrorModal(){
        return(
            <View>
                <Text style={{marginLeft : 20 , fontSize : 14, color : 'red'}}>
                    {this.state.errorMsg}
                </Text>
            </View>
        )
    }

    render() {
        return (

            <ScrollView style={{ flex: 1, backgroundColor: '#fff' }}>
                <View style={{ flex: 1, marginTop: 40, alignSelf: 'center', marginBottom: 20 }}>
                    <Thumbnail style={{ height: 100, width: 100 }} source={require('../../Images/logo.png')} />
                </View>
                <View>
                    <Text style={styles.mainSignIntxt}>Admin Portal Sign In</Text>
                </View>
                <View style={styles.formView}>
                    <View>
                        <Item>
                            <Input placeholder='Email' onChangeText={email => this.setState({ email })}
                            />
                        </Item>
                    </View>

                    <View style={styles.inputPasswordView}>
                        <Item>
                            <Input placeholder='Password' secureTextEntry={true} onChangeText={password => this.setState({ password })} />
                        </Item>
                    </View>

                </View>

                <View style={styles.buttonView}>

                    <View style={styles.btnForgetPw}>
                        <Text style={styles.txtForgetPw}>Forget Password</Text>
                    </View>
                    <TouchableOpacity onPress={() => this.userLogin(this.state.email, this.state.password)}>
                        <View style={styles.btnSignIn}>
                            {this.state.loginLoader ? (
                                <MaterialIndicator color='white' />
                            ) : (
                                    <Text style={styles.txtSignIn}>Sign In</Text>
                                )}


                        </View>
                    </TouchableOpacity>


                </View>

                <View style={styles.signupView}>
                    <Text style={styles.txtMsg}>
                        Dont You Have Acocunt ?
                 </Text>
                    <TouchableOpacity onPress={() => {
                        this.props.navigation.navigate('SignUp')
                    }}>

                        <Text style={styles.txtSignUp}> SignUp</Text>
                    </TouchableOpacity>
                </View>

                <View style={{ flex: 1, justifyContent: 'flex-end', marginBottom: 20 }}>
                    <Text style={styles.txtCopyright}>
                        All Rights Reserved By Gym App
                 </Text>
                </View>

                {this.state.error ? (
                    this.renderErrorModal()
                ) : null}

                    
            </ScrollView>


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
    mainSignIntxt: {
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
    btnForgetPw: {
        height: 50,
        width: width * 0.4,
        borderWidth: 2,
        borderColor: '#4FBCB7',
        justifyContent: 'center'
    },
    txtForgetPw: {
        fontSize: 14,
        textAlign: 'center',
        color: '#4FBCB7',
        fontWeight: 'bold'
    },
    btnSignIn: {
        height: 50,
        width: width * 0.4,
        backgroundColor: '#4FBCB7',
        justifyContent: 'center'
    },
    txtSignIn: {
        fontSize: 14,
        textAlign: 'center',
        fontWeight: 'bold',
        color: 'white'
    },
    signupView: {
        flexDirection: 'row',
        justifyContent: 'center',
        margin: 20
    },
    txtMsg: {
        textAlign: 'center',
        fontSize: 14
    },
    txtSignUp: {
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


export default connect(mapStateToProps)(AdminLogin);