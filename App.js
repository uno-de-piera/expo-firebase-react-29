import React from 'react';
import PreLoader from "./application/components/PreLoader";
import firebaseConfig from './application/utils/firebase';
import * as firebase from 'firebase';
firebase.initializeApp(firebaseConfig);

import GuestNavigation from './application/navigations/guest';
import LoggedNavigation from './application/navigations/logged';

console.disableYellowBox = true;

import { YellowBox } from 'react-native';
import _ from 'lodash';
YellowBox.ignoreWarnings(['Setting a timer']);
const _console = _.clone(console);
console.warn = message => {
  if (message.indexOf('Setting a timer') <= -1) {
    _console.warn(message);
  }
};

export default class App extends React.Component {
	constructor () {
		super();
		this.state = {
			isLogged: false,
			loaded: false
		}
	}

	async componentDidMount () {
		await firebase.auth().onAuthStateChanged((user) => {
			console.log(user);
			if(user !== null) {
				this.setState({
					isLogged: true,
					loaded: true
				});
			} else {
				this.setState({
					isLogged: false,
					loaded: true
				});
			}
		})
	}

	render() {
		const {isLogged, loaded} = this.state;

		if ( ! loaded) {
			return (<PreLoader/>);
		}

		if(isLogged) {
			return (<LoggedNavigation />);
		} else {
			return (<GuestNavigation />);
		}
	}
}


