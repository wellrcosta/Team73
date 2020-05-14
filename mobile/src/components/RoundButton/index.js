import React from 'react';
import { Text, TouchableOpacity } from 'react-native';

import styles from './styles';

const RoundButton = (props) => {
	return (
		<>
			<TouchableOpacity style={styles.button} onPress={props.onPress}>
				<Text style={styles.textButton}>{props.children}</Text>
			</TouchableOpacity>
		</>
	);
};

export default RoundButton;
