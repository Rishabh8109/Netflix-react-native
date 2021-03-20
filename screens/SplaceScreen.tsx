import React , {useEffect} from 'react'
import { View, Text , Image , StyleSheet , PixelRatio} from 'react-native';

const SplaceScreen : React.FC = ({navigation} : any) => {
  useEffect(() => {
    const interval = setTimeout(() => {
        navigation.navigate('Root');
    }, 2000)
    return () => clearInterval(interval);
  }, []);
  return (
    <View style={styles.container}>
      <Image
        source={{uri : "https://assets.brand.microsites.netflix.io/assets/493f5bba-81a4-11e9-bf79-066b49664af6_cm_1440w.png?v=49"}}
        style={styles.logo}
      />
    </View>
  )
}

export default SplaceScreen;


const styles = StyleSheet.create({
    container : {
      flex : 1,
      justifyContent :'center',
      alignItems :'center',
    },
    logo : {
      width : 250,
      height : 200,
      transform : [
        {
          scale : .7
        }
      ]
    }
})