
import React from 'react';
import { StyleSheet, Text, View,Image } from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import UserListItem from './Component/Front_end/userListItem';
import Product_en from './Component/Front_end/product_en';

function DataScreen1() {
  return (
    <View style={{ flex: 1, justifyContent: 'center' ,alignItems: 'center',backgroundColor:"lightblue" }}>
      <UserListItem/>
    </View>
  );
}

function DataScreen2() {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center',backgroundColor:"pink" }}>
      <Product_en/>
    </View>
  );
}


function HomeScreen() {
  return (

        <TopTab.Navigator style={{}}>
            <TopTab.Screen name='Tiếng Việt' component={DataScreen1} 
            options={{ 
              
              tabBarIcon: () => <Image style={{width:26,height:26}} source={require('./assets/house.png')}/> }} />
            <TopTab.Screen name='EngLish' component={DataScreen2}
            options={{ 
              tabBarIcon: () => <Image style={{width:26,height:26}} source={require('./assets/dashboard.png')}/> }}/>
        </TopTab.Navigator>

  );
}

function DashBorad() {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center',backgroundColor:"pink" }}>
      <Product_en/>
    </View>
  );
}

function Noti() {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center',backgroundColor:"Lightgreen" }}>
      <Text style={{fontSize: 20, color:"white" }}>Đây là Notifications Layout!</Text>
    </View>
  );
}




const Drawer = createDrawerNavigator();
const TopTab = createMaterialTopTabNavigator();
const Tab = createBottomTabNavigator();
const App=() =>{
  return (
      <NavigationContainer>
        <Tab.Navigator>
            <Tab.Screen name='Home' component={HomeScreen} 
            options={{ 
              tabBarBadge: 3,
              tabBarIcon: () => <Image style={{width:26,height:26}} source={require('./assets/house.png')}/> }} />
            <Tab.Screen name='Nổi bật' component={DashBorad}
            options={{ 
              tabBarIcon: () => <Image style={{width:26,height:26}} source={require('./assets/dashboard.png')}/> }}/>
            <Tab.Screen name='Mới nhất' component={Noti}
            options={{ 
              tabBarBadge: '+'+299,
              tabBarIcon: () => <Image style={{width:26,height:26}} source={require('./assets/notifications.png')}/> }}/>
              <Tab.Screen name='Giới thiệu' component={Noti}
            options={{ 
              tabBarBadge: '+'+299,
              tabBarIcon: () => <Image style={{width:26,height:26}} source={require('./assets/notifications.png')}/> }}/>
        </Tab.Navigator>
      </NavigationContainer>
    );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default App;