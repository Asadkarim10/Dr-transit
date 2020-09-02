import React from "react";
import { ImageBackground, StyleSheet, Text, View, Image, TouchableHighlight, TextInput } from "react-native";

const image = { uri: "https://i.pinimg.com/originals/d6/fd/c8/d6fdc83f651e1c1460625cd25da61cd0.jpg" };
const Logo = { uri: "https://i.pinimg.com/originals/d6/fd/c8/d6fdc83f651e1c1460625cd25da61cd0.jpg" };

const Home = () => (

  <View style={styles.container}>
    <ImageBackground source={image} style={styles.image}>

      <View>
        <Image
          style={styles.tinyLogo}
          source={{
            uri: 'https://reactnative.dev/img/tiny_logo.png',
          }} />
      </View>
      <View  >
        <Text style={styles.text}>Welcome to</Text>
        <Text style={styles.text4}>Dr. Transit</Text>
        <Text style={styles.text1}>Login to your account to begin</Text>
        <Text style={styles.text2}>driving for Dr. Transit</Text>
      </View>
      <View style={styles.inputsContainer}>

      <TouchableHighlight
          style={styles.Btn}>
          <Text style={styles.signin}> Sign in</Text>
        </TouchableHighlight>
       
       
        <TouchableHighlight
          style={styles.Btn }   >
          <Text  style={styles.Register} > Register to Drive  </Text>
        </TouchableHighlight>
      </View>
    </ImageBackground>




  </View>


);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "column"
  },
  image: {
    flex: 1,
    resizeMode: "cover",
  },
  text: {
    color: "white",
    fontSize: 55,
    marginLeft: 35,
  },
  text1: {
    color: "white",
    fontSize: 18,
    marginLeft: 49,
    marginTop: 20

  },

  text2: {
    color: "white",
    fontSize: 18,
    marginLeft: 80,
    marginRight: 30,

  },

  text4: {
    color: "white",
    fontSize: 55,
    marginLeft: 65,
    marginRight: 30,
    marginTop: -18,

  },
  tinyLogo: {
    width: 70,
    height: 80,
    marginTop: 150,
    marginLeft: 150,
  },


  inputsContainer:{
    marginTop:100,
  },


  Btn: {
    height: 40,
    textAlign: 'center',
    borderRadius: 11,
    margin: 5,
    fontWeight: 'bold'

  },



  signin: {
    backgroundColor:'white',
    height: 40,
    color: 'blue',
    textAlign: 'center',
      padding:'5',
      borderRadius: 11,
      paddingTop:'3%',
    fontSize:16,
    fontWeight: 'bold'

  },


  Register: {
    backgroundColor:'blue',
    height: 40,
    color: 'white',
    textAlign: 'center',
      paddingTop:'1%',
      borderRadius: 11,
    fontSize:16,
    fontWeight: 'bold'

  },


 

 

 
});

export default Home;