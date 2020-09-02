import RadioForm, {RadioButton, RadioButtonInput, RadioButtonLabel} from 'react-native-simple-radio-button';
import React from 'react';
import { StyleSheet, TextInput, Text, View } from 'react-native';
 

 
function DriverRegis() {
    return (
      <View style={styles.container}>
        
        <View>
            <Text style={styles.text1}>Driver Registration</Text>
            <Text style={styles.text2}>for the safety of our passengers all of our drivers must be fully vetted before joining our team</Text>
            <Text style={styles.text2}>In order to evaluate your eligibility, Dr transit must conduct background check and traffic record checks</Text>
            <Text style={styles.text2}>By submitted your an application registration, you agree to our vetting process, aswell as our terms and conditions </Text>
        </View>
        <View>

            <Text style={styles.button1}>Continue</Text>
            <Text style={styles.button2}>I do not agree</Text>

        </View>
        
      </View>
    );
  }

export default DriverRegis;



const styles = StyleSheet.create({
	container: {
	  flex: 1,
	  backgroundColor: '#E8E8EF',
	paddingLeft:"5%",
	paddingRight:"5%"
	},




	text1 : {
		fontSize:"190%",
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
        height:50
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
		marginLeft:"-3%"
	}
  });