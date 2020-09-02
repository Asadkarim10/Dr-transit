import RadioForm, {RadioButton, RadioButtonInput, RadioButtonLabel} from 'react-native-simple-radio-button';
import React from 'react';
import { StyleSheet, TextInput, Text, View } from 'react-native';
 
const radio_props = [
  {label: 'passenger was unwell', value: 1 },
  {label: 'passenger was more than 20 minutes late', value: 1 },
  {label: 'passenger was being exceptionally disruptive', value: 0 },
 
  {label: 'other "Please specify"', value: 1 },
];
 
const Endtrip = () => ({
  getInitialState: function() {
    return {
      value: '1',
    }
  },
  render: function() {
    return (
		<View style={styles.container} > 

      <View>
		<Text style={styles.text1}>Why did You end this trip?</Text>

        <RadioForm style={styles.text2}
          radio_props={radio_props}
		  initial={0}
		  accessible={true}
  idSeparator=','
  accessibilityLabel='noteType,1'
  testID='noteType,1'
		  buttonColor={'#fff'}
		  labelColor={'#616366'} 
        />
		<TextInput style={styles.box} 
    multiline={true}
    numberOfLines={8}
></TextInput>
      </View>
	  <View  >
		<Text style={styles.button1} >Submit</Text>
	  </View>
	  </View>
    );

}



});

export default Endtrip;



const styles = StyleSheet.create({
	container: {
	  flex: 1,
	  backgroundColor: '#E8E8EF',
	  //justifyContent: 'center',
	//  resizeMode: "cover",
	paddingLeft:"5%",
	paddingRight:"5%"
	},

	box : {
		flex:0.28,
		borderWidth: 1,
		borderColor: '#616366',
		marginLeft:'12%',
		marginRight:'8%',
		borderRadius:6,
		backgroundColor:'white'
		
	},


	text1 : {
		fontSize:"190%",
		fontWeight:'bold'
		
	},

	text2 : {
	marginTop:'5%'
		
	},


	button1 : {
		width:"107%",
		backgroundColor:"#1857ba",
		color:'white',
		borderWidth:"1px",
		textAlign:'center',
		marginTop:"60%",
		fontSize:"150%",
		padding:"3%",
		borderRadius:'5%',
		borderWidth:'none',
		marginLeft:"-3%"
	}
  });