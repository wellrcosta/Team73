import React, { createContext, useState, useEffect } from 'react';

import { AsyncStorage } from 'react-native';

const AuthContext = createContext({});

export function AuthProvider({ children }) {
	const [token, setToken] = useState(null);
	const [user, setUser] = useState(null);

	async function signIn() {
		const data = { name: 'Silas Almeida', token: 'jkasldjm2992' };

		setToken(data.token);

		try {
			await AsyncStorage.setItem('@Auth:user', data.name);
			await AsyncStorage.setItem('@Auth:token', data.token);
		} catch (error) {}
	}

	function signOut() {
		AsyncStorage.clear(() => {
			setUser(null);
			setToken(null);
		});
	}

	async function loadStoragedData() {
		try {
			const storageUser = await AsyncStorage.getItem('@Auth:user');
			const storageToken = await AsyncStorage.getItem('@Auth:token');

			if (storageUser && storageToken) {
				setUser(JSON.parse(storageUser));
				setToken(JSON.parse(storageToken));
			}
		} catch (error) {}
	}

	useEffect(() => {
		loadStoragedData();
	}, []);

	return (
		<AuthContext.Provider value={{ signed: !!token, user, signIn, signOut }}>
			{children}
		</AuthContext.Provider>
	);
}

export default AuthContext;
