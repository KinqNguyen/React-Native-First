import React, { Component } from 'react';
import { StyleSheet, Text ,View, FlatList,Image,Button, TouchableOpacity, Alert,TextInput,CheckBox,Picker } from 'react-native';
const ApiGetAllProduct = "https://localhost:5001/api/Products/paging?LanguageId=vi&PageIndex=1&PageSize=20"

async function getProductFromServer(){
    try {
        let response = await fetch(ApiGetAllProduct);
        let responseJson = await response.json();
        return responseJson.items;
    } catch (error) {
        console.error(`error is : ${error}`);
    }


}
export {getProductFromServer};