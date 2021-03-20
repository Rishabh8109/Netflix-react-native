import React from 'react';
import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';
import HomeScreen from '../screens/HomeScreen';
import {useRoute} from '@react-navigation/native';
import {
  API_KEY,
  POPULAR_MOVIE_API_URL,
  TOP_RATED_MOVIE_API_URL,
   NOW_PLAYING_MOVIE_API_URL,
   UPCOMING_MOVIE_API_URL
} from '../constants/api_url';
import useGenreMovies from '../hooks/useGenreMovies';
import useFetch from '../hooks/useFetch';
import { ScrollView, Text, View , FlatList , StyleSheet} from 'react-native'
import Placeholder from '../components/Skeleton/Placeholder';
import Moives from '../components/Movies/Moives';

// creating stack
const Tab = createMaterialTopTabNavigator();

function Example() : JSX.Element {
  const route : any = useRoute();

  // destructring data
  const genreId = route.params.genreId;

  // useGenreMovie hook
  const popular_movies : any = useGenreMovies(POPULAR_MOVIE_API_URL ,genreId, []);
  const top_rated_movies : any = useGenreMovies(TOP_RATED_MOVIE_API_URL ,genreId, [] );
  const now_playing_movies : any = useGenreMovies(NOW_PLAYING_MOVIE_API_URL ,genreId, [] );
  const upcoming_movies : any = useGenreMovies(UPCOMING_MOVIE_API_URL ,genreId, [] );


  return (
    <>
      <ScrollView >
       <View>
        <Text style={styles.title}>Popular on Netflix</Text>
        <FlatList
          data={popular_movies.data}
          renderItem={({item}) => (
            <>
              <Placeholder loading={popular_movies.loading}>
                 <Moives item={item}  />
              </Placeholder>
            </>
          )}
          keyExtractor={item => item.id}
          horizontal
          style={{marginLeft : 5}}
        />
        <Text style={styles.title}>Top Rated</Text>
        <FlatList
          data={top_rated_movies.data}
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
          data={now_playing_movies.data}
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
          data={upcoming_movies.data}
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
  )
}

const TopNavigator = () => {
  const data : any = useFetch(`https://api.themoviedb.org/3/genre/movie/list?api_key=${API_KEY}&language=en-US` , []);
  return (
      <Tab.Navigator
       initialRouteName="All"
       swipeVelocityImpact={0.1}
       timingConfig={{duration : 500}}

       tabBarOptions={{
         scrollEnabled : true,
         tabStyle : {
            color : '#fff',
            width: 100,
            fontSize : 10,
            backgroundColor :'#000',
            marginBottom : 1
         },
         indicatorStyle : {
           borderBottomColor : "red",
           borderBottomWidth : 2
         },
        labelStyle : {
          fontSize : 10
        }
       }}
      >
        <Tab.Screen name={"All"} component={HomeScreen} />
        {
          data.data.genres && data.data.genres.map((item : any , i : number) => (
            <Tab.Screen
             name={`${item.name}`}
             component={Example}
             initialParams={{
               genreId : item.id
             }}
             key={i}
             />
          ))
        }

      </Tab.Navigator>
  )
}

export default TopNavigator;



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

