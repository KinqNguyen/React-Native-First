import React, { Component } from 'react';
import { StyleSheet, Text ,View, FlatList,Image,Button, TouchableOpacity, Alert,TextInput,CheckBox,Picker } from 'react-native';
import App from '../../App.js';
import Dropdown from './Dropdown.js';
import Swipeout  from 'react-native-swipeout';
import { render } from 'react-dom';
import UserData from '../Data/UserData.js';
import HumanData from '../Data/BranchData.js';
import EditItem from '../Back_end/EditItem.js';
import AddItem from '../Back_end/AddItem.js';
import mess from '../../assets/add-user.png'
import iconlabel from '../../assets/favicon.png'


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
        this.setState({activeRowKey: this.props.user.id});
      
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
        <Image style= {{ height:64, width:64}} source={{uri: this.props.user.imgAvt}}></Image>
          <View style={styles.vieCol} >
            <View style={{flexDirection:"row"}}>
              <Text style={{fontSize:14, fontWeight:"bold",color:"red"}}>
                  {this.props.user.ten} 
              </Text>
              <Text style={{width:3}}/>
              <Text style={{fontSize:14, fontWeight:"bold",color:"red"}}>
                    ({this.props.user.id})
              </Text>
            </View>

            <Text style={styles.title}>
                {this.props.user.sex}
            </Text>

            <Text style={styles.title}>
                {this.props.user.branch}
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
    marginTop:5,
    backgroundColor: '#fff',
    alignItems: 'stretch',    
  
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
          selectedCountry : null
        };
        this._onPressAdd = this._onPressAdd.bind(this);
      }

      


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

      
      
        {/* <View style={{marginTop:50}}>
        <TextInput placeholder="Nhập tên"/>
        <TextInput placeholder="Nhập SĐT"/>
        </View>

        <View style={styles.viewinput} style={{ alignItems: 'center', flexDirection: 'row',  }}>
            <CheckBox tintColors={{ true: 'black' }} style={{}}/>
            <Text style={styles.baseText}>Male</Text>
            <CheckBox tintColors={{ true: 'black' }}   value={false}/>
            <Text style={styles.baseText}>Female</Text>
        </View>
        
        <Dropdown />
        
          <Picker
                    selectedValue={this.state.selectedCountry}
                    onValueChange={ (value) => ( this.setState({selectedCountry : value}) )}>
                    { this.countryList() }
          </Picker>
        
        
        <View style={styles.viewRow} style={{alignItems: 'center',flexDirection:'row',marginLeft:40}} >
          <Button  color="green" style={styles.buttonn} style= {{}} title="Add"> </Button>
          <View style={{width:60}}></View>
            <Button   color="#FF0000" style={styles.buttonn} title="Delete"> </Button>
            <View style={{width:60}}></View>
            <Button  color="#2D3CA5" style={styles.buttonn} title="Update"> </Button>
          </View> */}

        <View style={{height:70,backgroundColor:"#FF3836", alignItems:"center",justifyContent:"center",paddingRight:10,flexDirection:"row"}}>
          <View style={{width:"80%" , alignItems:"center", flexDirection:"row"}} >
              <Image style={{height:45,width:45,marginLeft:90}} source={iconlabel}></Image>
              <Text style={{color:"#fff", fontWeight:"bold", fontSize:15}}>Quản Lý Sinh Viên</Text>
          </View>
        <TouchableOpacity onPress={this._onPressAdd}>
          <Image style={{height:45,width:45}} source={mess}></Image>
        </TouchableOpacity>
        </View>
        
        
        <FlatList data={UserData} renderItem={({item, index}) => { return (<UserListItem user={item} index={index} parentFlatList={this}></UserListItem>);}} />

        <AddItem ref={'addItem'} parentFlatList={this}>

        </AddItem>


        <EditItem ref={'editItem'} parentFlatList={this}>

        </EditItem>

      
    </View>
  );
  }
}


