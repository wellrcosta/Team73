import { useContext } from 'react';
import AuthContext from '../services/context';

export function useAuth() {
	const context = useContext(AuthContext);

	return context;
}
