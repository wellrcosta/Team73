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
	boxTitle: {
		marginTop: 90,
		justifyContent: 'center',
		alignItems: 'center',
	},
	textTitle: {
		fontSize: 20,
		fontWeight: '800',
		color: Global.light,
	},
	boxForm: {
		marginTop: 90,
	},
	input: {
		color: Global.light,
		marginTop: 8,
		marginLeft: 35,
		marginRight: 35,
		borderBottomWidth: 1.8,
		borderBottomColor: Global.light,
	},
	button: {
		marginTop: 90,
	},
	register: {
		flexDirection: 'row',
		marginTop: 90,
		marginLeft: 85,
	},
	textRegister: {
		color: Global.light,
	},
	textButton: {
		marginLeft: 5,
		color: '#EF476F',
	},
});

export default styles;
