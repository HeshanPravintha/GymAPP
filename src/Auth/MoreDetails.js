import React, { Component } from 'react'
import { View, Text, Button, Container, Item, Input } from 'native-base'
import { StyleSheet, TextInput, TouchableOpacity, ScrollView, Dimensions } from 'react-native'

const { height, width } = Dimensions.get('window');


class MoreDetails extends Component {

    static navigationOptions = {
        header: null,
    };

    render() {
        console.log(this.props)
        return (

            <View style={{ flex: 1, backgroundColor: '#fff' }}>

                <View>
                    <Text style={styles.hellotext}>Hello Heshan,</Text>
                </View>

                <View style={styles.welcometext}>
                    <Text style={styles.text2}>Welcome to Gym App we need more details about you!</Text>
                </View>
                <View style={styles.formView}>
                    <View style={styles.NameView}>
                        <Item regular>
                            <Input placeholder='Name' />
                        </Item>
                    </View>
                    <View style={styles.GenderView}>
                        <Item regular>
                            <Input placeholder='Gender' />
                        </Item>
                    </View>
                    <View style={styles.GymidView}>
                        <Item regular>
                            <Input placeholder='Gym ID' />
                        </Item>
                    </View>
                    <View style={styles.WeightView}>
                        <Item regular>
                            <Input placeholder='Weight' />
                        </Item>
                    </View>
                    <View style={styles.HeightView}>
                        <Item regular>
                            <Input placeholder='Height' />
                        </Item>
                    </View>
                    <View style={styles.ContactView}>
                        <Item regular>
                            <Input placeholder='Contact No' />
                        </Item>
                    </View>
                    

            

                </View>

                <View style={styles.buttonView}>
                    <TouchableOpacity onPress={() => {
                        this.props.navigation.navigate('MoreDetails')
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
        fontWeight: 'bold',
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
        fontSize: 2,
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