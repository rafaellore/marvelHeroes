import React from 'react'
import { StyleSheet, SafeAreaView, ScrollView , StatusBar, Text} from 'react-native'
import Category from '../components/Category';

import Header from '../components/Header';
import List from '../components/List';

export default function App() {

  const customData = require('../assets/application.json');

  return (
    <>
    <StatusBar barStyle="dark-content" backgroundColor="#fff"/>
    <SafeAreaView style={styles.container}>
    <Header/>
    <ScrollView>
        <Category/>
          <List title={'Heróis'} data={customData.heroes}/>
          <List title={'Vilões'} data={customData.villains}/>
          <List title={'Anti-heróis'} data={customData.antiHeroes}/>
          <List title={'Aliens'} data={customData.aliens}/>
          <List title={'Humanos'} data={customData.humans}/>
    </ScrollView>
    </SafeAreaView>
  </>
  )
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff'
  },
});