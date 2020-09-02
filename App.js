import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Home from './assets/components/home';
//import Endtrip from './assets/components/endtrip';
//import Driverreg from './assets/components/driverregistration'
import Form from './assets/components/form'

export default function App() {
  return (
    <View style={styles.container}>
      <Form />
      
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
   // justifyContent: 'center',
    resizeMode: "cover",
  },
});
