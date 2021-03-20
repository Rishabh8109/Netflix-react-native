import * as React from 'react';
import { Ionicons  , Feather} from '@expo/vector-icons';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator, TransitionPresets } from '@react-navigation/stack';
import {Image , View} from 'react-native'
import Colors from '../constants/Colors';
import useColorScheme from '../hooks/useColorScheme';
import HomeScreen from '../screens/HomeScreen';
import MovieDetailsScreen from '../components/MovieDetails/Index';
import TabTwoScreen from '../screens/TabTwoScreen';
import { BottomTabParamList, HomeParamList, TabTwoParamList } from '../types';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import AntDesign from 'react-native-vector-icons/AntDesign';
import SearchScreen from '../screens/SearchScreen';
import TopNavigator from './TopNavigator';

const BottomTab = createBottomTabNavigator<BottomTabParamList>();

export default function BottomTabNavigator() {
  const colorScheme = useColorScheme();

  return (
    <BottomTab.Navigator
      initialRouteName="Home"
      tabBarOptions={{ activeTintColor: Colors[colorScheme].tint}}
      >
      <BottomTab.Screen
        name="Home"
        component={TabOneNavigator}
        options={{
          tabBarIcon: ({ color }) => <AntDesign name="home" color={color} size={20} />
        }}
      />
      <BottomTab.Screen
        name="Videos"
        component={TabTwoNavigator}
        options={{
          tabBarIcon: ({ color }) => <MaterialIcons name="video-library" color={color} size={20}/>,
        }}
      />
      <BottomTab.Screen
        name="Search"
        component={SearchScreen}
        options={{
          tabBarIcon: ({ color }) => <AntDesign name="search1" color={color} size={20} />,
        }}
      />
      <BottomTab.Screen
        name="Downloads"
        component={TabTwoNavigator}
        options={{
          tabBarIcon: ({ color }) => <AntDesign name="download" color={color} size={20}/>,
        }}
      />
    </BottomTab.Navigator>
  );
}


const TabOneStack = createStackNavigator<HomeParamList>();

function TabOneNavigator() {
  return (
    <TabOneStack.Navigator
     screenOptions={{
       headerShown : false,
       ...TransitionPresets.ScaleFromCenterAndroid
     }}
    >
      <TabOneStack.Screen
        name="TabScreen"
        component={TopNavigator}

        options={{
          headerShown : true,
          headerTitleStyle : {
            display :'none'
          },
          headerStyle : {
            backgroundColor :'#000'
          },
          headerLeft : (() => (
            <Image
              source={{uri : "https://cdn.jim-nielsen.com/ios/512/netflix-2018-11-01.png"}}
              style={{
                 width: 40,
                 height : 40,
                 marginLeft : 10,
                 transform : [{scale : .8}]
              }}
            />
          )),
          headerRight : (() =>  {
            return (
              <View style={{
                display :'flex',
                justifyContent :'space-around',
                width : 80,
                flexDirection :'row',
                alignItems :'center'
              }}>
                <AntDesign name="search1" color="#fff" size={20} />
                <Feather name="cast" color="#fff" size={20} />
              </View>
            )
          }),
          headerRightContainerStyle : {
            paddingRight : 20
          }
        }}
      />
      <TabOneStack.Screen
        name="MovieDetailsScreen"
        component={MovieDetailsScreen}
      />
    </TabOneStack.Navigator>
  );
}

const TabTwoStack = createStackNavigator<TabTwoParamList>();

function TabTwoNavigator() {
  return (
    <TabTwoStack.Navigator
      screenOptions={{
        headerShown : false,

      }}
    >
      <TabTwoStack.Screen
        name="TabTwoScreen"
        component={TabTwoScreen}
      />
    </TabTwoStack.Navigator>
  );
}
