import { StyleSheet } from 'react-native';
import Global from '../../global';

export default StyleSheet.create({
	container: {
		backgroundColor: Global.bgColor,
		shadowColor: '#000',
		shadowOffset: {
			width: 0,
			height: 1,
		},
		shadowOpacity: 0.22,
		shadowRadius: 2.22,
		elevation: 3,
		width: 102,
		height: 187,
		borderRadius: 10,
		padding: 6,
	},
	title: {
		fontSize: 10,
		color: Global.primary,
	},
	image: {
		width: '100%',
		height: 60,
		borderRadius: 10,
	},
	price: {
		color: Global.primary,
		fontSize: 16,
		fontWeight: 'bold',
	},
	desc: {
		color: Global.primary,
		fontSize: 10,
	},
	qnt: {
		paddingTop: 5,
		color: Global.primary,
		fontSize: 10,
	},
	button: {
		borderRadius: 5,
		backgroundColor: Global.primary,
		padding: 4,
		marginTop: 5,
		justifyContent: 'center',
		alignItems: 'center',
	},
	txtButton: {
		fontSize: 11,
		color: Global.light,
	},
});
