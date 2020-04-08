import React from 'react';
import { createAppContainer, createSwitchNavigator, DrawerItems } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import SignIn from './Auth/SignIn'
import SignUp from './Auth/SignUp'
import MoreDetails from './Auth/MoreDetails'
import Home from './Auth/Home'
import Loading from '../Loading'

const HomeStack = createStackNavigator(
    {
        //Loading,
        SignIn,
        SignUp,
        MoreDetails,
        Home,
        
    }
)



const AppContainer = createAppContainer(HomeStack)

export default AppContainer