import React from 'react';

import { useAuth } from '../hooks/auth';

import AuthRoutes from './auth.routes';
import AppRoutes from './app.routes';

export default function Routes() {
	const { signed } = useAuth();

	return signed ? <AppRoutes /> : <AuthRoutes />;
}
