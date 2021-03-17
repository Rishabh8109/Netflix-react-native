import { Ionicons } from '@expo/vector-icons';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator, TransitionPresets } from '@react-navigation/stack';
import * as React from 'react';

import Colors from '../constants/Colors';
import useColorScheme from '../hooks/useColorScheme';
import HomeScreen from '../screens/HomeScreen';
import MovieDetailsScreen from '../components/MovieDetails/Index';
import TabTwoScreen from '../screens/TabTwoScreen';
import { BottomTabParamList, HomeParamList, TabTwoParamList } from '../types';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import AntDesign from 'react-native-vector-icons/AntDesign';

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
          tabBarIcon: ({ color }) => <AntDesign name="home" color={color} size={20} />,
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
        component={TabOneNavigator}
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
        name="HomeScreen"
        component={HomeScreen}
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
        headerShown : false
      }}
    >
      <TabTwoStack.Screen
        name="TabTwoScreen"
        component={TabTwoScreen}
      />
    </TabTwoStack.Navigator>
  );
}
