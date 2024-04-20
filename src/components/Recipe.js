import React from 'react'
import { View, Text, Image, Pressable } from 'react-native';
import MasonryList from '@react-native-seoul/masonry-list';
import { mealData } from '../api';
import Categories from './Categories';
import Loading from './Loading';
import { useNavigation } from '@react-navigation/native';

const Recipe = ({categories, recipies}) => {

  const navigation = useNavigation();

    console.log("recipyComponent")
    // console.log(recipies);
    // console.log("mealdata")
    // console.log(mealData);
  return (
    <View>
        <Text style={{fontSize: 30}}>Recipies</Text>
      <View>
        {
            categories.length==0 || recipies.length==0? <Loading/>:(
                <MasonryList
                    data={recipies}
                    keyExtractor={(item) => item.idMeal}
                    numColumns={2}
                    showsVerticalScrollIndicator={false}
                    renderItem={({item, i}) => <CardItem item={item} index={i} navigation={navigation}/>}
                    // refreshing={isLoadingNext}
                    // onRefresh={() => refetch({first: ITEM_CNT})}
                    onEndReachedThreshold={0.1}
                    // onEndReached={() => loadNext(ITEM_CNT)}
                    
                />
            )
        }
      </View>
    </View>
  )
}


const CardItem = ({item, index, navigation})=>{
    let isEven = index%2==0;
    // console.log(item);
    return(
        <View>
            <Pressable  paddingLeft={isEven?0:10} paddingVertical={10}  
              onPress={()=> navigation.navigate("DetailsScreen",{...item})}>
                <Image source={{uri: item.strMealThumb}}  height={index%3==0? 150: 250} width={160} borderRadius={50}/>
            </Pressable>
        </View>

    )
} 

export default Recipe
