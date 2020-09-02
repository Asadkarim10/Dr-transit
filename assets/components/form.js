import RadioForm, {RadioButton, RadioButtonInput, RadioButtonLabel} from 'react-native-simple-radio-button';
import React from 'react';
import { StyleSheet, TextInput, Text, View } from 'react-native';
import '../styles.js'
 

 
function Form() {
    return (
      <View style={styles.container}>
        
        <View>
            <Text style={styles.text1}>Your legal name</Text>
            <Text style={styles.text2}>As its appear on your driver's licence</Text>
            <TextInput
      ></TextInput>
         </View>
         <View>
            <Text style={styles.text1}>Your Email</Text>
            <Text style={styles.text2}>As its appear on your driver's licence</Text>
            <TextInput
      ></TextInput>
         </View>
         <View>
            <Text style={styles.text1}>Phone Number</Text>
            <Text style={styles.text2}>As its appear on your driver's licence</Text>
            <TextInput
       ></TextInput>
         </View>
         <View>
            <Text style={styles.text1}>Sin (Optional)</Text>
            <Text style={styles.text2}>As its appear on your driver's licence</Text>
            <TextInput
      ></TextInput>
         </View>         
           
         <View>
            <Text style={styles.text2}>Driver licence Number (Optional)</Text>
            <Text style={styles.text2}>As its appear on your driver's licence</Text>
            <TextInput
       ></TextInput>
         </View>  

        <View>
            <Text style={styles.btn}>Continue</Text>
            <Text style={styles.btn}>I do not agree</Text>

        </View>
        
      </View>
    );
  }

export default Form;



const styles = StyleSheet.create({
	container: {
	  flex: 1,
	  backgroundColor: '#E8E8EF',
	paddingLeft:"5%",
	paddingRight:"5%"
	},




	text1 : {
		fontSize:"100%",
		fontWeight:'bold'
		
	},

	text2 : {
	marginTop:'5%',
	fontSize:'110%'
	},


	button1 : {
		width:"107%",
		backgroundColor:"#1857ba",
		color:'white',
		borderWidth:"1px",
		textAlign:'center',
		marginTop:"65%",
		fontSize:"110%",
		padding:"3%",
		borderRadius:'5%',
		borderWidth:'none',
        marginLeft:"-3%",
        height:50,
       
    },
    button2 : {
		width:"107%",
		color:'black',
		borderWidth:"1px",
		textAlign:'center',
		marginTop:"2%",
		fontSize:"100%",
		padding:"3%",
		borderRadius:'5%',
		borderWidth:'none',
        marginLeft:"-3%",
        
	}
  });