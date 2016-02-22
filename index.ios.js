/**
 * SignInProject is a sample login screen written in React Native.   This screen will take in an email address
 * and password to authenticate into the mobile application.  
 * Input: 
 *    Email - is a string with  255 allowable characters.
 *    Password - is a string with 32 allowable characters. The text input is of hidden type which hides the  users input.
 * @author Tiffany Ricks
 * @copywright 2016-2020, All Rights Reserved by Tiffany Ricks

 */
'use strict';
import React, {
  AppRegistry,
  Component,
  StyleSheet,
  Text,
  TextInput,
  TouchableHighlight,
  ScrollView
} from 'react-native';
/**
 * SignInProject class renders the IOS View.
 */
class SignInProject extends Component {

  render() {
    return (
         <ScrollView
            keyboardShouldPersistTaps = {false}
            contentContainerStyle = {styles.container} >
      
            <Text style={styles.welcome}>
                Welcome to React IOS Sign In!
            </Text>
            
            <TextInput
               style={styles.textFields}
               placeholder='Enter Email'
               keyboardType='email-address' />
            
            <TextInput
               style={styles.textFields}
               placeholder='Enter Password'
               secureTextEntry={true} />
            
            <TouchableHighlight style={styles.button} >
                <Text style={styles.buttonText}>Sign In</Text>
            </TouchableHighlight>
            
        </ScrollView>
    );
  }
}
/**
 *  CSS Styles for the View.
 */
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  textFields: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    padding:10,
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
  button: {
    height: 44,
    flexDirection: 'row',
    backgroundColor: '#48BBEC',
    alignSelf: 'stretch',
    justifyContent: 'center',
    margin: 10,
  },
  buttonText: {
    textAlign: 'center',
    color: '#000000',
  },
});

AppRegistry.registerComponent('SignInProject', () => SignInProject);
