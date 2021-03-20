import React , { useCallback , useState}from 'react'
import {useFocusEffect} from '@react-navigation/native';
import { axiosInstance } from '../constants/axios.instance';

type ParamType = {
  API_URL : string,
  initialState : [],
  genreId : string
}

const useGenreMovies = (API_URL : string , genreId : number , initialState : []) => {

  const [data, setdata] = useState<[]>(initialState);
  const [loading, setloading] = useState(false);

  useFocusEffect(
    React.useCallback(() => {
      setloading(true);
      let isActive = true;

      if(isActive) {
         axiosInstance({
           method :'get',
           url : API_URL,
           data : data
         }).then(res => {
            const data = res.data;
            let filteredData : any = [];

            //  filtering data for category data
            data.results.map((items : object | any) => {
                items.genre_ids.filter((item : any) => {
                   if(item === genreId) {
                    filteredData.push(items);
                   } else {
                     return 'NA'
                   }
               });
            });
            setdata(filteredData);
            setloading(false);
         }).catch(err => {
           console.log(err);
         })
      }

      return () => {
        isActive = false;
      };
    }, [genreId])
  );

  return {data , loading};
}

export default useGenreMovies;
