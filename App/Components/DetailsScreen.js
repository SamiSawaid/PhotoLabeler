import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { Text, Image, View } from 'react-native'


export default class DetailsScreen extends Component {
//   static defaultProps = { show: true }

//   static propTypes = {
//     title: PropTypes.string,
//     icon: PropTypes.string,
//     style: PropTypes.object,
//     show: PropTypes.bool
//   }

constructor(props){
    super(props)

  }

  render () {
    const { params } = this.props.navigation.state;
      return (
        <View>
            <Text> { params.name } </Text>
            
        </View>
      )
    

    return messageComponent
    }
}