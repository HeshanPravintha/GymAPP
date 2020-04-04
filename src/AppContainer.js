import React from 'react';
import { createAppContainer, createSwitchNavigator, DrawerItems } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import SignUp from '../src/Auth/SignUp'
import Loading from '../Loading'

const HomeStack = createStackNavigator(
    {
        //Loading,
        SignUp
    }
)



const AppContainer = createAppContainer(HomeStack)

export default AppContainer