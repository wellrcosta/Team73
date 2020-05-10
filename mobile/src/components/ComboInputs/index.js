import React from 'react';

import { TextInput } from 'react-native';

import styles from './styles';

const ComboInputs = () => {
	return (
		<>
			<TextInput
				style={styles.comboInputs}
				maxLength={1}
				textAlign='center'
				keyboardType='numeric'
			/>
		</>
	);
};

export default ComboInputs;
