import React , {useState ,useEffect} from 'react'
import { StyleSheet, Text, View } from 'react-native';
import axios from 'axios';


export default function useFetch(API_URL : any , initialState : []) {
   const [data, setData] = useState(initialState);
    useEffect(() => {
       axios({
         method : 'GET',
         url : API_URL,
         data : data
       }).then((res) => {
         setData(res.data);
       }).catch((err) => {
           console.log(err);
       });
    }, []);

    return data;
}

