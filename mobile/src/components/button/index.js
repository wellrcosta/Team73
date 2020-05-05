import React from 'react';
import { Text, TouchableOpacity } from 'react-native';

import styles from './styles';

const Button = (props) => {
	return (
		<TouchableOpacity style={styles.button} onPress={props.onPress}>
			<Text style={styles.textButton}>{props.name}</Text>
		</TouchableOpacity>
	);
};

export default Button;
