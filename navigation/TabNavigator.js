import React, { Component } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import Feed from "../screens/Feed";
import CreatePost from "../screens/CreatePost";

const BottomTabNavigator = ()=>{
 return(

    <Tab.Navigator
      screenOptions={({route})=>({
        tabBarIcon:({focused, color, size})=>{
          let iconName;
          if(route.name === 'Feed'){
            iconName = focused?'book':'book-outline';

          } else if(route.name === 'Criar Posts'){
            iconName = focused? 'create' : 'create-outline';
          }
          return <Ionicons name={iconName} size={size} color={color} />;
        },        
      })}
      tabBarOptions={{
        activeTintColor : 'tomato',
        inactiveTintColor : 'gray',
      }}
    >
      <Tab.Screen name = "Feed" component={Feed} />
      <Tab.Screen name = "Criar Posts" component={CreatePost} />
    </Tab.Navigator>
  
 ) 
}
  
  


export default BottomTabNavigator