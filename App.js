import React,{Component} from 'react';
import{Image,Text,View,StyleSheet,TouchableOpacity,Alert,Navigator} from 'react-native';




export default class App extends Component{
	  _onPressButton() {
    Alert.alert('You tapped the button!')
  }
  

render(){
	return(
		 <View style={ styles.container}>
        			
         <View style={[styles.boxContainer,styles.boxOne]}>
		<Text style={{fontSize: 24}}> Vardas Pavarde </Text>
        </View>
        <View style={[styles.boxContainer,styles.boxTwo]}>
		 <Image
          style={{width: 200, height: 300}}
          source={{uri: 'https://upload.wikimedia.org/wikipedia/commons/1/18/React_Native_Logo.png'}}
        />
        </View>

        <View style={[styles.boxContainer,styles.boxThree]}>
       		<TouchableOpacity style={styles.buttonContainer}  onPress={this._onPressButton}>
       			<Text style={styles.buttonText}> My profile </Text>
       		</TouchableOpacity>
        </View>

        
             
      </View>
		);
}
}

const styles = StyleSheet.create({
	container:{
		flex: 1,
		flexDirection: 'column'
	},

	boxContainer:{
		flex:1,
		alignItems: 'center',
		justifyContent: 'center'

	},

	boxOne:{
		flex:1,
		backgroundColor: '#FFEEE4'
	},

	boxTwo:{
		flex:2,
		backgroundColor:'#CE6D39'
	},
	boxThree:{

		backgroundColor:'#F17F42'
	},
	buttonText:{
		textAlign: 'center',
		color: '#FFFFFF',
		fontWeight: '700'
	},
	buttonContainer:{
		backgroundColor: '#2980b9',
		paddingVertical: 15,
		width: 200
	}

});
