import { StyleSheet } from 'react-native';
import Constants from 'expo-constants';

import Global from '../../global';

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: Global.primary,
		paddingTop: Constants.statusBarHeight + 20,
	},
	containerButtons: {
		justifyContent: 'center',
		alignItems: 'center',
	},
	containerTop: {
		paddingHorizontal: 20,
		paddingBottom: '15%',
	},
	title: {
		fontSize: 40,
		fontWeight: 'bold',
		color: Global.light,
		zIndex: 1,
	},

	imageHome: {
		resizeMode: 'contain',
	},
	imageLogo: {},
});

export default styles;
