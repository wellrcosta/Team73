import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: '#390099',
		position: 'relative',
	},
	title: {
		fontSize: 40,
		fontWeight: 'bold',
		color: '#FFF',
		position: 'absolute',
		marginTop: 145,
		marginLeft: 35,
	},
	title2: {
		fontSize: 40,
		fontWeight: 'bold',
		color: '#FFF',
		position: 'absolute',
		marginTop: 190,
		marginLeft: 35,
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
