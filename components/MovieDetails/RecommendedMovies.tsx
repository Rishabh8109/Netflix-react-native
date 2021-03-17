import React , {useState , useEffect} from 'react'
import { Text, View , FlatList , Image} from 'react-native'
import { styles } from './style'
import { TouchableOpacity } from 'react-native-gesture-handler';

//define item type interface
interface IItemType {
    title : string
    poster_path : string
}

// rendered function
const renderItem = (item : IItemType) => {
  return (
    <View style={{margin : 10}}>
       <TouchableOpacity activeOpacity={.8}>
          <Image
          source={{uri : `https://image.tmdb.org/t/p/w500${item.poster_path}`}}
          style={{
            width : 150,
            height : 100,
            borderRadius : 5
          }}
          resizeMode ="cover"
          />
       </TouchableOpacity>
      <Text style={{color : '#fff' , fontSize : 12 , textAlign :'center' , marginVertical :6}}>
        {item.title}
      </Text>
    </View>
  )
}


const RecommendedMovies = (props : any) => {
  return (
   <View>
      <Text style={styles.Title}>Recommended Movies</Text>
      <FlatList
       data={props.data}
       renderItem={({item}) => renderItem(item)}
       keyExtractor={item  => item.id}
       horizontal={true}
    />
   </View>
  )
}

export default RecommendedMovies;


