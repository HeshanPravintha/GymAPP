import React, { Component } from 'react'
import { View, Text,Button } from 'native-base'
import { StyleSheet, TextInput, TouchableOpacity, ScrollView, } from 'react-native'

export default class SignUp extends Component {

    static navigationOptions = {
        header: null,
    };

    render() {
        return (
            <View style={{ flex: 0 }}>


                <View style={styles.logotext}>

                    <Text style={styles.logotext}>Logo</Text>
                </View>

                <View style={styles.signin}>
                    <Text style={styles.signin}>Sign In</Text>
                </View>

                <View style={styles.email}>
                    <TextInput
                        placeholder="Email"
                        style={styles.email} />
                </View>

                <View style={styles.password}>
                    <TextInput
                        placeholder="Password"
                        returnKeyType='go'
                        secureTextEntry
                        autoCorrect={false}
                        style={styles.password} />
                </View>
                <View style={styles.fixToText}>
                    <Button
                        title="Forget Password?"
                        onPress={() => Alert.alert('Left button pressed')}
                    />
                    <Button
                        title="Sign In"
                        onPress={() => Alert.alert('Right button pressed')}
                    />
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
    signin: {
        fontWeight: 'bold',
        marginTop: 65,
        fontSize: 25,
        backgroundColor: '#fff',
        alignItems: 'center',
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
    password: {
        marginTop: 0,
        padding: 15,
        fontSize: 16,
        backgroundColor: '#fff',
        //alignItems: 'center',
        justifyContent: 'center',
    },
    fixToText: {
        flexDirection: 'row',
        padding: 60,
        justifyContent: 'space-between',

    },

})
