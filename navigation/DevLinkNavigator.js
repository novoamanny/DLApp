import React from 'react';

import {createAppContainer} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';
import {createBottomTabNavigator} from 'react-navigation-tabs';
import {createDrawerNavigator} from 'react-navigation-drawer';

import {Ionicons} from '@expo/vector-icons';


import LandingScreen from '../screens/LandingScreen';
import HeaderImage from '../components/HeaderImage';


const DevLinkNavigator = createStackNavigator({
    Landing: {
        screen: LandingScreen,
        navigationOptions:{
            title: 'devLink',
            headerTitle: () => <HeaderImage/>
        }
    },
    
})

export default createAppContainer(DevLinkNavigator);