import React from 'react';
import { createAppContainer, createSwitchNavigator, DrawerItems } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import SignIn from './Auth/SignIn'
import SignUp from './Auth/SignUp'
import MoreDetails from './Auth/MoreDetails'
import Home from './Auth/Home'
import Profile from './Auth/Profile'
import ActivityReport from './Auth/ActivityReport'
import Loading from '../Loading'
import Locker from './Auth/Locker'
import Pool from './Auth/Pool'

const HomeStack = createStackNavigator(
    {
        //Loading,
        SignIn,
        SignUp,
        MoreDetails,
        Home,
        Profile,
        Locker,
        Pool,
        ActivityReport,
        
    }
)



const AppContainer = createAppContainer(HomeStack)

export default AppContainer