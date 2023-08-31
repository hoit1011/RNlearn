import React, { useState } from 'react'
import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native'

export default function App(){
  const [zoomState,setZoomState] = useState<any>({img1: false, img2: false, img3: false})

  const toggleZoom =(img: string) => {
    setZoomState({img1: false, img2: false, img3: false, [img]: !zoomState[img]})
  }

  return (
    <View style={styles.container}>
        <Text style ={{color:'white',fontWeight:'bold',marginTop:10,fontSize:20}}>지금 당신의 학업스트레스는</Text>
        <Text style ={{color:'white',fontSize:17}}>어느정도인가요?</Text>
          <View style = {styles.ImageView}>
            <View style = {styles.imageRow}>
          <TouchableOpacity onPress={() => toggleZoom('img1')}>
            <Image 
              source={require('./assets/smile.png')}style ={[styles.EmotiomImage,zoomState.img1 && styles.zoomed]}/>
              </TouchableOpacity>
              <TouchableOpacity onPress={() => toggleZoom('img2')}>
            <Image 
              source={require('./assets/basic.png')}style ={[styles.EmotiomImage,zoomState.img2 && styles.zoomed]}/>
              </TouchableOpacity>
              <TouchableOpacity onPress={() => toggleZoom('img3')}>
              <Image
               source={require('./assets/crying.png')}style ={[styles.EmotiomImage,zoomState.img3 && styles.zoomed]}/>
              </TouchableOpacity>
          </View>
          </View>
    </View>
  )
}
const styles = StyleSheet.create({
  container: {
    backgroundColor: 'rgb(153, 204, 255)',
    alignItems: 'center',
    alignSelf:'center',
    marginTop: 200,
    width:280,
    height:180,
    borderRadius:10
  },
  ImageView: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop:20,
  },
  EmotiomImage: {
    backgroundColor: 'transparent',
    marginLeft:5,
    marginRight:5,
  },
  imageRow: {
    flexDirection: 'row', 
    alignItems: 'center', 
  },
  zoomed:{
    flexDirection: 'row',
    width:80,
    height:80
  },
});