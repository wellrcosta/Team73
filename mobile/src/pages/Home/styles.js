import { StyleSheet } from 'react-native';
import Constants from 'expo-constants';

import Global from '../../global';

const styles = StyleSheet.create({
	container: {
		flex: 1,
		padding: 35,
		paddingTop: Constants.statusBarHeight + 20,
	},
	containerTop: {
		marginTop: '10%',
		marginBottom: '3%',
	},
	title: {
		fontSize: 20,
		fontWeight: 'bold',
		color: Global.secondary,
	},
	box: {
		marginTop: 60,
		marginRight: 80,
	},
	inputWithIcon: {
		flexDirection: 'row',
		alignItems: 'center',
	},
	input: {
		fontSize: 14,
		width: '70%',
		borderBottomWidth: 1,
		color: Global.primary,
		borderBottomColor: Global.primary,
	},
	dropdown: {
		width: '70%',
	},
	containerImage: {
		height: '75%',
		width: '100%',
		alignItems: 'center',
		justifyContent: 'center',
	},
	image: {
		width: '100%',
		height: '100%',
		resizeMode: 'contain',
	},
});

export default styles;
