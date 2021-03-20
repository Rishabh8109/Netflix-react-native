import React from 'react'
import { View, Text , Image , SafeAreaView} from 'react-native';
import {styles} from './style';
import {useNavigation} from '@react-navigation/native'
import { TouchableOpacity, TouchableWithoutFeedback } from 'react-native-gesture-handler';

interface proptype {
  item : {
    poster_path : String
  }
}

const Moives = (prop : proptype) => {
   const navigation = useNavigation();

  return (
    <SafeAreaView >
        <TouchableOpacity onPress={() => navigation.navigate('MovieDetailsScreen' , {items : prop})} activeOpacity={.8}>
          <Image
          source={{
            uri : `https://image.tmdb.org/t/p/w500${prop.item.poster_path}`
          }}
          style={styles.image}
          resizeMode="cover"
          />
        </TouchableOpacity>
    </SafeAreaView>
  )
}

export default Moives;
