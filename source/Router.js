import React, { Component } from 'react';
import { Text, View } from 'react-native';
import { TabNavigator, StackNavigator, DrawerNavigator } from 'react-navigation';

import Userspage from './screens/Userspage';
import Search from './screens/Search';
import followers from './screens/followers';



const Router = StackNavigator({  
    followers:{screen:followers,navigationOptions:{header:null}},
    Userspage: { screen: TabNavigator({
        Userspage: {
          screen: Userspage, 
          navigationOptions: { 
            tabBarLabel: ({tintColor}) => (<Text style={[ {color:tintColor}]}>users</Text>),
            header: null
          },
        },
        Search: {
          screen: Search,
          navigationOptions: {
            tabBarLabel: ({tintColor}) => (<Text style={[ {color:tintColor}]}>search sers</Text>),
            header: null
          },
        },
        
      }, {
          cardStyle: { backgroundColor: 'rgba(0,0,0,0.5)' },
          tabBarPosition: 'bottom',
          lazy: true,
          animationEnabled: true,
          swipeEnabled: true,
          upperCaseLabel: false,
          tabBarOptions: {
            activeTintColor: '#FF4D4D',
            inactiveTintColor: '#1b1b1b',
            showIcon: true,
            //focused: true,
            style: {
              backgroundColor: '#FFF', borderTopWidth:0.4, borderTopColor:'#EEE'
            },
            indicatorStyle: { display: 'none' },
            allowFontScaling: true, 
            labelStyle: {
              fontSize: 11,
            }
          },
        })
        , navigationOptions:{header:null}}
},{ initialRouteName: 'Userspage' });

export default Router;
