import React, { useEffect, useState } from 'react'
import { Button, Image, ScrollView, StyleSheet, Text, TextInput, View } from 'react-native'
import {BellIcon, MagnifyingGlassIcon} from 'react-native-heroicons/outline'
import Categories from '../components/Categories'
import axios from 'axios';
import Recipe from '../components/Recipe';


const MainScreen = () => {

    const [categories, setCategories] = useState([]);
    const [recipies, setRecipies] = useState([]);

    useEffect(()=>{
        console.log("useEffect")
        getCategories();
        getRecipies();
    },[])

    const handleCategory=(category)=>{
        console.log("handleCategory")
        setActiveCategory(category);
        getRecipies(category);
        console.log(1)
        setRecipies([]);
    }

    const getCategories = async()=>{
        try{
            const response = await axios.get("https://www.themealdb.com/api/json/v1/1/categories.php")
            // console.log(response.data);

            if(response && response.data){
                setCategories(response.data.categories);
            }
        }
        catch(err){
            console.log("error:", err.message);
        }
    }

    const [activeCategory, setActiveCategory] = useState('Beef');
    console.log(activeCategory);

    const getRecipies = async(category="Beef")=>{
        console.log("food----"+activeCategory);
        try{
            const response = await axios.get(`https://www.themealdb.com/api/json/v1/1/filter.php?c=${category}`)
            console.log(2)
            // console.log(response.data.meals);

            if(response && response.data){
                setRecipies(response.data.meals);
            }
        }
        catch(err){
            console.log("error:", err.message);
        }
    }

    


  return (
    <View style={styles.container}>
      {/* <Text>MainScreen</Text> */}
      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={{display:"flex", flexDirection:"row", 
        alignContent:"center",
        alignItems:"center",
        justifyContent:"space-between", paddingVertical:10}}>
            <Image source={require('../images/avatar2-removebg-preview.png')} style={styles.image}/>
            <BellIcon color="black" width={40} height={40} />
        </View>

        <View >
            <Text>Hello Rishika</Text>
            <Text style={{fontSize:30,}}>Make your own Food!</Text>
            <Text style={{fontSize:30,}}>Stay at <Text style={{color:"orange"}}>
                Home</Text></Text>
        </View>

        <View style={{paddingVertical:20}}>
            <TextInput placeholder='Search any recipe here' style={styles.search}>
            </TextInput>
            {/* <MagnifyingGlassIcon color="grey"/> */}
        </View>


        <View style={{paddingVertical: 5}}>
           {categories.length>0 && <Categories categories={categories} activeCategory={activeCategory} handleCategory={handleCategory}/>} 
        </View>

        <View>
            <Recipe categories={categories} recipies={recipies}/>
        </View>

      </ScrollView>
    </View>
  )
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
    //   backgroundColor: 'orange',
      paddingVertical: 30,
      paddingHorizontal: 20
    //   alignItems: 'center',
    //   justifyContent: 'center',
    },
    image:{
        width: 50,
        height: 50,
    },
    search:{
        backgroundColor:"orange",
        paddingVertical: 5,
        borderRadius: 10,
        paddingHorizontal: 5
    }
})
export default MainScreen
