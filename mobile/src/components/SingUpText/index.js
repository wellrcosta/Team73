import React from 'react';
import { useNavigation } from '@react-navigation/native';
import { View, Text, TouchableOpacity } from 'react-native';

import styles from './styles';

const SingUpText = (props) => {
	const navigation = useNavigation();

	const navigateTo = () => {
		navigation.navigate(props.navigate);
	};

	return (
		<View style={styles.container}>
			<Text style={styles.primaryText}>{props.primaryText}</Text>
			<TouchableOpacity style={styles.buttonRegister} onPress={navigateTo}>
				<Text style={styles.textButton}>{props.textOnPress}</Text>
			</TouchableOpacity>
		</View>
	);
};

export default SingUpText;
