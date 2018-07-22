import React, { Component } from 'react';
import { View, ImageBackground } from 'react-native';
import { Button } from 'react-native-elements';
import { Input } from './common/Input';
import LoginPage from './LoginPage';
import LoginPageOne from './LoginPageOne';


class SignUpPageOne extends Component {
	state = { signIn: false, next: false, passwordNext: false };

	SignIn() {
		this.setState({ signIn: true, next: false, passwordNext: false });
	}

	Next() {
		this.setState({ next: true, signIn: false, passwordNext: false });
	}

	PasswordNext() {
		this.setState({ passwordNext: true, next: false, signIn: false });
	}

	render() {
		if (this.state.next) {
			return (
				<ImageBackground
				source={require('./image/login/login_3.png')} 
				style={{ flex: 1 }}
				>
					<View style={styles.loginThreeContainerStyle}>
					<Input
						label='PASSWORD'
						// placeholder='Email/Phone Number'
					/>
					<View style={{ marginTop: 15 }}>
					<Input
						label='CONFIRM PASSWORD'
						// placeholder='Email/Phone Number'
					/>
					</View>
					</View>

					<View style={{ flex: 1, alignItems: 'flex-end' }}>
					<Button 
					title='NEXT'
					titleStyle={{ fontWeight: '700' }}
					buttonStyle={{
						borderRadius: 5,
						width: 90,
						height: 30,
						padding: 5,
						marginTop: 20,
						backgroundColor: 'dimgrey'
					}}
					onPress={this.PasswordNext.bind(this)}
					/>
					</View>
				</ImageBackground>
				);
		}
		if (this.state.signIn) {
			return <LoginPageOne />;
		}

		if (this.state.passwordNext) {
			return (
			<ImageBackground
			source={require('./image/login/login_4.png')} 
			style={{ flex: 1 }}
			>

			<View style={styles.containerStyle}>
			<Input
				label='CREATE A USERNAME'
				// placeholder='Email/Phone Number'
			/>
			</View>

			<View style={{ flex: 0.4, alignItems: 'flex-end' }}>
			<Button 
			title='DONE'
			titleStyle={{ fontWeight: '700' }}
			buttonStyle={{
				borderRadius: 5,
				width: 90,
				height: 30,
				padding: 5,
				marginTop: 15,
				backgroundColor: 'dimgrey'
			}}
			onPress={this.SignIn.bind(this)}
			/>
			</View>
			</ImageBackground>
			);
		}

		return (
			<ImageBackground
			source={require('./image/login/login_2.png')} 
			style={{ flex: 1 }}
			>

			<View style={{ flex: 0.6, alignItems: 'flex-end' }}>
			<Button 
			title='SIGN IN'
			titleStyle={{ fontWeight: '800' }}
			buttonStyle={{
				borderRadius: 5,
				width: 90,
				height: 30,
				padding: 5,
				marginTop: 60,
				backgroundColor: 'transparent'
			}}
			onPress={this.SignIn.bind(this)}
			/>
			</View>

			<View style={styles.containerStyle}>
			<Input
				label='Email/Phone Number'
				// placeholder='Email/Phone Number'
			/>
			</View>

			<View style={{ flex: 2, alignItems: 'flex-end' }}>
			<Button 
			title='NEXT'
			titleStyle={{ fontWeight: '700' }}
			buttonStyle={{
				borderRadius: 5,
				width: 90,
				height: 30,
				padding: 5,
				marginTop: 80,
				backgroundColor: 'dimgrey'
			}}
			onPress={this.Next.bind(this)}
			/>
			</View>
			</ImageBackground>
			);
	}
}

const styles = {
	containerStyle: {
		flex: 2,
		justifyContent: 'flex-end',
		alignItems: 'flex-start',
		marginLeft: 10
	},
	loginThreeContainerStyle: {
		flex: 4,
		justifyContent: 'flex-end',
		alignItems: 'flex-start',
		marginLeft: 10
	}
};

export default SignUpPageOne;
