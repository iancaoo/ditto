import React, { Component } from 'react';
import { View, Button, Spinner } from 'react-native';
import firebase from 'firebase';
import Homepage from './components/Homepage';

class App extends Component {
	state = { loggedIn: false }
	componentWillMount() {
		firebase.initializeApp({
			apiKey: 'AIzaSyADVuvAyT2Z0wmpaM8JadSUIRKEZGQNGVA',
			authDomain: 'auth-7325a.firebaseapp.com',
			databaseURL: 'https://auth-7325a.firebaseio.com',
			projectId: 'auth-7325a',
			storageBucket: 'auth-7325a.appspot.com',
			messagingSenderId: '994801734689'
		});
		firebase.auth().onAuthStateChanged((user) => {
			if (user) {
				this.setState({ loggedIn: true });
			} else {
				this.setState({ loggedIn: false });
			}
			});
	}

	renderContent() {
		switch (this.state.loggedIn) {
			case true:
				return (
				<View style={{ flexDirection: 'row' }}>
				<Button onPress={() => firebase.auth().signOut()}>
					Log Out
				</Button>
				</View>
				);
			case false:
				return <Homepage />;
			default:
				return (
					<View style={styles.spinnerStyle}>
						<Spinner size="large" />
					</View>
					);
		}
	}
	render() {
		console.log(this.state.loggedIn);
		return (
			<Homepage />
			);
	}
}

const styles = {
	spinnerStyle: {  
		flexDirection: 'row'
	}
};

export default App;
