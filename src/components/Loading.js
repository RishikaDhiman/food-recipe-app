import React from 'react'
import { ActivityIndicator, View } from 'react-native'

const Loading = () => {
  return (
    <View style={{flex:1, justifyContent:"space-between",  alignItems:"space-evenly" }}>
      <ActivityIndicator size="large" color="orange"/>
    </View>
  )
}

export default Loading
