import React from 'react';
import { Platform } from 'react-native';
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
            headerTitle: () => <HeaderImage/>,
            headerStyle:{
                backgroundColor: '#2f2f2f',
                shadowColor: '#fff',
                shadowOpacity:  Platform.OS === 'ios' ? 1 : 0,
                borderBottomWidth: Platform.OS === 'ios' ? 0 : 1,
                
            }
        }
    },
    
})

export default createAppContainer(DevLinkNavigator);