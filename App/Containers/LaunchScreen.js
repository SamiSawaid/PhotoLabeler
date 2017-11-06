import React, { Component } from 'react'
import { FlatList, Text, Image, View, Button, TouchableOpacity, TouchableHighlight, AsyncStorage, Alert } from 'react-native'
import { Images } from '../Themes'
import ImagePicker from 'react-native-image-picker'
// Styles
import styles from './Styles/LaunchScreenStyles'

var options = {
  title: 'Select Image',
  storageOptions: {
    skipBackup: true,
    path: 'images'
  }
}

export default class LaunchScreen extends Component {

  constructor(props){
    super(props)
  
  
    this.state = {
      text:'',
      allPhotosList: [],
    }
    this.saveImages = this.saveImages.bind(this)
    this.pickImage = this.pickImage.bind(this)
  }

  componentDidMount(){
    AsyncStorage.getItem(
      '@ImagesList:Images',
      (err, data) => {
        if(err){
          console.error('Error loading data', err);
        } else {
          const availableImages = JSON.parse(data)
          if( availableImages === null){
            Alert.alert(
              'System Message',
              'No data to load ',
              [
                {text: 'Cancel', onPress: () => console.log('Cancel Pressed'), style: 'cancel'},
                {text: 'OK', onPress: () => console.log('OK Pressed')},
              ]
            )
            
          }else{
            this.setState({
              allPhotosList: availableImages
            })
          }

        }
      }
    )
  }

  saveImages(images){
    AsyncStorage.setItem(
      '@ImagesList:Images',
      JSON.stringify(images)
    )
  }

  pickImage(){
    ImagePicker.showImagePicker(options, (response) => {
      console.log('Response = ', response)
  
      if (response.didCancel) {
        console.log('User cancelled image picker')
      }
      else if (response.error) {
        console.log('ImagePicker Error: ', response.error);
      }
      else if (response.customButton) {
        console.log('User tapped custom button: ', response.customButton);
      }
      else {
        let source = { uri: response.uri,
                      path: response.path
                       }
  
        // You can also display the image using data:
        // let source = { uri: 'data:image/jpeg;base64,' + response.data };
        this.setState({
          allPhotosList: [...this.state.allPhotosList, source]
        })
        this.saveImages(this.state.allPhotosList)
      }
    })
  }

  render () {
    return (
      <View style={styles.mainContainer}>
      <FlatList
        data={this.state.allPhotosList}
        renderItem={({ item }) => (
        <TouchableHighlight    onPress ={()=>{this.props.navigation.navigate('DetailsScreen', { name: item.uri } )}} > 
        <View style={styles.rowContainer}>
            <Image
              source={item}
              style={{width:100, height:100}}/>
            <Text>{item.path}</Text>
          </View>
        </TouchableHighlight>
        )}
        keyExtractor={item => item.path}
      />
      <TouchableOpacity onPress={this.pickImage} style={styles.touchableStyle}>
          <Image source={require('../Images/add.png')}  style={styles.imageStyle}/>
      </TouchableOpacity>
      </View>
    )
  }
}
