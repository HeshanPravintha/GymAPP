import React, { Component } from 'react'
import { View, Text, Button, Container, Item , Input ,Header, Content, Card, CardItem, Thumbnail, Icon, Left, Body, Right} from 'native-base'
import { StyleSheet, TextInput, TouchableOpacity, ScrollView, Dimensions , Image } from 'react-native'
import { FlatList } from 'react-native-gesture-handler';

const { height, width } = Dimensions.get('window');

const data =[1,2,3,4]

export default class Home extends Component {

    static navigationOptions = {
        header: null,
    };

    render() {
        return (
            
            <View style={{ flex: 0 , backgroundColor : "white" }}>


                <View style={styles.logotext}>

                    <Text style={styles.logotext}>Logo</Text>
                </View>
                <View>
                <Card style={styles.box3}>
            <CardItem style={styles.box1}>
              <Left>
                <Thumbnail source={require('../../Images/My.jpg')} />
                <Body >
                  <Text>Heshan Pravintha</Text>
                  <Text note>Colombo, Sri Lanka</Text>
                </Body>
              </Left>
            </CardItem>
            <CardItem style={styles.box2}>
              <Body>
               
              <Text style={styles.text1}> {`Age \n 25`}
                  
                </Text>
              </Body>
              <Body>
               
                <Text style={styles.text2}>{`Weight \n 50KG`}
                </Text>
              </Body>
              <Body>
               
                <Text style={styles.text3}>{`Height \n 5.7in`}
                  
                </Text>
              </Body>
              <Body>
               
                <Text style={styles.text4}>{`Member Since \n 2017`}
               
                </Text>
              </Body>
            </CardItem>
            
          </Card>
                </View>
                <Text style={styles.text5}>Activity Report</Text>    
                <View style={{height: 4 , width: 110 , backgroundColor: '#4FBCB7' , borderRadius: 20/2 ,marginTop: 6, marginLeft : 25 }}></View>  

                 <View style={{flexDirection: "row"}}>
                <Card style={{height: 150 ,width: 130 ,marginTop: 30,marginRight :25,marginLeft : 25,shadowColor: "#000000",shadowOpacity: 0.5, shadowRadius: 5,shadowOffset: {height: 2,
      width: 2}}}>
                   <CardItem style={styles.box1}>
              <Left>
                <Thumbnail style={{alignItems: "center" , marginTop: 0.1 , marginLeft : 15}} source={require('../../Images/My.jpg')} />
                
              </Left>
              
            </CardItem>   
            <Text style={{fontSize: 15 , textAlign : 'center'}}>Time Spent</Text>
            <Text style={{fontWeight: 'bold',textAlign : 'center'}}>1 Hr 30 Min</Text>
            </Card>     
            <Card style={{height: 150 ,width: 130 ,marginTop: 30,marginRight :25,marginLeft : 2,shadowColor: "#000000",shadowOpacity: 0.5, shadowRadius: 5,shadowOffset: {height: 2,
      width: 2}}}>
                   <CardItem style={styles.box1}>
              <Left>
                <Thumbnail style={{alignItems: "center" , marginTop: 0.1 , marginLeft : 15}} source={require('../../Images/My.jpg')} />
                
              </Left>
              
            </CardItem>   
            <Text style={{fontSize: 15 , textAlign : 'center'}}>Calories</Text>
            <Text style={{fontWeight: 'bold',textAlign : 'center'}}>500 cl</Text>
            </Card> 
            </View>
            <Text style={styles.text5}>Access Features</Text>
            <View style={{height: 4 , width: 120 , backgroundColor: '#4FBCB7' , borderRadius: 20/2 ,marginTop: 6, marginLeft : 25 }}></View>      
                <FlatList
                  data={data}
                  horizontal={true}
                  renderItem={({item , index})=>{
                    return(
                      <View style={{flexDirection: "row"}}>
                      <Card 
                      style={{height: 150,
                        width: 130 ,
                        marginTop: 30,
                        marginRight :25,
                        marginLeft : 25,
                        shadowColor: "#000000",
                        shadowOpacity: 0.5,
                        shadowRadius: 5,
                        shadowOffset: {height: 2,width: 2}}}>
                         <CardItem style={styles.box1}>
                    <Left>
                      <Thumbnail style={{alignItems: "center" , marginTop: 0.1 , marginLeft : 15}} source={require('../../Images/My.jpg')} />
                      
                    </Left>
                    
                  </CardItem>   
                  <Text style={{fontSize: 15 , textAlign : 'center'}}>Locker</Text>
                  
                  </Card>     
                  {/* <Card style={{height: 150 ,width: 130 ,marginTop: 30,marginRight :25,marginLeft : 2,shadowColor: "#000000",shadowOpacity: 0.5, shadowRadius: 5,shadowOffset: {height: 2,
            width: 2}}}>
                         <CardItem style={styles.box1}>
                    <Left>
                      <Thumbnail style={{alignItems: "center" , marginTop: 0.1 , marginLeft : 15}} source={require('../../Images/My.jpg')} />
                      
                    </Left>
                    
                  </CardItem>   
                  <Text style={{fontSize: 15 , textAlign : 'center'}}>Pool Info</Text>
                 
                  </Card>  */}
                  </View>
      
                    )
                  }}
                />
               
</View>
                

        );

    }

}

const styles = StyleSheet.create({
    logotext: {
        fontWeight: 'bold',
        fontSize: 50,
        marginTop: 12,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },

    box1: {
      
      marginTop: 8,
      
      marginRight :5,
      marginLeft : 5,
      
    },

    box2: {
      
      marginTop: 0.5,
      
      marginRight :0.7,
      marginLeft : 9,
      
            alignItems: 'center',
      
    },
 
    box3: 
    {
      marginTop: 30,
      marginRight :25,
      marginLeft : 25,
      shadowColor: "#000000",
    shadowOpacity: 0.5, 
    shadowRadius: 5,
    shadowOffset: {
      height: 2,
      width: 2
    }
    
    },

    box4:
    {
    
    marginTop: 30,
      marginRight :25,
      marginLeft : 25,
      shadowColor: "#000000",
    shadowOpacity: 0.5, 
    shadowRadius: 5,
    shadowOffset: {
      height: 2,
      width: 2
    }
    
    },

    text1: {
    fontSize: 10,
    fontWeight: 'normal',

  },
  text2: {
    
    fontSize: 10,
    fontWeight: 'normal',

  },
  text3: {
    fontSize: 10,
    fontWeight: 'normal',

  },
  text4: {
    fontSize: 10,
    fontWeight: 'normal',

  },
  
  text5: {
   
    marginLeft : 25,
    marginTop: 30,
    fontWeight: 'normal',

  },
})
