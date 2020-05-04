import { StyleSheet } from 'react-native';
import Constants from 'expo-constants';

export default StyleSheet.create({
	container: {
		flex: 1,
		paddingHorizontal: 24,
		paddingTop: Constants.statusBarHeight + 20,
	},
	title: {
		fontWeight: 'bold',
		fontSize: 20,
		color: '#13131a',
		lineHeight: 30,
	},
});
