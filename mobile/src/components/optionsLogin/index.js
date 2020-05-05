import React from 'react';
import { View, Text, Image, TouchableOpacity } from 'react-native';

import styles from './styles';

import iconGoogle from '../../assets/google.png';
import iconFacebook from '../../assets/facebook.png';

const OptionsLogin = () => {
	return (
		<View style={styles.container}>
			<Text style={styles.text}>Ou</Text>
			<View style={styles.boxImages}>
				<TouchableOpacity style={styles.button}>
					<Image source={iconFacebook} style={styles.icons} />
				</TouchableOpacity>

				<TouchableOpacity style={styles.button}>
					<Image source={iconGoogle} style={styles.icons} />
				</TouchableOpacity>
			</View>
		</View>
	);
};

export default OptionsLogin;
