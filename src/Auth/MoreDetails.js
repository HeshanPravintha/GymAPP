import React, { Component } from 'react'
import { View, Text, Button, Container, Item , Input} from 'native-base'
import { StyleSheet, TextInput, TouchableOpacity, ScrollView, Dimensions } from 'react-native'

const { height, width } = Dimensions.get('window');


export default class MoreDetails extends Component {

    static navigationOptions = {
        header: null,
    };

    render() {
        return (
            
            <View style={{ flex: 0 , backgroundColor : "white" }}>


                <View style={styles.logotext}>

                    <Text style={styles.text1}>Hello Heshan,</Text>
                </View>

                <View style={styles.signup}>
                    <Text style={styles.text2}>Welcome to Gym App we need more details about you!</Text>
                </View>
                
<View>
                <View style={styles.Age}>
                <Item regular>
                <Input placeholder='Age' />
                </Item>
                </View>
                <View style={styles.Gender}>
                <Item regular>
                <Input placeholder='Gender' />
                </Item>
                </View>
                <View style={styles.Gymid}>
                <Item regular>
                <Input placeholder='Gym ID' />
                </Item>
            </View>
            <View style={styles.Weight}>
                <Item regular>
                <Input placeholder='Weight' />
                </Item>
                </View>
                <View style={styles.Height}>
                <Item regular>
                <Input placeholder='Height' />
                </Item>
                </View>
</View>
                <View>
                    <Button bordered onPress={() => {
                               this.props.navigation.navigate('Home')
                            }}>
            <Text>Click Me!</Text>
          </Button></View>
            </View>


        );

    }

}


const styles = StyleSheet.create({
    text1: {
        fontWeight: 'bold',
        fontSize: 30,
        marginTop: 45,
        marginRight: 5,
        backgroundColor: '#fff',
        //alignItems: 'center',
        justifyContent: 'center',
    },
    text2: {
        marginTop: 4,
        fontSize: 15,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },

    
    Age: {
    marginTop: 1,
    padding: 15,
    fontSize: 16,
    backgroundColor: '#fff',
    //alignItems: 'center',
    justifyContent: 'center',
},
Gender: {
    marginTop: 1,
        padding: 15,
        fontSize: 16,
        backgroundColor: '#fff',
        //alignItems: 'center',
        justifyContent: 'center',
    },       
    Gymid: {
            marginTop: 1,
                padding: 15,
                fontSize: 16,
                backgroundColor: '#fff',
                //alignItems: 'center',
                justifyContent: 'center',

    },
    Weight: {
        marginTop: 0,
        padding: 15,
        fontSize: 16,
        backgroundColor: '#fff',
        //alignItems: 'center',
        justifyContent: 'center',
    },
    Height: {
        marginTop: 0,
        padding: 15,
        fontSize: 16,
        backgroundColor: '#fff',
        //alignItems: 'center',
        justifyContent: 'center',
   
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
