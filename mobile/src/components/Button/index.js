import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';

import styles from './styles';

const Button = (props) => {
	return (
		<View style={styles.container}>
			<TouchableOpacity style={styles.button} onPress={props.onPress}>
				<Text style={styles.textButton}>{props.children}</Text>
			</TouchableOpacity>
		</View>
	);
};

export default Button;
