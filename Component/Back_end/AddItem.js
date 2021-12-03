import React, { Component } from 'react';
import { StyleSheet, Text ,View, FlatList,Image, TouchableOpacity, Alert,TextInput,Picker, Dimensions, Platform } from 'react-native';
import Dropdown from '../Front_end/Dropdown';
import Modal from 'react-native-modalbox';
import { CheckBox } from 'react-native-elements';
import Button from 'react-native-button';
import HumanData from '../Data/BranchData';
import UserData from '../Data/UserData';

var screen = Dimensions.get('window');

export default class AddItem extends Component{
  
    
    constructor(props){
        super(props);

        
        this.state={
          male:false,
          female:false,
          selectedCountry : null,
          newUserID: "",
          newUserName: "",
        };
    }
    
    OnePress(){
            this.setState({female:false,male:true})
        }
        
    TwoPress(){
            this.setState({female:true,male:false})
              }

    countryList = () =>{
        return(  HumanData.map( (x) => { 
              return( <Picker.Item label={x.branch} key={x.id} value={x.branch}  />)} ));
    }
    
    showAddItem = () => {
        this.refs.myModal.open();

    }

    sexchosen = (sex) =>{
        if(this.state.male==true)
        {sex = 'male' ;
        return sex;
    }
        else if(this.state.female==true)
        sex = 'Female';
        return sex;
    }

    picchosen = (imgAvt) =>{
         if(this.state.male==true)
        {imgAvt = 'https://cdn-icons.flaticon.com/png/128/1011/premium/1011555.png?token=exp=1634379162~hmac=c4123332066ca82503e73e3c502e4e69';
        return imgAvt;
    }
        else if(this.state.female==true)
        imgAvt = 'https://cdn-icons.flaticon.com/png/512/1704/premium/1704934.png?token=exp=1634379289~hmac=72f810e921688c8203fe9733077b0df2';
        return imgAvt;
    }

    render(){
        return(

            <Modal 
            ref={'myModal'}
            style={styles.modalbox}
            position='center'
            backdrop={true}
            
            >
        <Text style={{fontSize:18, fontWeight:"bold", alignSelf:"center",margin:5}}>Thêm mới User</Text>
         <View style={{backgroundColor:"grey", width:'80%',height:1, alignSelf:"center"}}></View>
        <View style={styles.container}>
        <View style={{marginHorizontal:5}}>

        <Text style={{fontWeight:"bold"}}>Full Name: </Text>
        <TextInput style={{borderWidth:1, borderColor:"lightgrey", borderRadius:5}} 
                   onChangeText={(text) => this.setState({newUserName : text})}
                   placeholder="Nhập tên" 
                   value={this.state.newUserName}/>


        <Text style={{fontWeight:"bold"}}>User ID : </Text>
        <TextInput keyboardType = 'numeric' 
                    style={{borderWidth:1, borderColor:"lightgrey", borderRadius:5}}
                    onChangeText={(text) => this.setState({newUserID : text})} 
                    placeholder="Nhập ID" 
                    value={this.state.newUserID} />
        

        <Text style={{fontWeight:"bold"}}>Giới tính :</Text>
        <View style={styles.viewinput} style={{ alignItems: 'center', flexDirection: 'row',  }}>
            <CheckBox 
            title="Male" 
            checked={this.state.male} 
            onPress={() => this.OnePress()}
            value={this.state.male} />


            <CheckBox  
            title="FeMale" 
            checked={this.state.female} 
            onPress={() => this.TwoPress()}
            value={this.state.female}/>
        </View>
        


        <Text style={{fontWeight:"bold"}}>Ngành : </Text>
          <Picker 
                    selectedValue={this.state.selectedCountry}
                    onValueChange={ (value) => ( this.setState({selectedCountry : value}) )}
                    value={this.state.selectedCountry}>
                    { this.countryList() }
                    
          </Picker>
        </View>
        
        <View style={styles.viewRow} style={{alignItems: 'center',alignSelf:"flex-start",flexDirection:'row',marginLeft:40}} >
          <Button  color="green" style={styles.buttonn} style= {{}} title="Add"> </Button>
          <View style={{width:60}}></View>
            <Button  onPress={()=> this.refs.myModal.close()}   > Cancel </Button>
            <View style={{width:30}}></View>
            <Button   style={{backgroundColor:"mediumseagreen", justifyContent:"center",fontSize:18,color:'white',borderRadius:6, height:30,width:100}} 
            onPress={()=>{
                if (this.state.newUserName.length==0 || this.state.newUserID.length==0 || this.state.selectedCountry== null || this.state.male == false && this.state.female == false ) {
                    alert("You must complete the User's Infomation")
                    return;}
                const sexx= this.sexchosen();
                const pic= this.picchosen();
                const newUser = {
                        id:this.state.newUserID,
                        imgAvt: pic,
                        ten:this.state.newUserName,
                        branch:this.state.selectedCountry,
                        sex: sexx, 
                    }
                    UserData.push(newUser);
                    this.refs.myModal.close()
            }}>Save </Button>
          </View>
      
        

        <AddItem ref={'addItem'} parentFlatList={this}>

        </AddItem>
      

      
    </View>

            </Modal>
        );



    }

}


const styles = StyleSheet.create({
  container: {
      marginTop:10,
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'stretch',
    
  },

  modalbox:{
    justifyContent:"center",
    borderRadius: Platform.OS === 'ios' ? 30 :0,
    shadowRadius:10,
    width: screen.width - 80,
    height:350
  }, 
});