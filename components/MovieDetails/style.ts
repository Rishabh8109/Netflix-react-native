
import { StyleSheet , Dimensions} from 'react-native'

export const styles = StyleSheet.create({
   container : {
     backgroundColor : '#141414',
     height : Dimensions.get('window').height
   },
    image : {
      width : Dimensions.get('window').width,
      aspectRatio : 4 /3,
      resizeMode : "cover",
      position :'relative'
    },
    movieTitle: {
      color : '#fff',
      fontWeight :'bold',
      fontSize : 20,
      marginVertical : 1,
      fontFamily :'sans-serif',
      backgroundColor : '#000',
      paddingVertical : 10,
      paddingHorizontal : 20
    },
    detail : {
      color : '#f2f3f5',
      fontSize : 13,
      marginHorizontal : 2
    },
    desc : {
      color : "#f2f3f5",
      fontSize : 13,
      margin : 10,
      fontFamily :'sans-serif',
      paddingHorizontal : 10
    },
    descriptionAndShare : {
      backgroundColor : '#000',
      marginVertical : 3,
      height : "100%"
    },
    icons  : {
      display : 'flex',
      flexDirection : 'row',
      justifyContent :'space-around',
      alignItems :'center',
      width : 200,
      marginTop : 15
    },
    artistWrapper : {
      padding : 10,
      marginVertical : 3,
      height : Dimensions.get('window').height / 1.5
    },
    Avatar : {
      width : 70,
      height : 70,
      borderRadius : 50,
      margin : 10
    },
    artistsName : {
      color : "#fff",
      fontSize : 10,
      textAlign :'center'
    },
    department : {
      color : '#f2f3f5',
      fontSize : 10,
      textAlign :'center'
    },
    Title: {
        color : '#dfdfe8',
         fontSize : 16 ,
         fontFamily : 'sans-serif' ,
         fontWeight : 'bold' ,
         marginLeft : 10 ,
          marginTop : 14
    },
    playButton2 : {
      position :'absolute',
      top : "16%",
      left : "38%",
      color :'#fff',
    }
})
