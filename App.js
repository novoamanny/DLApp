import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

import DevLinkNavigator from './navigation/DevLinkNavigator';

export default function App() {
  return (
    <View style={styles.container}>
      <DevLinkNavigator/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#2f2f2f',
  }
});
