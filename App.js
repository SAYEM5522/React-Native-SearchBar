import React from 'react';
import { KeyboardAvoidingView, StyleSheet, Text, TextInput, View } from 'react-native';
import {StatusBar} from "react-native"
import { EvilIcons } from '@expo/vector-icons';
const SaerchBarHeight=35;
const SaerchBarWidth=90;

export default function App() {
  return (
    <View style={styles.container}>
      <View style={styles.Header}>
        <Text style={styles.HeaderText}>Hello</Text>
        <View style={styles.SearchBar}>
        <EvilIcons style={styles.SearchIcon} name="search" size={24} color="black" />
        </View>
      </View>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    top:20,
  },
  Header:{
    flexDirection:'row',
    alignItems:'center',
    justifyContent:'space-between',

  },
  HeaderText:{
    fontSize:30,
    fontWeight:'bold',
    marginLeft:20,
  },
  SearchIcon:{
    position:'absolute',
    left:SaerchBarWidth-40,
    top:5

  },
  SearchBar:{
    width:SaerchBarWidth,
    height:SaerchBarHeight,
    borderRadius:SaerchBarHeight/2,
    borderWidth:1,
    borderColor:'black',
    position:'relative',
    marginRight:50,
  }
});
