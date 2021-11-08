import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

import Menu from '../assets/icons/menu.svg'
import Marvel from '../assets/icons/marvel.svg'
import Search from '../assets/icons/search.svg'

export default function Header() {
  return (
    <View style={styles.container}>
        <Menu stoke="#B7B7C8" width={30} height={30}/>
        <Marvel fill="#F2264B" width={90} height={80}/>
        <Search fill="#B7B7C8" width={30} height={30}/>
    </View>
  );
}

const styles = StyleSheet.create({
  container:{
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 10
  }
});