import { StatusBar } from 'expo-status-bar';
import React from 'react';
import {Provider} from 'react-redux'
import { StyleSheet, Text, View } from 'react-native';

import store from './store/store';

import DevLinkNavigator from './navigation/DevLinkNavigator';

export default function App() {
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
