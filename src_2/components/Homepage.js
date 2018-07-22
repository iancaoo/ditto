import React, { Component } from 'react';
import { View, Alert, ImageBackground } from 'react-native';
import { Button, Avatar, SocialIcon } from 'react-native-elements';
import Divider from 'react-native-divider';
import firebase from 'firebase';
import FBSDK, { LoginManager, AccessToken } from 'react-native-fbsdk';
// import SignUpEmailPage from './signUpEmailPage';
import LoginPage from './LoginPage';
import SignUpPageOne from './SignUpPageOne';
import LoginPageOne from './LoginPageOne';

class Homepage extends Component {
	state = { signup: false, login: false, loading: false };

	onSignUpButtonPress() {
		this.setState({ loading: true, signup: true });
	}
	onLogInButtonPress() {
		this.setState({ loading: true, login: true });
	}

	loginWithTwitter() {
		console.log('loginWithTwitter');
	}

	_fbAuth() {
		LoginManager.logInWithReadPermissions(['public_profile']).then(
			(result) => {
			if (result.isCancelled) {
			Alert.alert('Login cancelled');
			} else {
			// Alert.alert('Login success with permissions: ' + result.grantedPermissions.toString());
			AccessToken.getCurrentAccessToken().then((accessTokenData) => {
				const credential = firebase.auth.FacebookAuthProvider
				.credential(accessTokenData.accessToken);
				firebase.auth().signInAndRetrieveDataWithCredential(credential).then((result) => {
					//promise was successful
				}, (error) => {
					console.log(error);
				});
			});
			}
			},
			(error) => {
			Alert.alert('Login fail with error: ' + error);
			}
);
	}

	renderSignUpButton() {
		if (this.state.loading) {
			return (
				<Button
				loading
				style={{ marginTop: 150 }}
				titleStyle={{ fontWeight: '700' }}
				buttonStyle={styles.SignUpbuttonStyle}
				/>
				);
		}
		return (
			<Button
				style={{ marginTop: 150 }}
				title="SIGN UP"
				titleStyle={{ fontWeight: '700' }}
				buttonStyle={styles.SignUpbuttonStyle}
				onPress={this.onSignUpButtonPress.bind(this)}
			/>
			);
	}

	renderLogInButton() {
		if (this.state.loading) {
			return (
				<Button
				loading
				titleStyle={{ fontWeight: '700' }}
				buttonStyle={styles.LogInbuttonStyle}
				/>
				);
		}
		return (
			<Button
				title="LOG IN"
				titleStyle={{ fontWeight: '700' }}
				color='#696969'
				style={{ marginBottom: 30, marginTop: 10 }}
				buttonStyle={styles.LogInbuttonStyle}
				onPress={this.onLogInButtonPress.bind(this)}
			/>
			);
	}

	render() {
	if (this.state.signup) {
		return (
			// <SignUpEmailPage />
			<SignUpPageOne />
			);
		} 
	if (this.state.login) {
		return <LoginPageOne />;
		}

		return (
			<ImageBackground
			source={require('./image/login/login_1.png')} 
			style={styles.containerStyle}
			>
			<Avatar
				large
				rounded
				title="X"
				onPress={() => console.log('Works!')}
				activeOpacity={0.7}
			/>

			{this.renderSignUpButton()}
			{this.renderLogInButton()}

			<Divider 
			borderColor="#fff" 
			color="#fff" 
			orientation="center"
			style={{ width: 100 }}
			>
				Divider
			</Divider>

			<View style={styles.socialIconStyle}>
			<SocialIcon
				style={{ 
					paddingLeft: 14, 
					paddingRight: 14, 
					paddingTop: 5, 
					paddingBottom: 5 
				}}
				// title='FACEBOOK'
				button
				type='facebook'
				onPress={this._fbAuth}  
				onLongPress={this._fbAuth} 
			/>
			<SocialIcon
				style={{
					paddingLeft: 10, 
					paddingRight: 10, 
					paddingTop: 5, 
					paddingBottom: 5 
				}}
				// title='TWITTER'
				button
				type='twitter'
				onPress={this.loginWithTwitter}  
				onLongPress={this.loginWithTwitter}
			/>

			<View>
			<SocialIcon
				style={{
					paddingLeft: 10, 
					paddingRight: 10, 
					paddingTop: 5, 
					paddingBottom: 5,
					backgroundColor: 'green'
				}}
				// title='TWITTER'
				button
				type='wechat'
				onPress={this.loginWithTwitter}  
				onLongPress={this.loginWithTwitter}
			/>
			</View>

			</View>

			</ImageBackground>

			);
	}
	}
	
	
const styles = {
	containerStyle: {
		flex: 1,
		justifyContent: 'center', 
		alignItems: 'center'
	},

	SignUpbuttonStyle: { 
		marginTop: 5,
		backgroundColor: 'rgba(92, 99,216, 0)',
		width: 280,
		height: 40,
		borderColor: 'white',
		borderWidth: 1,
		borderRadius: 30,
		padding: 5
	},

	LogInbuttonStyle: { 
		marginTop: 5,
		backgroundColor: 'rgba(255, 255, 255, 1)',
		width: 280,
		height: 40,
		borderColor: 'white',
		borderWidth: 1,
		borderRadius: 30,
		padding: 5
	},

	socialIconStyle: {
		marginTop: 25,
		flexDirection: 'row',
		justifyContent: 'space-around',
		width: 300
	},
	wechatIconStyle: {
		width: 40,
		height: 40,
		borderRadius: 20,
		backgroundColor: 'green'
	}
};

export default Homepage;
