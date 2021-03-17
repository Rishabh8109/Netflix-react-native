import React from 'react'
import { View, Text , Image , SafeAreaView} from 'react-native';
import {styles} from './style';
import {useNavigation} from '@react-navigation/native'
import { TouchableWithoutFeedback } from 'react-native-gesture-handler';

interface proptype {
  item : {
    poster_path : String
  }
}

const Moives = (prop : proptype) => {
   const navigation = useNavigation();

  return (
    <SafeAreaView style={styles.wrapper}>
        <TouchableWithoutFeedback onPress={() => navigation.navigate('MovieDetailsScreen' , {items : prop})}>
          <Image
          source={{
            uri : `https://image.tmdb.org/t/p/w500${prop.item.poster_path}`
          }}
          style={styles.image}
          resizeMode="contain"
          />
        </TouchableWithoutFeedback>
    </SafeAreaView>
  )
}

export default Moives;
