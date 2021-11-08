import React from 'react';
import { StyleSheet, Text, View } from 'react-native';


export default function Hability({title , points}) {

  const hability = [];
  const rest = 100 - points;
  const habilityRest = [];
  const newPoints = Math.round(( points / 2) - 10);

  for(let i = 0; i <= newPoints; i++){
    if(i === newPoints){
       hability.push(
        <View key = {i}>
          <Text style={styles.pointLast}></Text>
        </View>
      )
      break;
    }
    hability.push(
        <View key = {i}>
          <Text style={styles.point}></Text>
        </View>
		)
	}
  for(let i = 0; i <= rest; i++){
    habilityRest.push(
        <View key = {i}>
          <Text style={styles.pointRest}></Text>
        </View>
		)
	}

  return (
    <View style={styles.containerAll}>
      <Text style={styles.title}>{title}</Text>
      <View style={styles.container}>
        {hability}
      </View>
      <View style={styles.container}>
        {habilityRest}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container:{
    flexDirection: 'row',
    alignItems: 'center',
  },
  title:{
    color: '#B7B7C8',
    fontSize: 14,
    marginRight: 5
  },
  containerAll:{
    width: '100%',
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: 10
  },
  point:{
    backgroundColor: '#fff',
    width: 3,
    height: 14,
    marginHorizontal: 2
  },
  pointLast:{
    backgroundColor: '#fff',
    width: 3,
    height: 25,
    marginHorizontal: 2
  },
  pointRest:{
    backgroundColor: '#6b6b75',
    width: 3,
    height: 14,
    marginHorizontal: 2
  }
});