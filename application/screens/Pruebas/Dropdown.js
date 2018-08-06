import React, {Component} from 'react';
import {Text, TouchableHighlight, View, StyleSheet} from 'react-native';
import BackgroundImage from "../../components/BackgroundImage";
import t from 'tcomb-form-native';
const Form = t.form.Form;
const Country = t.enums({
  'IT': 'Italy',
  'ES': 'Spain',
  'MX': 'México',
  'US': 'United States'
}, 'Country');

export default class Dropdown extends Component {

  constructor() {
    super();
    this.state = {
      type: Country,
      country: {}
    };
  }

  onPress() {
    const value = this.refs.form.getValue();
    if (value) {
      console.log(value);
    }
  }

  onChange (country) {
    this.setState({country});
    this.validate = this.refs.form.getValue();
  }

  render () {
    return (
      <BackgroundImage source={require('../../../assets/images/login-bg.png')}>
        <View style={styles.container}>
          <Form
            ref="form"
            type={Country}
            value={this.state.country}
            onChange={(v) => this.onChange(v)}
          />
          <TouchableHighlight onPress={this.onPress.bind(this)} underlayColor='#99d9f4'>
            <Text>Guardar</Text>
          </TouchableHighlight>
        </View>
      </BackgroundImage>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    marginTop: 50,
    padding: 20,
    backgroundColor: '#ffffff',
  }
});