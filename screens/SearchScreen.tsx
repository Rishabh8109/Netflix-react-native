
import React , {useState , useEffect} from 'react'
import { View, Text , SafeAreaView , Button , TextInput} from 'react-native'
import { styles } from './styles';
import {API_KEY} from '../constants/api_url';
import axios from 'axios';
import { TouchableHighlight } from 'react-native-gesture-handler';
import AntDesign from 'react-native-vector-icons/AntDesign';

const SearchScreen = () => {
  const [query, setQuery] = useState<String>('');
  const [data, setdata] = useState([]);
  const [loading, setloading] = useState<boolean>(false);

  // type defination of Event(e)
  type EventType = {
    e : () => void,
    nativeEvent : {
      text : string
    }
  }

  // fething movie search data
  const SEARCH_ENDPOINT_URL = `https://api.themoviedb.org/3/search/movie?api_key=${API_KEY}&language=en-US&query=${query}&page=1&include_adult=false`;

  // Form Event emit
  const submitHandler = () => {
    setloading(true);
    axios({
      method : 'GET',
      url : SEARCH_ENDPOINT_URL,
      data : data
    }).then((res) => {
      setdata(res.data);
      setloading(false);
    }).catch((err) => {
        console.log(err);
    });
  }


    return (
    <SafeAreaView>
      <View style={styles.searchField}>
        <TextInput
            placeholder="Search Movies"
            placeholderTextColor="grey"
            style={styles.textInput}
            onChange={e => setQuery(e.nativeEvent.text)}
            focusable={true}
          />
        <TouchableHighlight onPress={submitHandler}>
           <Text style={styles.button}>
             <AntDesign name="search1" color="#fff" size={20} />
           </Text>
        </TouchableHighlight>
      </View>
  </SafeAreaView>
  )
}

export default SearchScreen;
