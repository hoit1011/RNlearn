import React, { useState } from 'react'
import { StyleSheet, Text, View, Image, TouchableOpacity, Button } from 'react-native'

export default function App(){
  const [zoomState, setZoomState] = useState<{ img1: boolean; img2: boolean; img3: boolean }>({img1: false, img2: false, img3: false});

  const toggleZoom =(img: string) => {
    setZoomState({ img1: false, img2: false, img3: false, [img]: true });
  }
  
  

  const submit = () => {
    console.log("제출했다")
  }

  return (
    <View style={styles.container}>
        <Text style ={{color:'#0087FF',fontWeight:'bold',marginTop:15,fontSize:20}}>지금 당신의 학업스트레스는</Text>
        <Text style ={{color:'#0087FF', fontWeight: 'bold', fontSize:20}}>어느정도인가요?</Text>
          <View style = {styles.ImageView}>
            <View style = {styles.imageRow}>
             <TouchableOpacity onPress={() => toggleZoom('img1')}>
               {/* <Image 
                source={require('./assets/smile.png')}
                style ={[styles.EmotiomImage,zoomState.img1 && styles.zoomed]}
               /> */}
              {zoomState.img1 ? 
                  <Text style={[styles.EmotiomImage,zoomState.img1 && styles.zoomed]}>😀</Text> : 
                  <Text style={styles.EmotiomImage}>😀</Text>
            }    
            </TouchableOpacity>
            <TouchableOpacity onPress={() => toggleZoom('img2')}>
            {zoomState.img2 ? 
                  <Text style={[styles.EmotiomImage,zoomState.img2 && styles.zoomed]}>😏</Text> : 
                  <Text style={styles.EmotiomImage}>😏</Text>
            }    
            </TouchableOpacity>
            <TouchableOpacity onPress={() => toggleZoom('img3')}>
            {zoomState.img3 ?
              <Text style={[styles.EmotiomImage,zoomState.img3 && styles.zoomed]}>😩</Text>
            : <Text style={styles.EmotiomImage}>😩</Text> }    
            </TouchableOpacity>
          </View>
        </View>
        <TouchableOpacity onPress ={submit} style ={styles.ButtonStyle}>
          <Text style={styles.buttonText}>확인</Text>
        </TouchableOpacity>
    </View>
  )
}
const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    color: '#0087FF',
    alignItems: 'center',
    alignSelf:'center',
    marginTop: 200,
    width: 280,
    height: 210,
    borderRadius: 20,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 6,
    },
    shadowOpacity: 0.27,
    shadowRadius: 20.49,
  },
  ImageView: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop:10,
  },
  EmotiomImage: {
    backgroundColor: 'transparent',
    marginLeft:10,
    marginRight:10,
    fontSize:55,
    opacity: .5
  },
  imageRow: {
    flexDirection: 'row', 
    alignItems: 'center', 
  },
  zoomed:{
    flexDirection: 'row',
    // fontSize:65,
    opacity: 1
  },
  ButtonStyle: {
    backgroundColor: '#0087FF',
    padding: 10,
    paddingLeft: 50,
    paddingRight: 50,
    borderRadius: 5,
    marginTop: 10,
  },
  buttonText: {
    color: 'white',
    fontWeight: 'bold'
  }
})