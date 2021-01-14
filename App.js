import { StatusBar } from 'expo-status-bar';
import React, { useEffect } from 'react';
import {Provider} from 'react-redux'
import { StyleSheet, Text, View } from 'react-native';

import store from './store/store';
import setAuthToken from './utils/setAuthToken';
import {loadUser} from './store/actions/auth';
import AsyncStorage from '@react-native-async-storage/async-storage'

import DevLinkNavigator from './navigation/DevLinkNavigator';


if(AsyncStorage.token){
  setAuthToken(AsyncStorage.token);
}

export default function App() {

  useEffect(() =>{
    store.dispatch(loadUser);
  })



  return (
    <Provider store={store}>
    <View style={styles.container}>
      <DevLinkNavigator/>
    </View>
    </Provider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#2f2f2f',
  }
});
