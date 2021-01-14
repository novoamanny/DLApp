import React, {useEffect} from 'react';
import {connect} from 'react-redux';
import PropTypes from 'prop-types';
import {View, StyleSheet} from 'react-native';

import {getCurrentProfile} from '../store/actions/profile';

import setAuthToken from '../utils/setAuthToken';
import {loadUser} from '../store/actions/auth';
import AsyncStorage from '@react-native-async-storage/async-storage'

const DashboardScreen = ({navigation,getCurrentProfile, loadUser, auth:{user, token, isAuthenticated}}) =>{
    
    // console.log(navigation.getParam('token'))
    if(navigation.getParam('token')){
        AsyncStorage.setItem('token', navigation.getParam('token'))
        setAuthToken(navigation.getParam('token'));
       
    }
// I  A M  H E R E
    useEffect(() =>{
        loadUser();
    }, [loadUser])
    // console.log(user)

    return(
        <View style={styles.View}>
            
        </View>
    )
}

const styles = StyleSheet.create({
    View:{
        backgroundColor: '#2f2f2f',
        flex: 1
    }
})


DashboardScreen.propTypes = {
    getCurrentProfile: PropTypes.func.isRequired,
    
    // addPost: PropTypes.func.isRequired,
    // deleteAccount: PropTypes.func.isRequired,
    auth: PropTypes.object.isRequired,
    profile: PropTypes.object.isRequired,
    
}


const mapStateToProps = state => ({
    auth: state.auth,
    profile: state.profile,
    
});


export default connect(mapStateToProps, {getCurrentProfile, loadUser})(DashboardScreen);