import React,{Component} from 'react';
import{Linking,NavigatorIOS,ListView,Dimensions,Button,Image,Text,View,StyleSheet,TouchableOpacity,Alert,Navigator,TextInput,AsyncStorage,FlatList
} from 'react-native';
import {StackNavigator,TabNavigator} from 'react-navigation';
import {Constants} from 'expo';
import PropTypes from 'prop-types';
import {WetherWiget, WeatherWidget} from 'react-native-weather';

import Expo from 'expo';

class HomeScreen extends Component{
  
  static navigationOptions={
    header:null,
  };
  render(){
    const{navigate}=this.props.navigation;
    return(
      <View style={ styles.container}>
            <View style={[styles.boxContainer,styles.boxFour]}>
            </View>
         <View style={[styles.boxContainer,styles.boxOne]}>
		<Text style={{fontSize: 24,textAlignVertical:'bottom'}}> Vardas Pavarde </Text>
        </View>
        <View style={[styles.boxContainer,styles.boxTwo]}>
		 <Image
          style={{width: 200, height: 300}}
          source={{uri: 'https://upload.wikimedia.org/wikipedia/commons/1/18/React_Native_Logo.png'}}
        />
        </View>

        <View style={[styles.boxContainer,styles.boxThree]}>
       		<TouchableOpacity style={styles.buttonContainer}  onPress={()=> navigate('Profile')}>
       			<Text style={styles.buttonText}> My profile </Text>
       		</TouchableOpacity>
        </View>
        <View style={[styles.boxContainer,styles.boxFive]}>
            </View>
        
             
      </View>
    );
  }
}

const key ='@Myapp:key';

class ProfileScreen extends Component{

 constructor(){
   super();
   this.state={
     data:[],
   }
 }
  state={
    text:'',
    storedValue:'',
  };

  componentWillMount(){
    this.onLoad();  
    fetch("https://www.metaweather.com/api/location/44418")
    .then((result)=>result.json())
    .then((res)=>{
      console.warn("data from api",res.consolidated_weather)
      this.setState({
        data:res.consolidated_weather,
      })
    })
  }



  onChange = (text)=>{
    this.setState({text});

  }
  onLoad = async ()=>{
    try{
      const storedValue = await AsyncStorage.getItem(key);
      this.setState({storedValue});
      Alert.alert('Loding data',storedValue);
    }
    catch(error){
      Alert.alert('Error');
    }
  }
  onSave = async () =>{
    const{text}=this.state;

    try{
      await AsyncStorage.setItem(key,text);
      Alert.alert('Saved');

    }
    catch(error){
      Alert.alert('Error');
    }
  }
  static navigationOptions={
    title:'My profile',
  };
  render(){
   
    const{navigate}=this.props.navigation;
    const{storedValue,text} = this.state;
    return(
      
      <View style={{flex: 1}}>
        <View style={{ flex: 1, flexDirection: 'row', alignItems: 'stretch'}}>
          <View style={{ flex:0.5,backgroundColor: 'powderblue',alignItems: 'center',justifyContent: 'center'}} >
          <Image
          style={{width: 100, height: 100}}
          source={{uri: 'https://upload.wikimedia.org/wikipedia/commons/1/18/React_Native_Logo.png'}}
        />
        </View>
          <View style={{ flex:0.5, backgroundColor: 'skyblue',alignItems: 'center',justifyContent: 'center'}} >
          <Text> Vardas Pavarde </Text>
          </View>
        </View>
      <View style={{ flex: 2, flexDirection: 'column', alignItems: 'stretch'}}>
        <View style={{ flex:1, backgroundColor: 'green'}} >
        <Text>{storedValue}</Text>
          <TextInput style={{
            height:100,
            margin:20,
            padding:10,
       
           
          }}
          multiline={true}
          editable={true}
          onChangeText={this.onChange}
          value={text}
          placeholder={storedValue}
          />
      
        </View>
    
        <View style={{ flex:1, backgroundColor: 'red', flexDirection: 'row'}} >
        <TouchableOpacity style={styles.buttonContainer} onPress={this.onSave}>
          <Text> Save locally </Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.buttonContainer} onPress={this.onLoad}>
          <Text> Load </Text>
          </TouchableOpacity>

    
     
        </View>
        <View style={{ flex:0.5, backgroundColor: 'blue'}} >
        <Button title="My github profile" onPress={ ()=>{ Linking.openURL('https://github.com/VaidasMac/Mobile-App')}} />
        </View>
      </View>
      </View>

      
      
    );
  }
  saveData(){
    let user = 'Text input';
    AsyncStorage.setItem('item',this.state.text);
  }
  displayData = async ()=>{
    try{
        let item = await AsyncStorage.getItem('item');
        alert(item);
    }
    catch(error)
    {
      alert(error);
    }
  }
}
const NavigationApp = StackNavigator({
  Home:{screen:HomeScreen},
  Profile: {screen:ProfileScreen},

},{
  navigationOptions:{
    headerStyle:{
      marginTop:Expo.Constants.statusBarHeight
    }
  }
});

 export default class App extends Component{
   render(){
    return <NavigationApp/>
   }
  
 }

//export default class App extends React.Component{
	  //_onPressButton() {
    //Alert.alert('You tapped the button!')
  //}
  

//render(){
//	return(
    /*
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

        
             
      </View>*/
    
	//	);
//}
//}


const styles = StyleSheet.create({
  containerProfile:{
		flex: 1,
		flexDirection: 'row'
	},
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
		flex:0.5,
		backgroundColor: '#FFEEE4'
	},

	boxTwo:{
		flex:3,
		backgroundColor:'#CE6D39'
	},
	boxThree:{
    backgroundColor:'#F17F42',
  },
  boxFour:{
    backgroundColor:'#ffab00',
  },
  boxFive:{
    backgroundColor:'#fff700',
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


