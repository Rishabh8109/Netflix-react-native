import React , {useEffect , useState}from 'react'
import { View, Text , Image , FlatList} from 'react-native';
import axios, { AxiosResponse } from 'axios';
import {API_KEY } from '../../constants/api_url';
import { styles } from './style';
import {idProps} from '../../types';
import { SafeAreaView } from 'react-native-safe-area-context';
import RecommendedMovies from './RecommendedMovies';


const renderItem = (item : any) => {
  return (
    <View style={{paddingVertical : 10}}>
       <Image
       source={{
         uri : `https://image.tmdb.org/t/p/w500${item.profile_path}`
       }}
       style={styles.Avatar}
      />
      <Text style={styles.artistsName}>{item.name}</Text>
      <Text style={styles.department}>{item.known_for_department}</Text>
    </View>

  )
}

// Artist Cast  typs
interface IArtists {
  profile_path : String,
  name : String,
  Known_for_department : String
}


const Artists : React.FC<idProps> = (prop) => {
  const [artists, setartists] = useState<IArtists[]>([]);
  const [recommended, setrecommended] = useState([]);

  const artist_url =  `https://api.themoviedb.org/3/movie/${prop.id}/credits?api_key=${API_KEY}&language=en-US`;
  const rcommendation_url = `https://api.themoviedb.org/3/movie/${prop.id}/recommendations?api_key=${API_KEY}&language=en-US&page=1`;

  const requestOne = axios.get<IArtists[]>(artist_url);
  const requestTwo = axios.get(rcommendation_url);

  useEffect(() =>{
    axios.all([requestOne, requestTwo]).then(axios.spread((...responses) => {
    const res1 : any = responses[0];
    const res2 : any = responses[1];

     // setState
     setartists(res1.data.cast);
     setrecommended(res2.data.results);

  })).catch(errors => {
      console.log(errors);
  })

  },[]);


  return (
    <View style={styles.artistWrapper}>
       <SafeAreaView>
          <Text style={styles.Title}>Casting Artists</Text>
        <FlatList
          data={artists}
          renderItem={({item}) => renderItem(item)}
          keyExtractor={(item : any) => item.id}
          horizontal={true}
        />
       </SafeAreaView>
        <RecommendedMovies data={recommended}/>
    </View>
  )
}

export default Artists;
