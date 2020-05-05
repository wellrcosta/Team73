import { StyleSheet } from 'react-native';
import Global from '../../global';

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: Global.primary,
		position: 'relative',
		borderTopLeftRadius: 35,
		borderTopRightRadius: 35,
	},
	imgLogo: {
		marginTop: 40,
		marginBottom: 20,
		marginHorizontal: '15%',
	},
	textTitle: {
		marginTop: 65,
		marginLeft: 35,
		marginRight: 91,
		fontSize: 26,
		fontWeight: '500',
		color: Global.primary,
	},
	labelName: {
		color: Global.light,
		fontSize: 14,
		marginTop: 50,
		marginLeft: 35,
	},
	input: {
		color: Global.light,
		marginTop: 2,
		marginRight: 65,
		marginHorizontal: 35,
		marginBottom: 25,
		fontSize: 24,
		borderBottomWidth: 2,
		borderBottomColor: Global.light,
	},
	image: {
		marginTop: '10%',
		marginLeft: '13%',
		height: 200,
		width: 290,
	},
});

export default styles;
