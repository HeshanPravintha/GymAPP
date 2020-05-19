import React, { Component } from 'react'
import { View, Text, Button, Container, Item, Input } from 'native-base'
import { StyleSheet, TextInput, TouchableOpacity, ScrollView, Dimensions } from 'react-native'

const { height, width } = Dimensions.get('window');

class ActivityReport extends Component {

    constructor(props) {
        super(props);


        this.state = {
            activeSelector: 1


        };
    }

    static navigationOptions = {
        header: null,
    };

    render() {
        return (
            <ScrollView style={{ flex: 1, backgroundColor: '#fff' }}>

                <View>
                    <Text style={styles.activityreporttext}>Activity Report</Text>
                </View>

                <View style={{ flexDirection: 'row', justifyContent: 'center', marginTop: 10 }}>
                    <TouchableOpacity onPress={() => this.setState({ activeSelector: 1 })}>
                        <View style={this.state.activeSelector === 1 ? styles.leftSelectorActive : styles.leftSelectorInActive}>
                            <Text style={{ justifyContent: 'center', textAlign: 'center' }} >Daily</Text>
                        </View>
                    </TouchableOpacity>

                    <TouchableOpacity onPress={() => this.setState({ activeSelector: 2 })}>
                        <View style={this.state.activeSelector === 1 ? styles.rightSelectorInActive : styles.rightSelectorActive}>
                            <Text style={{ justifyContent: 'center', textAlign: 'center' }} >Monthly</Text>
                        </View>
                    </TouchableOpacity>

                </View>


                <View style={{ marginLeft: 20, marginTop: 20 }}>
                    {this.state.activeSelector === 1 ? (
                        <View>
                            <Text>Daily Report</Text>
                        </View>

                    ) :
                        (
                            <View>
                                <Text>Monthly Report</Text>
                            </View>

                        )}

                </View>

            </ScrollView>
        );

    }

}


const styles = StyleSheet.create({
    activityreporttext: {
        fontWeight: 'bold',
        fontSize: 30,
        marginTop: 45,
        marginLeft: 20,
        backgroundColor: '#fff',
        //alignItems: 'center',
        justifyContent: 'center',
    },
    daymonthswitch1: {
        marginTop: 20,
        width: 100,
        height: 25,
        marginLeft: 100,
        borderWidth: 1,
        borderColor: '#4FBCB7',
        backgroundColor: '#fff'
    },
    daymonthswitch2: {
        marginTop: 1,
        width: 100,
        height: 25,
        marginLeft: 150,
        borderWidth: 1,
        borderColor: '#4FBCB7',
        backgroundColor: '#fff'
    },
    leftSelectorActive: {
        borderTopLeftRadius: 10,
        borderBottomLeftRadius: 10,
        height: 30,
        width: 100,
        justifyContent: 'center',
        backgroundColor: '#4FBCB7'
    },
    leftSelectorInActive: {
        borderTopLeftRadius: 10,
        borderBottomLeftRadius: 10,
        height: 30,
        width: 100,
        justifyContent: 'center',
        borderColor: '#4FBCB7',
        borderWidth: 1
        // backgroundColor: '#4FBCB7'
    },
    rightSelectorActive: {
        borderBottomRightRadius: 10,
        borderTopRightRadius: 10,
        height: 30,
        width: 100,
        justifyContent: 'center',
        backgroundColor: '#4FBCB7'
    },
    rightSelectorInActive: {
        borderBottomRightRadius: 10,
        borderTopRightRadius: 10,
        height: 30,
        width: 100,
        justifyContent: 'center',
        borderColor: '#4FBCB7',
        borderWidth: 1
        // backgroundColor: '#4FBCB7'
    }
})
export default ActivityReport