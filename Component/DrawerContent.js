import React from "react";
import { View, Button,StyleSheet,Image } from "react-native";
import { DrawerContentScrollView, } from "@react-navigation/drawer";
import { DrawerItem } from "@react-navigation/drawer";
import { Avatar,Title, Caption, Paragraph, Drawer, Text, TouchableRipple, Switch } from "react-native-paper";

export function DrawerContent(props){
return (
    <View style={{flex:1}}>
        <DrawerContentScrollView {...props}>
            <View style={styles.drawerContent}>
                    <View style={styles.userInfoSection}>
                        <View style={{flexDirection:'row',marginTop: 15}}>
                            <Avatar.Image 
                                source={require('../assets/195521654_1705320166523523_5168465003600697018_n.jpg')}
                                size={50}
                            />
                            <View style={{marginLeft:15, flexDirection:'column'}}>
                                <Title style={styles.title}>Web Store</Title>
                                <Caption style={styles.caption}>@Trump_Biden</Caption>
                            </View>
                        </View>
                        </View>

                         <View  style={styles.roww} >
                            <View style={styles.section}>
                                <Paragraph style={[styles.paragraph, styles.caption]}>80</Paragraph>
                                <Caption style={styles.caption}>Người ghét</Caption>
                            </View>
                            <View style={styles.section}>
                                <Paragraph style={[styles.paragraph, styles.caption]}>100</Paragraph>
                                <Caption style={styles.caption}>Followers</Caption>
                            </View>
                        </View>

                          
                         <Drawer.Section style={styles.drawerSection} > 
                            <View style={{flex:1,flexDirection:"row", marginLeft:10}}>
                                  <Image
                                    style={{height:24,width:24,marginRight:5}}
                                    source={require('../assets/language.png')}
                                  />
                                 <Text style={{fontWeight:"bold",fontSize:16}}>
                                    Chọn ngôn ngữ :
                                  </Text>
                              </View>
                        <DrawerItem 
                                
                            icon ={() => <Image style={{marginLeft:50,width:26,height:26}} source={require('../assets/vietnam.png')} />}
                            label="Home"
                            onPress={() => {props.navigation.navigate('Home')}}
                        />
                        <DrawerItem 
                                                     
                            icon ={() => <Image style={{marginLeft:50,width:26,height:26}} source={require('../assets/united-kingdom.png')} />}
                            label="Profile"
                            onPress={() => {props.navigation.navigate('Profile')}}
                        />
                    </Drawer.Section>
                    
                        </View>

        </DrawerContentScrollView>
        <Drawer.Section style={styles.bottomDrawerSection}>
            <DrawerItem label="Exit"
                icon ={() => <Image style={{width:26,height:26}} source={require('../assets/sign-out.png')} /> } 
            />

        </Drawer.Section>
    </View>
);


}


const styles = StyleSheet.create({
    drawerContent: {
      flex: 1,
    },
    userInfoSection: {
      paddingLeft: 20,
    },
    title: {
      fontSize: 18,
      marginTop: 3,
      fontWeight: 'bold',
    },
    caption: {
        
      fontSize: 14,
      lineHeight: 14,
    },
    row: {
      marginTop: 20,
      flexDirection: 'row',
      alignItems: 'center',
    },
    roww: {
      marginLeft: 20,
      marginTop: 20,
      flexDirection: 'row',
      alignItems: 'center',
    },
    section: {
      flexDirection: 'row',
      alignItems: 'center',
      marginRight: 15,
    },
    paragraph: {
      fontWeight: 'bold',
      marginRight: 3,
    },
    drawerSection: {
      marginTop: 15,
    },
    bottomDrawerSection: {
        marginBottom: 15,
        borderTopColor: '#f4f4f4',
        borderTopWidth: 1
    },
    preference: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      paddingVertical: 12,
      paddingHorizontal: 16,
    },
  });