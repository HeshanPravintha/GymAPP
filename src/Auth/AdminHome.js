import React, { Component } from 'react'
import { View, Text } from 'native-base'
import { ScrollView, TouchableOpacity } from 'react-native-gesture-handler';

export default class AdminHome extends Component {

    constructor(props) {
        super(props);


        this.state = {
            profile: null,
            loader: true,
            sucess :false
        };
    }

    static navigationOptions = {
        header: null,
    };

    componentDidMount(){
        const sucess = this.props.navigation.getParam('sucess', '')
        this.setState({
            sucess : true
        })
    }

    renderSucessModal(){
        return(
            <View>
                <Text style={{textAlign : 'center'}}>User Register Sucessfull</Text>
            </View>
        )
    }

    componentWillUnmount(){
        this.setState({
            sucess :false
        })
    }

    render() {
        return (
            <View style={{flex :1}}>
                <ScrollView style={{flex: 1, backgroundColor: 'white' }}>
                    <View style={{ marginTop: 50, marginLeft: 20 }}>
                        <Text style={{ fontSize: 32, fontWeight: 'bold' }}>Admin Portal</Text>
                    </View>

                    <View style={{ marginLeft: 20, marginTop: 20 }}>
                        <Text style={{ fontWeight: 'bold', fontSize: 20 }}>
                            Users
                    </Text>

                        <View style={{ marginTop: 10 }}>
                            <View style={{ height: 1, width: '90%', backgroundColor: 'grey', opacity: 0.5, marginBottom: 10 }}></View>
                            <View style={{ flexDirection: 'row', justifyContent: 'space-between', width: '90%' }}>
                                <Text>
                                    Shafran Naizer
                            </Text>
                                <TouchableOpacity>
                                    <Text style={{ color: 'red', fontWeight: '600' }}>
                                        Delete
                            </Text>
                                </TouchableOpacity>

                            </View>

                            <View style={{ marginTop: 10, height: 1, width: '90%', backgroundColor: 'grey', opacity: 0.5, marginBottom: 10 }}></View>

                        </View>
                    </View>

                    {this.state.sucess ? (
                        this.renderSucessModal()
                    ) : (
                        null
                    )}


                </ScrollView>

                <View style={{ position: 'absolute', bottom: 30 , width : '100%' }} >
                    <TouchableOpacity onPress={()=>this.props.navigation.navigate('UserReg')}>
                    <View style={{ alignSelf: 'center', width: '70%', height: 50, backgroundColor: '#4FBCB7', borderRadius: 50 / 2, justifyContent: 'center' }}>
                        <Text style={{ textAlign: 'center', color: 'white', fontWeight: 'bold', fontSize: 18 }}> Register Member</Text>
                    </View>
                    </TouchableOpacity>
                   
                </View>
            </View>


        )
    }
}
