import React from 'react';

import { TextInput } from 'react-native';

import styles from './styles';

const ComboInputs = ({ value, onChangeText }) => {
	return (
		<>
			<TextInput
				style={styles.comboInputs}
				maxLength={1}
				textAlign='center'
				keyboardType='numeric'
				onChangeText={onChangeText}
				value={value}
			/>
		</>
	);
};

export default ComboInputs;
