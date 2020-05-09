import { StyleSheet } from 'react-native';
import Global from '../../global';

const styles = StyleSheet.create({
	boxTitle: {
		marginTop: '10%',
	},
	boxForm: {
		justifyContent: 'center',
		alignItems: 'center',
	},
	title: {
		alignSelf: 'flex-start',
		marginLeft: '5%',
		marginRight: '2%',
		fontSize: 25,
		fontWeight: '800',
		color: Global.light,
	},
	subtitle: {
		fontSize: 14,
		marginTop: '15%',
	},
	input: {
		color: Global.light,
		marginTop: '1%',
		width: '90%',
		fontSize: 23,
		borderBottomWidth: 1.8,
		borderBottomColor: Global.light,
	},
	containerImage: {
		marginTop: '10%',
		justifyContent: 'center',
		alignContent: 'center',
	},
});

export default styles;
