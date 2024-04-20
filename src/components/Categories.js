import React from 'react'
import { Image, ScrollView, Text, Touchable, TouchableOpacity, View } from 'react-native'
import categoryData from '../api'

const Categories = ({categories ,activeCategory, handleCategory}) => {
    console.log("categoryComponent");
  return (
    <View>
      <ScrollView horizontal showsHorizontalScrollIndicator={false}>
        {
            categories.map((cat,index)=>{

                let isActive =  cat.strCategory==activeCategory;

                let activeButtonClass = isActive ? "orange":"white";


                return (
                    <TouchableOpacity key={index} style={{paddingHorizontal: 5}}
                    onPress={
                        ()=>handleCategory(cat.strCategory)
                    }
                    >
                        <View padding={5} backgroundColor={activeButtonClass} borderRadius={50}>
                            <Image source={{uri: cat.strCategoryThumb}} height={50} width={50} borderRadius={50}/>
                        </View>
                        <Text style={{textAlign:"center"}}>{cat.strCategory}</Text>
                    </TouchableOpacity>
                )
            })
        }
      </ScrollView>
    </View>
  )
}

export default Categories
