import { StyleSheet } from 'react-native';
import Global from '../../global';

const styles = StyleSheet.create({
	boxForm: {
		justifyContent: 'center',
		alignItems: 'center',
	},
	top: {
		marginTop: '10%',
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
	image: {
		marginTop: '15%',
		marginHorizontal: '20%',
		height: 200,
		width: 290,
	},
});

export default styles;
