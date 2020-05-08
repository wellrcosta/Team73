import { StyleSheet } from 'react-native';
import Constants from 'expo-constants';

import Global from '../../global';

const styles = StyleSheet.create({
	container: {
		flex: 1,
		paddingTop: Constants.statusBarHeight + 25,
		backgroundColor: Global.primary,
	},
	containerTop: {
		flex: 1,
		position: 'absolute',
		flexDirection: 'row',
	},
	title: {
		fontSize: 40,
		fontWeight: 'bold',
		color: Global.light,
	},
	imageHome: {},
	imageLogo: {},
});

export default styles;
