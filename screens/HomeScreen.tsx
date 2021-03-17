import * as React from 'react';
import { StyleSheet ,StatusBar , FlatList,ScrollView ,} from 'react-native';
import Moives from '../components/Movies/Moives';
import { Text, View ,} from '../components/Themed';
import useFetch from '../hooks/useFetch';

import {
  POPULAR_MOVIE_API_URL,
  TOP_RATED_MOVIE_API_URL,
   NOW_PLAYING_MOVIE_API_URL,
   UPCOMING_MOVIE_API_URL
} from '../constants/api_url';


export default function TabOneScreen() {

  const popular_movies : any = useFetch(POPULAR_MOVIE_API_URL , []);
  const top_rated_movies : any = useFetch(TOP_RATED_MOVIE_API_URL , []);
  const now_playing_movies : any = useFetch(NOW_PLAYING_MOVIE_API_URL , []);
  const upcoming_movies : any = useFetch(UPCOMING_MOVIE_API_URL , []);


  return (
     <ScrollView style={styles.container}>
       <View>
        <Text style={styles.title}>Popular on Netflix</Text>
        <FlatList
          data={popular_movies.results}
          renderItem={({item}) => <Moives item={item} />}
          keyExtractor={item => item.id}
          horizontal
          style={{marginLeft : 5}}
        />
        <Text style={styles.title}>Top Rated</Text>
        <FlatList
          data={top_rated_movies.results}
          renderItem={({item}) => <Moives item={item}/>}
          keyExtractor={item => item.id}
          horizontal
          style={{marginLeft : 5}}
        />
        <Text style={styles.title}>Now Playing</Text>
        <FlatList
          data={now_playing_movies.results}
          renderItem={({item}) => <Moives item={item}/>}
          keyExtractor={item => item.id}
          horizontal
          style={{marginLeft : 5}}
        />
        <Text style={styles.title}>Upcoming</Text>
        <FlatList
          data={upcoming_movies.results}
          renderItem={({item}) => <Moives item={item}/>}
          keyExtractor={item => item.id}
          horizontal
          style={{marginLeft : 5}}
        />
       </View>
     </ScrollView>
  );
}

const styles = StyleSheet.create({
  container : {
    paddingVertical : 20
  },
  title: {
    color: "#fff",
    paddingVertical: 15,
    fontSize: 20,
    fontWeight :'bold',
    fontFamily : 'sans-serif',
    marginLeft: 10,
  },

});

