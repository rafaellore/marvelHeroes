import React from 'react';
import { ImageBackground, Text, FlatList, StyleSheet } from 'react-native';

export default function MovieList({ movies }) {

  const images = {
    movies:{
      captainAmerica: require('../assets/movies/captain-america-1.jpg'),
      captainAmerica2: require('../assets/movies/captain-america-2.jpg'),
      captainAmerica3: require('../assets/movies/captain-america-3.jpg'),
      antMan: require('../assets/movies/ant-man.jpg'),
      spiderManHomecoming: require('../assets/movies/spider-man-homecoming.jpg'),
      hulk: require('../assets/movies/hulk.jpg'),
      avengers1: require('../assets/movies/avengers-1.jpg'),
      avengers2: require('../assets/movies/avengers-2.jpg'),
      avengers3: require('../assets/movies/avengers-3.jpg'),
      avengers4: require('../assets/movies/avengers-4.jpg'),
      spiderMan: require('../assets/movies/spider-man-1.jpg'),
      spiderMan2: require('../assets/movies/spider-man-2.jpg'),
      spiderMan3: require('../assets/movies/spider-man-3.jpg'),
      spiderManFarFromHome: require('../assets/movies/spider-man-far-from-home.jpg'),
      blackPanther: require('../assets/movies/black-panther.jpg'),
      ironMan: require('../assets/movies/iron-man-1.jpg'),
      ironMan2: require('../assets/movies/iron-man-2.jpg'),
      ironMan3: require('../assets/movies/iron-man-3.jpg'),
      fantasticFour1: require('../assets/movies/fantastic-four-1.jpg'),
      fantasticFour2: require('../assets/movies/fantastic-four-2.jpg'),
      deadpool1: require('../assets/movies/deadpool-1.jpg'),
      deadpool2: require('../assets/movies/deadpool-2.jpg'),
      venom: require('../assets/movies/venom.jpg'),
      punisher: require('../assets/movies/punisher.jpg'),
      guardiansOfTheGalaxy1: require('../assets/movies/guardians-of-the-galaxy-1.jpg'),
      captainMarvel: require('../assets/movies/captain-marvel.jpg'),
    }
  };

  return (
    <>
    <Text style={styles.title}>Filmes</Text>
      <FlatList 
      horizontal={true}
      data={movies}
      renderItem={({ item })=>(
        <ImageBackground
        borderRadius={10} 
        resizeMode={'cover'}
        style={styles.image}
        source={
          images.movies[item]
        }>
        </ImageBackground>
      )}
      />
    </>
  );
}

const styles = StyleSheet.create({
  image:{
    width: 190,
    height: 300,
    marginHorizontal: 5
  },
  title:{
    color: "#fff",
    fontSize: 28,
    fontFamily: 'Gilroy-Bold',
    marginTop: 10,
    marginVertical: 10
  }
});