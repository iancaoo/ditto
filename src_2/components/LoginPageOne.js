import React, { Component } from 'react';
import { Button } from 'react-native-elements';
import { ImageBackground, View } from 'react-native';
import { Input } from './common';
import SignUpPageOne from './SignUpPageOne';

class LoginPageOne extends Component {
	state = { signUp: false, logIn: false, passwordNext: false };

	SignUp() {
		this.setState({ signUp: true, logIn: false, passwordNext: false });
	}

	render() {
		if (this.state.signUp) {
			return <SignUpPageOne />;
		}

		return (
			<ImageBackground
				source={require('./image/login/login_page.png')}
				style={{ flex: 1 }}
			>
			<View style={{ flex: 0.6, alignItems: 'flex-end' }}>
			<Button 
			title='SIGN UP'
			titleStyle={{ fontWeight: '800' }}
			buttonStyle={{
				borderRadius: 5,
				width: 90,
				height: 30,
				padding: 5,
				marginTop: 60,
				backgroundColor: 'transparent'
			}}
			onPress={this.SignUp.bind(this)}
			/>
			</View>

			<View style={styles.ContainerStyle}>
			<View>
			<Input
				label='EMAIL/PHONE NUMBER'
				// placeholder='Email/Phone Number'
			/>
			</View>

			<View style={{ marginTop: 15 }}>
					<Input
						label='PASSWORD'
						// placeholder='Email/Phone Number'
					/>
			</View>
			</View>

			<View style={{ flex: 2, alignItems: 'center', justifyContent: 'center' }}>
			<Button 
			title='LOG IN'
			titleStyle={{ fontWeight: '700' }}
			color='#696969'
			buttonStyle={styles.LogInbuttonStyle}
			/>
			</View>
			</ImageBackground>

			);
	}
}

const styles = {
	ContainerStyle: {
		flex: 4,
		justifyContent: 'flex-end',
		alignItems: 'center',
	},
	LogInbuttonStyle: {
		marginTop: -35, 
		backgroundColor: 'rgba(255, 255, 255, 1)',
		width: 300,
		height: 40,
		borderColor: 'white',
		borderWidth: 1,
		borderRadius: 30,
		padding: 5,
		shadowColor: '#000',
		shadowOffset: { width: 0, height: 2 },
		shadowOpacity: 0.2,
		shadowRadius: 2,
		elevation: 1
	}
};

export default LoginPageOne;
