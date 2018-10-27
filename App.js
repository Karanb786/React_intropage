/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import { StyleSheet,TouchableOpacity,Linking,ImageBackground,Image, Text, View} from 'react-native';


export default class App extends Component{
  
 
  render() {
    
    let pic ={uri:'https://scontent.fbom5-1.fna.fbcdn.net/v/t31.0-8/28336780_358266611322485_3280168258239842442_o.jpg?_nc_cat=106&_nc_ht=scontent.fbom5-1.fna&oh=fddd5cf290a66483072250391172470c&oe=5C7E06E8'};
    let insta= {uri:'https://instagram-brand.com/wp-content/uploads/2016/11/app-icon2.png'};
    let fb= {uri:'https://en.facebookbrand.com/wp-content/uploads/2016/05/flogo_rgb_hex-brc-site-250.png'};
    let quo={uri:'data:image/png;base64,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'};
    return (
      <ImageBackground source={pic} style={styles.container}>
      <View style={styles.inner }>
      <Text style={styles.welcome}>Shubham Gawali</Text>
       <Text style={styles.instructions}>Im a social devloper, and expert in socialogy and Indian politics. I also have hands on practice on Indian law and I am a law student too. </Text>
       <Text style ={styles.gawali}>*Bellow are some of my social links*</Text>
       <View style={{flex: 1, flexDirection: 'row',justifyContent: 'space-between'}}>
       <TouchableOpacity onPress={ () =>{Linking.openURL('https://www.instagram.com/gawalii_/')}}>
       <ImageBackground source = {insta} style={{width: 50, height: 50 }}/>
       </TouchableOpacity>
       <TouchableOpacity onPress={()=>{Linking.openURL('https://www.facebook.com/shubham.gawali.1420')}}>
        <ImageBackground source={fb} style={{width: 50, height: 50, backgroundColor: 'skyblue'}}  />
        </TouchableOpacity>
        <TouchableOpacity onPress={()=>{Linking.openURL('https://www.quora.com/profile/Shubham-Gawali-16')}}>
        <ImageBackground source={quo} style={{width: 50, height: 50, backgroundColor: 'steelblue'}} />
        </TouchableOpacity>
        </View>
        
      </View>
    
   
        
        
       
      </ImageBackground>
    );
  }
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
    
  },
  gawali:{
  
fontSize:10,
color:'gray',
marginTop:400,
marginBottom:50,
textAlign:'center',

  },
  instructions: {
    fontSize:15,
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
  inner:{
    width:'80%',
    height:'80%',
    backgroundColor:'rgba(255,255,255,.7)',

  }
});
