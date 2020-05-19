import React, { Component } from 'react'
import { View, Text , Input  ,Item} from 'native-base'
import { ScrollView, TouchableOpacity } from 'react-native-gesture-handler';

export default class UserRed extends Component {

    constructor(props) {
        super(props);


        this.state = {
            profile: null,
            loader: true
        };
    }

    static navigationOptions = {
        header: null,
    };


    render() {
        return (
            <View style={{flex :1}}>
                <ScrollView style={{flex: 1, backgroundColor: 'white' }}>
                    <View style={{ marginTop: 50, marginLeft: 20 }}>
                        <Text style={{ fontSize: 32, fontWeight: 'bold' }}>User Registration</Text>
                    </View>

                    <View style={{alignSelf : 'center'}}>


                        <Item style={{width : '90%' ,marginTop : 20}} >
                            <Input style={{width : '90%' , borderColor : 'grey' , borderWidth :1 , borderRadius : 10}} placeholder='Name' onChangeText={email => this.setState({ email })}
                            />
                        </Item>

                        <Item style={{width : '90%' ,marginTop : 20}} >
                            <Input style={{width : '90%' , borderColor : 'grey' , borderWidth :1 , borderRadius : 10}} placeholder='Email' onChangeText={email => this.setState({ email })}
                            />
                        </Item>

                        <Item style={{width : '90%' ,marginTop : 20}} >
                            <Input style={{width : '90%' , borderColor : 'grey' , borderWidth :1 , borderRadius : 10}} placeholder='Password' onChangeText={email => this.setState({ email })}
                            />
                        </Item>

                        <Item style={{width : '90%' ,marginTop : 20}} >
                            <Input style={{width : '90%' , borderColor : 'grey' , borderWidth :1 , borderRadius : 10}} placeholder='Age' onChangeText={email => this.setState({ email })}
                            />
                        </Item>

                        <Item style={{width : '90%' ,marginTop : 20}} >
                            <Input style={{width : '90%' , borderColor : 'grey' , borderWidth :1 , borderRadius : 10}} placeholder='City' onChangeText={email => this.setState({ email })}
                            />
                        </Item>

                        <Item style={{width : '90%' ,marginTop : 20}} >
                            <Input style={{width : '90%' , borderColor : 'grey' , borderWidth :1 , borderRadius : 10}} placeholder='Country' onChangeText={email => this.setState({ email })}
                            />
                        </Item>

                        <Item style={{width : '90%' ,marginTop : 20}} >
                            <Input style={{width : '90%' , borderColor : 'grey' , borderWidth :1 , borderRadius : 10}} placeholder='Height' onChangeText={email => this.setState({ email })}
                            />
                        </Item>

                        <Item style={{width : '90%' ,marginTop : 20}} >
                            <Input style={{width : '90%' , borderColor : 'grey' , borderWidth :1 , borderRadius : 10}} placeholder='Weight' onChangeText={email => this.setState({ email })}
                            />
                        </Item>

                    </View>


                </ScrollView>

                <View style={{ position: 'absolute', bottom: 30 , width : '100%' }} >
                    <TouchableOpacity onPress={()=>this.props.navigation.navigate('SignUp')}>
                    <View style={{ alignSelf: 'center', width: '70%', height: 50, backgroundColor: '#4FBCB7', borderRadius: 50 / 2, justifyContent: 'center' }}>
                        <Text style={{ textAlign: 'center', color: 'white', fontWeight: 'bold', fontSize: 18 }}> Submit Member</Text>
                    </View>
                    </TouchableOpacity>
                   
                </View>
            </View>


        )
    }
}
