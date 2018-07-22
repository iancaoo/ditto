import React from 'react';
import { TextInput, View, Text } from 'react-native';

const Input = ({ label, value, onChangeText, placeholder, secureTextEntry, customInputStyle }) => {
	const { inputStyle, lableStyle, containerStyle } = styles;

	return (
		<View style={containerStyle}>
			<Text style={lableStyle}>{label}</Text>
			<TextInput
				placeholder={placeholder}
				autoCorrect={false}
				style={inputStyle}
				// style={customInputStyle}
				value={value}
				onChangeText={onChangeText}
				secureTextEntry={secureTextEntry}
			/>
		</View>
		);
};

const styles = {
	inputStyle: {
		color: '#000',
		paddingRight: 5,
		paddingLeft: 5,
		fontSize: 18,
		lineHeight: 23,
		height: 20, 
		width: 300,
		borderBottomWidth: 1,
		borderColor: '#696969'
	},

	lableStyle: {
		fontSize: 14,
		color: '#696969'
	},

	containerStyle: {
		height: 70,
		justifyContent: 'space-between'
	}
};

export { Input };
