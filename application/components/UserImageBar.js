
import React, {Component} from 'react';
import { View, Image, Text, StyleSheet, TouchableOpacity } from 'react-native';

export default class UserImageBar extends Component {
    render() {
      return (
          <TouchableOpacity onPress={this.props.onOpen}  style={{flexDirection: 'row'}}>
            <Image
                source={{uri : 'http://www.uic.mx/posgrados/files/2018/05/default-user.png'}}
                style={{ width: 40, height: 40, borderRadius: 40/2, marginLeft: 15}}
                
            />
            <Text style={{ color: '#fff', marginTop: 10, marginLeft: 10}}>John</Text>
          </TouchableOpacity>
      );
    
    }
  }

  const styles = StyleSheet.create({
      text: {

      }
  })