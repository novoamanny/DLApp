import React from 'react';
import { Platform } from 'react-native';
import {createAppContainer} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';
import {createBottomTabNavigator} from 'react-navigation-tabs';
import {createDrawerNavigator} from 'react-navigation-drawer';

import {Ionicons} from '@expo/vector-icons';
import {HeaderButtons, Item, OverflowMenu, HiddenItem} from 'react-navigation-header-buttons';
import CustomHeaderButton from '../components/CustomHeaderButton';


import LandingScreen from '../screens/LandingScreen';
import DashboardScreen from '../screens/DashboardScreen';
import HeaderImage from '../components/HeaderImage';
import HeaderPicture from '../components/HeaderPicture';
import HeaderPictureTwo from '../components/HeaderPictureTwo';



const DevLinkNavigator = createStackNavigator({
    Landing: {
        screen: LandingScreen,
        navigationOptions:{
            title: 'devLink',
            // headerTitle: () => <HeaderImage/>,
            // headerStyle:{
            //     backgroundColor: '#2f2f2f',
            //     shadowColor: '#fff',
            //     shadowOpacity:  Platform.OS === 'ios' ? 1 : 0,
            //     borderBottomWidth: Platform.OS === 'ios' ? 0 : 1,
                
            // }
            headerShown: false
        }
    },
    Dashboard: {
        screen: DashboardScreen,
        navigationOptions:{
            title: 'Dashboard',
            headerTitle: () => <HeaderImage/>,
            headerStyle:{
                backgroundColor: '#2f2f2f',
                shadowColor: '#fff',
                shadowOpacity:  Platform.OS === 'ios' ? 1 : 0,
                borderBottomWidth: Platform.OS === 'ios' ? 0 : 1,
                
            },
            headerLeft: () => <HeaderPicture/>,
            headerRight: () => <HeaderPictureTwo/>
            // headerShown: false
        }
    },
    
})

export default createAppContainer(DevLinkNavigator);