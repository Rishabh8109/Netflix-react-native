import * as React from 'react';
import useFetch from '../hooks/useFetch';
import { ScrollView, Text, View , FlatList , StyleSheet} from 'react-native'

import {
  POPULAR_MOVIE_API_URL,
  TOP_RATED_MOVIE_API_URL,
   NOW_PLAYING_MOVIE_API_URL,
   UPCOMING_MOVIE_API_URL
} from '../constants/api_url';


import Placeholder from '../components/Skeleton/Placeholder';
import Moives from '../components/Movies/Moives';



export default function TabOneScreen() {

  const popular_movies : any = useFetch(POPULAR_MOVIE_API_URL , []);
  const top_rated_movies : any = useFetch(TOP_RATED_MOVIE_API_URL , []);
  const now_playing_movies : any = useFetch(NOW_PLAYING_MOVIE_API_URL , []);
  const upcoming_movies : any = useFetch(UPCOMING_MOVIE_API_URL , []);


  return (
    <>
      <ScrollView >
       <View>
        <Text style={styles.title}>Popular on Netflix</Text>
        <FlatList
          data={popular_movies.data.results}
          renderItem={({item}) => (
            <>
              <Placeholder loading={popular_movies.loading}>
                 <Moives item={item}  />
              </Placeholder>
            </>
          )}
          keyExtractor={item => item.id.toString()}
          horizontal
          style={{marginLeft : 5}}
        />
        <Text style={styles.title}>Top Rated</Text>
        <FlatList
          data={top_rated_movies.data.results}
          renderItem={({item}) => (
            <>
              <Placeholder loading={top_rated_movies.loading}>
                 <Moives item={item} />
              </Placeholder>
            </>

          )}
          keyExtractor={item => item.id.toString()}
          horizontal
          style={{marginLeft : 5}}
        />
        <Text style={styles.title}>Now Playing</Text>
        <FlatList
          data={now_playing_movies.data.results}
          renderItem={({item}) => (
            <>
              <Placeholder loading={now_playing_movies.loading}>
                 <Moives item={item} />
              </Placeholder>
            </>
          )}
          keyExtractor={item => item.id.toString()}
          horizontal
          style={{marginLeft : 5}}
        />
        <Text style={styles.title}>Upcoming</Text>
        <FlatList
          data={upcoming_movies.data.results}
          renderItem={({item}) => (
            <>
              <Placeholder loading={upcoming_movies.loading}>
                 <Moives item={item} />
              </Placeholder>
            </>

          )}
          keyExtractor={item => item.id.toString()}
          horizontal
          style={{marginLeft : 5}}
        />
       </View>
     </ScrollView>
    </>
  );
}


const styles = StyleSheet.create({

  title: {
    color: "#fff",
    paddingVertical: 15,
    fontSize: 20,
    fontWeight :'bold',
    fontFamily : 'sans-serif',
    marginLeft: 10,
  },

});

