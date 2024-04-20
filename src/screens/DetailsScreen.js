import { useNavigation } from '@react-navigation/native'
import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { View, Text, TouchableOpacity, ScrollView, Image } from 'react-native'
import { ChevronLeftIcon, HeartIcon } from 'react-native-heroicons/outline'
import Loading from '../components/Loading'

const DetailsScreen = (props) => {
    const navigation = useNavigation();
    
    const item = props.route.params.item;
    console.log(item)

    const [details, setDetails] = useState([]);

    useEffect(()=>{
        getDetails(item.idMeal);
        console.log("sdhbsdh");
    },[])

    // console.log(details);

    const ingredientIndexes=(details)=>{
        if(!details) return [];

        const indexes = [];
        for(let i=1; i<=20; i++){
            if(details['strIngredient'+i]){
                indexes.push(i);
            }
        }
        return indexes;
    }


    const getDetails = async(id)=>{
        console.log("id----"+id);
        try{
            const response = await axios.get(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${id}`);

            if(response && response.data){
                setDetails(response.data.meals[0]);

                console.log("details");
                // console.log(details);
            }

        }
        catch(err){
            console.log("error:", err.message);
        }
    }

    const [fav, setFav] = useState('false');


  return (
    <ScrollView style={{paddingVertical: 40, paddingHorizontal:15}} showsVerticalScrollIndicator={false}>
        <View style={{flexDirection:"row", justifyContent:'space-between', alignContent:"center"}}>
        <TouchableOpacity style={{backgroundColor:"white", borderRadius:50, padding: 5}} onPress={()=>navigation.goBack()}>
            <ChevronLeftIcon size={30} color={"orange"} ></ChevronLeftIcon>
        </TouchableOpacity >
            
        <TouchableOpacity style={{backgroundColor:"white", borderRadius:50, padding: 5}} onPress={()=>setFav(!fav)}>
            <HeartIcon size={30} color={fav?'orange':"red"} />
        </TouchableOpacity>
      </View>
      { details.length==0? <Loading/> :  <>
      <View style={{paddingVertical:10}}>
        <Image source={{uri: item.strMealThumb}} width={"100%"} height={300} borderRadius={50}/>
      </View>
      <View>
        <Text style={{fontSize:30, color:"black", textAlign:"center", fontWeight: 600}}>{item.strMeal}</Text>
        {/* <Text style={{fontSize:23, color:"orange", textAlign:"center", paddingBottom: 10, fontWeight: 600}}>{details.strArea}</Text> */}
      </View>

        <View>
            <Text style={{fontSize:25, paddingVertical:10, fontWeight: 500}}>Ingredients</Text>
            {
                ingredientIndexes(details).map((i, index)=>{
                    return <View style={{flexDirection:"row", paddingVertical:6, alignContent: "center", gap: 6  }}>
                        <View style={{height: 10, width:10, backgroundColor: "orange", borderRadius: 50, alignSelf: 'center'}}></View>
                        <Text style={{fontSize:18,}}>{details['strIngredient'+i]+" - "+ details['strMeasure'+i]}</Text>
                    </View>
                })
            }
            
            <Text style={{fontSize:25, paddingVertical:10, fontWeight: 500}}>Instructions</Text>


        </View>



      </> }
    </ScrollView>
  )
}

export default DetailsScreen
