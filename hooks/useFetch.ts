import React , {useState ,useEffect} from 'react'
import { StyleSheet, Text, View } from 'react-native';
import axios from 'axios';
import {axiosInstance} from '../constants/axios.instance';

export default function useFetch(API_URL : any , initialState : []) {
   const [data, setData] = useState(initialState);
   const [loading, setloading] = useState<boolean>(false);

    useEffect(() => {
      setloading(true);
      axiosInstance({
         method : 'GET',
         url : API_URL,
         data : data
       }).then((res) => {
         setloading(false);
         setData(res.data);
       }).catch((err) => {
           console.log(err);
       });
    }, [API_URL , loading]);

    return {data ,loading};
}

