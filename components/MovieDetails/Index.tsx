import React from "react";
import { View, Text, SafeAreaView, Image, StatusBar } from "react-native";
import { styles } from "./style";
import { ScrollView, TouchableOpacity } from "react-native-gesture-handler";
import { useRoute } from "@react-navigation/native";
import AntDesign from "react-native-vector-icons/AntDesign";
import EvilIcon from 'react-native-vector-icons/EvilIcons';
import Feather from "react-native-vector-icons/Feather";
import Artists from "./Artists";


interface IRouteProp {
   route : {
     params : {
       items : {
         item : {
           id : number,
           backdrop_path : String,
           title : String ,
            release_date : String,
            original_language : String,
            vote_average : String,
            overview : String,

         }
       }
     }
   }
}

const Index = (prop : IRouteProp) => {
  const route = useRoute();
  const item = prop.route?.params.items.item;

  return (
    <View style={styles.container}>
      <StatusBar barStyle="default" />
      <Image
        source={{
          uri: `https://image.tmdb.org/t/p/w500${item.backdrop_path}`,
        }}
        style={styles.image}
        resizeMode="contain"
      />
      <EvilIcon name="play" color="#fff" size={70} style={styles.playButton2}/>
      <Text style={styles.movieTitle}>{item.title}</Text>
      <ScrollView style={styles.descriptionAndShare}>
          <View
            style={{
              backgroundColor: "#000",
              padding: 15,
              borderBottomColor: "#141414",
              borderWidth: 3,
            }}
          >
            <Text style={styles.detail}>Release : {item.release_date}</Text>
            <Text style={styles.detail}>Language : {item.original_language}</Text>
            <Text style={styles.detail}>
              Rating : {item.vote_average} {""}
              <AntDesign name="star" color="#ff2" size={13} />
            </Text>
          </View>
          <Text style={styles.desc}>{item.overview}</Text>
          <View style={styles.icons}>
            <TouchableOpacity>
                <Feather name="bookmark" color="#fff" size={25} />
            </TouchableOpacity>
            <TouchableOpacity>
                <AntDesign name="like2" color="#fff" size={25} />
            </TouchableOpacity>
            <TouchableOpacity>
                <AntDesign name="sharealt" color="#fff" size={25} />
            </TouchableOpacity>
          </View>
           {/* {Artist details and recommended Movies} */}
           <Artists id={item.id} />
      </ScrollView>
    </View>
  );
};

export default Index;
