import React, { Component } from 'react';
import { StyleSheet, Text ,View, FlatList,Image,Button, TouchableOpacity, Alert,TextInput,CheckBox,Picker } from 'react-native';


// var requestOptions = {
//   method: 'GET',
//   redirect: 'follow'
// };

// fetch("https://192.168.1.4:45455/api/Products/pagingm?LanguageId=vi", requestOptions)
//   .then(response => response.text())
//   .then(result => console.log(result))
//   .catch(error => console.log('error', error));

 const ApiGetAllProduct = "http://192.168.0.118:45455/api/Products/pagingm?LanguageId=vi";

async function getProductFromServer(){
    try {
        let response = await fetch(ApiGetAllProduct);
        let responseJson = await response.json();
        return responseJson.items;
    } catch (error) {
        console.error(`error iss  : ${error}`);
    }


}
export {getProductFromServer};


 const ApiGetAllProduct_en = "http://192.168.0.118:45455/api/Products/pagingm?LanguageId=en";

async function getProductFromServer_en(){
    try {
        let response = await fetch(ApiGetAllProduct_en);
        let responseJson = await response.json();
        return responseJson.items;
    } catch (error) {
        console.error(`error iss  : ${error}`);
    }


}
export {getProductFromServer_en};