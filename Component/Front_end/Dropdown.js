import { StatusBar } from 'expo-status-bar';
import React, {useState} from 'react';
import { StyleSheet, Text,ScrollView ,View, FlatList,Image,Button, TouchableOpacity,Picker, } from 'react-native';

export default function Dropdown(props) {
  
    const{user} = props
    const [selectedValue, setSelectedValue] = useState();
  return (

    
<View style={styles.container}>
    <View style={styles.viewRow}>
        <Text style={styles.title}>
                
            </Text>
      <Picker
        selectedValue={selectedValue}
        style={{  width: 150 }}
        onValueChange={(itemValue, itemIndex) => setSelectedValue(itemValue)}
      >

       
              
      </Picker>

        </View>
    </View>
    
  );
  }


const styles = StyleSheet.create({
  container: {
    paddingRight:3,
    paddingBottom:3,
    borderRadius:4,
    borderColor:"black",
    backgroundColor: '#FFF',
    justifyContent: 'center',
    shadowColor:'#000',
    shadowOpacity: 0.3,
    shadowRadius:10,
    shadowOffset:{width: 0 ,height:0},
    

  },

  viewRow:{
    
    flexDirection:'row',
  },

  viewCol:{
    flex :1,
    backgroundColor: '#fff',
    justifyContent: 'center',
    flexDirection:'column',
  },
  buttonn:{
    backgroundColor: 'lightgreen',
    height:32,
    alignItems: 'center',
    alignContent:'center',
    textAlign:'center',
    textAlignVertical:"center",
    alignSelf:"center",
    width:32,
    borderRadius:5,
    
  },
  buttonnview:{
    height:32,
    width:48,
    flexDirection:'row',
    marginRight:'8%',
  },
});
