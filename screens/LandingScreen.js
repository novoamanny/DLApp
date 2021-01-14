import React, {useEffect} from 'react';
import {FlatList, View, ScrollView, Text, StyleSheet, Dimensions, ImageBackground} from 'react-native';
import {connect} from 'react-redux'
import PropTypes from 'prop-types';

import LandingForm from '../components/Landing-Form';




const LandingScreen = ({navigation,auth:{isAuthenticated, token}}) =>{
    
   if(isAuthenticated){
       
        navigation.navigate('Dashboard', {token: token})
   }

    return(
        <View style={styles.Layout}>
           <ImageBackground source={require('../images/city.jpeg')} style={styles.image}>
                <LandingForm/>
           </ImageBackground>
        </View>
    )
}

const styles = StyleSheet.create({
    Layout:{
        flex: 1,
        backgroundColor: '#2f2f2f',
        
    },
    image:{
        flex: 1,
        resizeMode: 'cover',
        
    }
    
    
})

LandingScreen.propTypes = {
    
    auth: PropTypes.object.isRequired
    
    
}

const mapStateToProps = state => ({
    auth: state.auth
    
    
});

export default connect(mapStateToProps, null)(LandingScreen);