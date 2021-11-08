import React from 'react';
import { ImageBackground, Text, FlatList, StyleSheet, TouchableOpacity, View } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import { useNavigation } from '@react-navigation/native';

export default function List({title, data }) {
  
  const navigation = useNavigation();
  
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
  };


  return (
    <>
    <View style={styles.upSide}>
      <Text style={styles.title}>{ title }</Text>
      <Text style={styles.seeAll}>Ver tudo</Text>
    </View>  
      <FlatList 
      horizontal={true}
      data={data}
      keyExtractor={hero => hero.name}
      renderItem={({ item })=>(
        <TouchableOpacity
        style={styles.shadow} 
        onPress={ () => navigation.navigate('Info', 
        {name: item.name,
        alterego: item.alterEgo,
        background: item.imagePath,
        description: item.biography,
        birth: item.caracteristics.birth,
        weight: `${item.caracteristics.weight.value}${item.caracteristics.weight.unity}`,
        height: `${item.caracteristics.height.value}${item.caracteristics.height.unity[0]}`,
        universe: `${item.caracteristics.universe}`,
        force: item.abilities.force,
        intelligence: item.abilities.intelligence,
        agility: item.abilities.agility,
        endurance: item.abilities.endurance,
        velocity: item.abilities.velocity,
        movies: item.movies
        })}>
        <ImageBackground
        borderRadius={10} 
        style={styles.image}
        source={ images.chars[item.imagePath]
        }>
        <LinearGradient colors={['rgba(0,0,0,0.2)', '#000']} style={styles.gradient}>
        <Text style={styles.altergo}>{item.alterEgo}</Text>
        <Text style={styles.name}>{item.name}</Text>
        </LinearGradient>
        </ImageBackground>
        </TouchableOpacity>
      )}
      />
    </>
  );
}

const styles = StyleSheet.create({
  title:{
    fontSize: 28,
    fontFamily: 'Gilroy-Heavy',
    color: "#F2264B",
    fontWeight: 'bold'
  },
  seeAll:{
    fontSize: 16,
    fontFamily: 'Gilroy-Medium',
    marginBottom: 5,
    color: '#c1c1cf'
  },
  upSide:{
    marginHorizontal: 10,
    marginVertical: 20,
    justifyContent: 'space-between',
    alignItems: 'flex-end',
    flexDirection: 'row'
  },
  shadow:{
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 12,
    },
    shadowOpacity: 0.58,
    shadowRadius: 16.00,
    
    elevation: 24,
  },
  image: {
    width: 140,
    height: 250,
    flex: 1,
    justifyContent: "flex-end",
    marginHorizontal: 10,
    padding: 0,
  },
  name:{
    color: "white",
    fontSize: 22,
    width: 100,
    marginTop: -4,
    fontFamily: 'Gilroy-Heavy',
  },
  altergo:{
    color: "#B7B7C8",
    fontSize: 13,

  },
  gradient:{
    marginHorizontal: 10,
    width: 140,
    borderRadius: 10,
    marginLeft: 0,
    paddingLeft: 10,
    paddingBottom: 10,
  }
});