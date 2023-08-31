import React from 'react'
import { StyleSheet, Text, View, Image } from 'react-native'

export default function App(){
  return (
    <View style={styles.container}>
        <Text style ={{color:'white',fontWeight:'bold',marginTop:10,fontSize:20}}>지금 당신의 학업스트레스는</Text>
        <Text style ={{color:'white',fontSize:17}}>어느정도인가요?</Text>
        <View style = {styles.ImageView}>
          <Image source={require('./assets/smile.png')}style ={styles.EmotiomImage}/>
          <Image source={require('./assets/basic.png')}style ={styles.EmotiomImage}/>
          <Image source={require('./assets/crying.png')}style ={styles.EmotiomImage}/>
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

  }
});