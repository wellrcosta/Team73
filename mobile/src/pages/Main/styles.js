import { StyleSheet } from 'react-native';

import Global from '../../global';

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: Global.primary,
	},
	title: {
		fontSize: 40,
		fontWeight: 'bold',
		color: Global.light,
		position: 'absolute',
		marginTop: 150,
		marginLeft: 35,
		marginRight: 80,
	},
	imgGroup: {
		position: 'absolute',
		marginTop: 80,
		marginLeft: -60,
		height: 375,
		width: 460,
	},
	imgLogo: {
		marginTop: 75,
		marginLeft: 170,
	},
	containerBottom: {
		marginTop: '109%',
	},
});

export default styles;
