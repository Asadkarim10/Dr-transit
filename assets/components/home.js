import React from "react";
import { ImageBackground, StyleSheet, Text, View,Image,TouchableHighlight,TextInput } from "react-native";

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
    <View>
      <Text>Welcome To Dr. Transit</Text>
      <Text>Login to your account to begin driving for Dr. Transit</Text>
    </View>
    <View style={styles.inputsContainer}>
                
                <TouchableHighlight
                    style={styles.fullWidthButton}  
                >
                    <Text>Submit</Text>
                </TouchableHighlight>
                <TouchableHighlight
                    style={styles.fullWidthButton}  
                >
                    <Text>rigester your self </Text>
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
    color: "black",
    fontSize: 30,
    fontWeight: "bold"
  },
  tinyLogo: {
    width: 50,
    height: 50,
  },
});

export default Home;