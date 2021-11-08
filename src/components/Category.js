import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';

import Hero from '../assets/icons/hero.svg'
import Villain from '../assets/icons/villain.svg'
import Antihero from '../assets/icons/antihero.svg'
import Alien from '../assets/icons/alien.svg'
import Human from '../assets/icons/human.svg'

export default function Category() {
  return (
    <View style={styles.container}>
        <Text style={styles.marvelHeroes}>Bem vindo ao Marvel Heroes</Text>
        <Text style={styles.title}>Escolha o seu personagem</Text>
      <View style={styles.categories}>
        <LinearGradient style={styles.hero} colors={['#006ced', '#00baf9']}>
          <Hero fill="#B7B7C8" width={40} height={40}/>
        </LinearGradient>
        <LinearGradient style={styles.hero} colors={['#ed1d2f', '#ed1e62']}>
          <Villain fill="#B7B7C8" width={40} height={40}/>
        </LinearGradient>
        <LinearGradient style={styles.hero} colors={['#ab2ef1', '#7974fe']}>
          <Antihero fill="#B7B7C8" width={40} height={40}/>
        </LinearGradient>
        <LinearGradient style={styles.hero} colors={['#0fa564', '#37b78d']}>
          <Alien fill="#B7B7C8" width={40} height={40}/>
        </LinearGradient>
        <LinearGradient style={styles.hero} colors={['#ff7dae', '#ff768e']}>
          <Human fill="#B7B7C8" width={40} height={40}/>
        </LinearGradient>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container:{
    marginHorizontal: 10,
  },
  categories:{
    display: 'flex',
    flexDirection: 'row'
  },
  marvelHeroes:{
    color: '#c7c7d4',
    fontFamily: 'Gilroy-Bold',
    fontSize: 16
  },
  title:{
    color: '#313140',
    fontFamily: 'Gilroy-Heavy',
    fontSize: 35
  },
  hero:{
    marginTop: 10,
    marginRight: 10,
    alignItems: 'center',
    justifyContent: 'center',
    width: 60,
    height: 60,
    borderRadius: 50,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 9,
    },
    shadowOpacity: 0.50,
    shadowRadius: 12.35,
    elevation: 19,
  }
});