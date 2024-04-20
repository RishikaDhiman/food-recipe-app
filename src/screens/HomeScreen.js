import { useNavigation } from '@react-navigation/native';
import { StatusBar } from 'expo-status-bar';
import React, { useEffect } from 'react'
import { Button, Image, StyleSheet, Text, View } from 'react-native'

const HomeScreen = () => {

  const navigation = useNavigation();

  useEffect(()=>{
    setTimeout(()=>navigation.navigate('MainScreen'),2500)
  },[]);



  return (
    <View style={styles.container}>
      <View style={{
        // backgroundColor:"grey",
        // borderRadius:200,
        // padding:15,
        // // width: 1
      }}>
        {/* <Image source={require('../images/pizza1-removebg-preview.png')} 
        style={styles.image}/> */}
      </View>

      <View >
        <Text style={{textAlign:"center", fontSize:50, fontWeight: 600, color: "white"}}>Swiggy</Text>
        {/* <Text style={{textAlign:"center", fontSize:15, paddingTop:20,fontWeight: 600}}>Let's try some yummy recipes!</Text> */}
      </View>
      
      
      {/* <StatusBar style="light"></StatusBar> */}
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'orange',
    alignItems: 'center',
    justifyContent: 'center',
  },
    
    image:{
      width:200,
      height: 200,
      // alignSelf:"center"
    },

});

export default HomeScreen
