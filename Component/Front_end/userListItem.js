import React, { Component } from 'react';
import { StyleSheet, Text ,View, FlatList,Image,Button, TouchableOpacity, Alert,TextInput,CheckBox,Picker } from 'react-native';
import Swipeout  from 'react-native-swipeout';
import { render } from 'react-dom';
import UserData from '../Data/UserData.js';
import HumanData from '../Data/BranchData.js';
import EditItem from '../Back_end/EditItem.js';
import AddItem from '../Back_end/AddItem.js';
import { getProductFromServer } from '../../Networking/server.js';

class UserListItem extends Component {
  constructor(props){
    super(props);
    this.state={
      activeRowKey:null,
    };
  }
    render(){
        
      const swipeSettings={
      autoClose:true ,
      onClose: (secId,rowId, direction) => {
        if (this.state.activeRowKey != null)
        {
          this.setState({activeRowKey:null});
        }

      },
      onOpen: (secId,rowId, direction) => {
        this.setState({activeRowKey: this.props.item.id});
      
      },
      right: [
        {
          onPress: () =>{
           
             this.props.parentFlatList.refs.editItem.showEditItem(UserData[this.props.index], this);
             },
          text:'Update', type:'primary'
        },
        {
          onPress: () =>{
              Alert.alert(
              'Thông Báo',
              'Are you sure to wanna Delete this chứ ???',
              [
                {text:'No', onPress:()=> console.log('cancel Pressed'), style:'cancel'},

                {text:'Yes', onPress:()=>
                {UserData.splice(this.props.index, 1); }},

              ],
                { cancelable : true}
              );
          },
          text:'Delete', type:'delete'
        }
      ],

    }

      const touchSettings={
      onPress : () => {
        Alert.alert('Bạn đã chạm')
      
      },
      underlayColor : "white",

        }
  return (
    

     <Swipeout {...swipeSettings} >
      <TouchableOpacity {...touchSettings}>
<View style={styles.containerr}>
  

      <View style={styles.vieRow}>
        <Image style= {{ height:64, width:64}} source={{uri:'http://192.168.1.4:45455'+this.props.item.thumbnailImage}}></Image>
          <View style={styles.vieCol} >
            <View style={{flexDirection:"row"}}>
              <Text style={{fontSize:14, fontWeight:"bold",color:"red"}}>
                  {this.props.item.id} 
              </Text>
              <Text style={{width:3}}/>
              <Text style={{fontSize:14, fontWeight:"bold",color:"red"}}>
                    ( Số lượng : {this.props.item.stock})
              </Text>
            </View>

            <Text style={styles.title}>
                {this.props.item.name}
            </Text>

            <Text style={styles.title}>
                {this.props.item.description}
            </Text>
        </View>
        </View>
       
    </View>
     {/* -----------đường kẻ--------------- */}
     <View style={{backgroundColor:"lightgrey", width:'100%',height:1}}></View>
    </TouchableOpacity>
      </Swipeout>



  );

  function newFunction() {
    _onPressButton(); {
      alert('You tapped the button!');
    }
  }
  }
}

const styles = StyleSheet.create({

  container: {
        flex: 1,
    backgroundColor: '#fff',
    alignItems: 'stretch',
    justifyContent: 'center',
   marginTop: 22,    
  
  },

  viewCol:{
    flex :1,
    backgroundColor: '#fff',
    justifyContent: 'center',
    flexDirection:'column',
  },
  buttonn:{
      flex:1,
      backgroundColor: '#00aeef',
      borderColor: 'red',
      borderWidth: 5,
      borderRadius: 15   
      
  },

  viewRow:{
    marginTop:30,
    flex :1,
    backgroundColor: '#fff',
    alignItems: 'center',
    flexDirection:'row',
  },

    // Tren la cua List
    // Duoi la cua listitem

  containerr: {
    flex: 1,
    paddingRight:3,
    paddingBottom:3,
    borderRadius:4,

    backgroundColor: '#FFF',
    alignItems: 'center',
    justifyContent: 'center',
    shadowColor:'#000',
    shadowOpacity: 0.3,
    shadowRadius:10,
    shadowOffset:{width: 0 ,height:0},
    

  },

  title:{
    fontSize:12,
    
  },

  vieRow:{
    flex: 1,
    paddingRight:3,
    paddingTop:3,
    paddingBottom:3,
    borderRadius:4,
    borderColor:"black",
    alignItems: 'center',
    justifyContent: 'center',
    shadowColor:'#000',
    shadowOpacity: 0.3,
    shadowRadius:10,
    shadowOffset:{width: 0 ,height:0},
    flex :1,
    backgroundColor: '#FFF',
    alignItems: 'center',
    flexDirection:'row',
  },

  vieCol:{
    flex :1,
    backgroundColor: '#fff',
    justifyContent: 'center',
    flexDirection:'column',
    marginLeft:5,
  },
  
  buttonnview:{
    height:32,
    width:48,
    flexDirection:'row',
    marginRight:'8%',
  },
});




export default class userList extends Component {

  constructor(props){
        super(props);
       
        this.state={
          selectedCountry : null,
          ProductFromServer :[]
        };
        this._onPressAdd = this._onPressAdd.bind(this);
      }

      componentDidMount(){
        this.refreshDataFromServer();
      }

      refreshDataFromServer = () =>{
      getProductFromServer().then((products)=>{
          this.setState({ProductFromServer:products})
      }).catch((error) =>{
         this.setState({ProductFromServer:[]})
      })
      ;}


    countryList = () =>{
        return(  HumanData.map( (x) => { 
              return( <Picker.Item label={x.branch} key={x.id} value={x.id}  />)} ));
    }


    _onPressAdd(){
      this.refs.addItem.showAddItem();
      
    }


  render(){

  return (
    <View style={styles.container}>
        <View style={{backgroundColor:"#FF3836", alignItems:"center",justifyContent:"center",flexDirection:"row"}}>
          <View style={{width:"100%" , alignItems:"center", flexDirection:"row"}} >
          </View>
        </View>
        
        {/* data={UserData} this.state.ProductFromServer*/}
        <FlatList data={this.state.ProductFromServer}  renderItem={({item, index}) => { return (<UserListItem item={item} index={index} parentFlatList={this}></UserListItem>);}} />

        <AddItem ref={'addItem'} parentFlatList={this}>

        </AddItem>


        <EditItem ref={'editItem'} parentFlatList={this}>

        </EditItem>

      
    </View>
  );
  }
}


