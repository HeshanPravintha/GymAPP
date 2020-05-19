import React, { Component } from 'react'
import { View, Text, Button, Container, Item, Input, Card, Thumbnail, CardItem } from 'native-base'
import { StyleSheet, TextInput, TouchableOpacity, ScrollView, Dimensions, FlatList } from 'react-native'
import * as firebase from 'firebase';

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

let review = []

class Pool extends Component {

    constructor(props) {
        super(props);


        this.state = {
            ph_data: '',
            pool_r: '',
            loader: false,
            review: [],
            loaderData: true
        };
    }

    static navigationOptions = {
        headerTitle: null
    };

    componentDidMount() {
        this.getPhInfo();
        this.getPoolReview((res) => {
            console.log(res)
            this.setState({
                loaderData: false
            })
        })
    }

    getPhInfo = () => {
        var ref = firebase.database().ref("ph_data");

        ref.once("value")
            .then((snapshot) => {
                var key = snapshot.key; // "ada"
                console.log(snapshot.val())
                this.setState({
                    ph_data: snapshot.val()
                })

                //   var childKeys= snapshot.child("name/last").key; // "last"
            });
    }



    getPoolReview = (callback) => {
        var ref = firebase.database().ref("pool_Review");

        ref.once("value")
            .then((snapshot) => {
                var key = snapshot.key; // "ada"

                snapshot.forEach((item) => {
                    console.log('for', review)
                    console.log(this.state.review, 'state eka')
                    var itemVal = item.val();
                    review.push(itemVal);
                    this.state.review.push(itemVal)
                    callback(true)
                });

                // for (i=0; i < review.length; i++) {
                //     con
                // }
            });
    }


    addPoolReview(pool_r) {
        this.setState({
            loader: true
        })
        firebase.database().ref('pool_Review').push({
            pool_review: pool_r,
            uid: firebase.auth().currentUser.uid,
            email: firebase.auth().currentUser.email
        }).then(res => {
            this.setState({
                loader: false,
                loaderData: true,
                review: []
            })
            this.getPoolReview((res) => {
                this.setState({
                    loaderData: false
                })
            })
        });

    }

    render() {
        console.log(review, 'Array eka')
        console.log(this.state.review, 'state eka')
        return (

            <View style={{ flex: 1, backgroundColor: '#fff' }}>

                <View>
                    <Text style={styles.profiletext}>Pool Info</Text>
                </View>

                <View style={{ marginTop: 20, height: 150, width: '100%', backgroundColor: '#4FBCB7' }}>
                    <Text style={{ alignSelf: 'center', marginTop: 10, fontSize: 62, fontWeight: 'bold', color: 'white' }}>{this.state.ph_data} pH</Text>
                    <Text style={{ alignSelf: 'center', marginTop: 10, fontSize: 20, color: 'white' }}>Pool pH Value</Text>
                </View>

                <View>
                    <Text style={{ fontSize: 18, marginLeft: 20, marginTop: 20 }}>Pool Reviews</Text>
                </View>

                {this.state.loaderData ? (
                    <MaterialIndicator color='#4FBCB7' />
                ) : (
                        <View style={{height: 250}}>
                            <FlatList

                                data={this.state.review}
                                showsHorizontalScrollIndicator={false}

                                renderItem={({ item, index }) => {

                                    return (


                                        <View >
                                            <Text style={{ fontSize: 16, marginLeft: 20, marginTop: 20 }}>{item.pool_review}</Text>
                                            <Text style={{ fontSize: 16, marginLeft: 20, marginTop: 10 }}>Review By : {item.email} </Text>
                                        </View>

                                    )
                                }}
                            />

                        </View>

                    )}

                <View style={{ position: 'absolute', bottom: 80, width: '100%' }} >
                    <Item rounded style={{ alignSelf: 'center', marginTop: 20, width: '90%' }}>
                        <Input rounded style={{ marginLeft: 20, marginRight: 20, width: 100 }} placeholder='Your Review' onChangeText={pool_r => this.setState({ pool_r })} />
                    </Item>
                </View>

                <TouchableOpacity onPress={() => this.addPoolReview(this.state.pool_r)} style={{ position: 'absolute', bottom: 0, width: '100%' }}>

                    <View style={{ width: '100%', backgroundColor: '#4FBCB7', height: 60 }}>
                        {this.state.loader ? (
                            <MaterialIndicator color='white' />
                        ) : (
                                <Text style={{ textAlign: 'center', fontSize: 16, marginLeft: 0, marginTop: 20, color: 'white' }}>Add Pool Review</Text>
                            )}

                    </View>
                </TouchableOpacity>


            </View>


        );

    }

}


const styles = StyleSheet.create({
    profiletext: {
        fontWeight: 'bold',
        fontSize: 30,
        marginTop: 20,

        marginLeft: 20,
        backgroundColor: '#fff',
        //alignItems: 'center',
        justifyContent: 'center',
    },


})
export default Pool