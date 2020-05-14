import { StyleSheet } from 'react-native';
import Constants from 'expo-constants';

import Global from '../../global';

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: Global.primary,
		paddingTop: Constants.statusBarHeight + 20,
	},
	containerImages: {
		height: '65%',
		width: '100%',
		alignItems: 'center',
		justifyContent: 'center',
	},
	containerButtons: {
		marginTop: -40,
		justifyContent: 'center',
		alignItems: 'center',
	},
});

export default styles;
