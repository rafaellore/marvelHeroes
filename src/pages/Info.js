import React from 'react';
import { StyleSheet, Text, ImageBackground, StatusBar, View, ScrollView, TouchableOpacity } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';

import Back from '../assets/icons/back.svg';
import Age from '../assets/icons/age.svg';
import Weight from '../assets/icons/weight.svg';
import Height from '../assets/icons/height.svg';
import Universe from '../assets/icons/universe.svg';

import { useNavigation } from '@react-navigation/native';
import Hability from '../components/Hability';
import MovieList from '../components/MovieList';

export default function Info({route}) {
  
  const year = new Date().getFullYear()
  const navigation = useNavigation();
  let age = year - route.params.birth;
  age = `${age} anos`;
  
  const images = {
    chars: {
      spiderMan: require('../assets/chars/spider-man.png'),
      blackPanther: require('../assets/chars/black-panther.png'),
      ironMan: require('../assets/chars/iron-man.png'),
      redSkull: require('../assets/chars/red-skull.png'),
      drDoom: require('../assets/chars/dr-doom.png'),
      drDoom: require('../assets/chars/dr-doom.png'),
      greenGoblin: require('../assets/chars/green-goblin.png'),
      Deadpool: require('../assets/chars/deadpool.png'),
      Venom: require('../assets/chars/venom.png'),
      Punisher: require('../assets/chars/punisher.png'),
      Thanos: require('../assets/chars/thanos.png'),
      Ronan: require('../assets/chars/ronan.png'),
      Talos: require('../assets/chars/talos.png'),
      HowardStark: require('../assets/chars/howard-stark.png'),
      MaryJane: require('../assets/chars/mary-jane.png'),
      HappyHogan: require('../assets/chars/happy-hogan.png'),
    },
    movies:{
      captainAmerica3: require('../assets/movies/captain-america-3.jpg'),
      SpiderManHomecoming: require('../assets/movies/spider-man-homecoming.jpg'),
    }
  };


  if(route) {
      return (
        <> 
        <StatusBar backgroundColor="transparent" barStyle="light-content" translucent={true}/>
          <ImageBackground style={styles.container} source={images.chars[route.params?.background]}>
              <LinearGradient colors={['rgba(0,0,0,0.0)', 'rgba(0,0,0,0.8)']} style={styles.gradientBack}>
              <LinearGradient colors={['rgba(0,0,0,0.0)', 'rgba(0,0,0,0.4)']}  style={styles.back}>
              <TouchableOpacity onPress={ () => navigation.goBack() }>
                <Back stoke="#B7B7C8" width={30} height={40}/>
              </TouchableOpacity>
              </LinearGradient>
              <ScrollView style={styles.info}>
              <Text style={styles.altergo}>{route.params?.alterego}</Text>
              <Text style={styles.name}>{route.params?.name}</Text>
              <Text style={styles.description}>{route.params?.description}</Text>
              <View style={styles.caracteristics}>
                  <View style={styles.charItem}>
                  <Age stoke="#B7B7C8" width={30} height={40}/>
                  <Text style={styles.charItemText}>{age}</Text>
                  </View>
                  <View style={styles.charItem}>
                  <Weight stoke="#B7B7C8" width={30} height={40}/>
                  <Text style={styles.charItemText}>{route.params?.weight}</Text>
                  </View>
                  <View style={styles.charItem}>
                  <Height stoke="#B7B7C8" width={30} height={40}/>
                  <Text style={styles.charItemText}>{route.params?.height}</Text>
                  </View>
                  <View style={styles.charItem}>
                  <Universe stoke="#B7B7C8" width={30} height={40}/>
                  <Text style={styles.charItemText}>{route.params?.universe}</Text>
                  </View>
                </View>
                <View style={styles.abilities}>
                <Text style={styles.abilitiesText}>Habilidades</Text>
                <Hability title={'Força'} points={route.params.force}/>
                <Hability title={'Agilid.'} points={route.params.agility}/>
                <Hability title={'Inteli.'} points={route.params.intelligence}/>
                <Hability title={'Resist.'} points={route.params.endurance}/>
                <Hability title={'Veloci.'} points={route.params.velocity}/>
                </View>
                <MovieList movies={route.params.movies}/>
              </ScrollView>
              </LinearGradient>
          </ImageBackground>
        </>
      );
    }else{
      return(
        <View>
          <Text>Carregando..</Text>
        </View>
      )
    }
  }
  

const styles = StyleSheet.create({
  container:{
    width: '100%',
    height: '100%',
    flex: 1,
    justifyContent: "flex-end",
    padding: 0
  },
  gradient:{
    marginHorizontal: 10,
    width: '100%',
    marginLeft: 0,
    paddingLeft: 14,
    paddingBottom: 10,
    height: '100%',
    
  },
  name:{
    color: "#fff",
    fontSize: 37,
    width: 400,
    marginTop: -4,
    fontFamily: 'Gilroy-Heavy',
  },
  altergo:{
    color: "#B7B7C8",
    fontSize: 20,
    marginTop: 220
  },
  info:{
    padding: 18,
    marginVertical: 10,
  },
  description:{
   width: '100%',
   color: "#B7B7C8",
   marginTop: 20,
   textAlign: 'justify',
   fontSize: 16,
   padding: 5
  },
  back:{
    marginTop: 30,
    padding: 10,
  },
  gradientBack:{
    width: '100%',
    paddingBottom: 10,
    height: '100%',  
  },
  charItem:{
    color: '#fff',
    fontSize: 50,
    alignItems: 'center'
  },
  charItemText:{
    color: '#B7B7C8',
    fontSize: 15,
  },
  caracteristics:{
    marginVertical: 20,
    justifyContent: 'space-between',
    flexDirection: 'row'
  },
  abilitiesText:{
    color: "#fff",
    fontSize: 28,
    fontWeight: '700',
    marginBottom: 10
  },
  abilities:{
    marginVertical: 20,
  }
});