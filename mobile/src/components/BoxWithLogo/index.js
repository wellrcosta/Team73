import React from 'react';
import { View, Image } from 'react-native';
import imgLogo from '../../assets/logo.png';

import styles from './styles';

const BoxWithLogo = ({ children }) => (
	<>
		<View style={styles.containerLogo}>
			<Image source={imgLogo} />
		</View>
		<View style={styles.container}>{children}</View>
	</>
);

export default BoxWithLogo;
