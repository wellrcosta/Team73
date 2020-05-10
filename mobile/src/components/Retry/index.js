import React from 'react';

import { TouchableOpacity, Text } from 'react-native';
import Icon from 'react-native-vector-icons/Feather';

import styles from './styles';

const Retry = (props) => {
	return (
		<>
			<TouchableOpacity style={styles.button} onPress={props.onPress}>
				<Icon name='rotate-ccw' size={30} color='#FFF' />
				<Text style={styles.textButton}>{props.children}</Text>
			</TouchableOpacity>
		</>
	);
};

export default Retry;
