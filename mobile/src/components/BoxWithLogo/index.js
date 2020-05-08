import React from 'react';
import { View, Image } from 'react-native';
import imgLogo from '../../assets/logo.png';

import styles from './styles';

const BoxWithLogo = ({ children }) => (
	<>
		<Image source={imgLogo} style={styles.imgLogo} />
		<View style={styles.container}>{children}</View>
	</>
);

export default BoxWithLogo;
