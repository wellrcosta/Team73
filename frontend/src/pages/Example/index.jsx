import React, { useState, useEffect } from 'react';

import api from '../../services/api';

export default function Example() {
	const [products, setProducts] = useState([]);

	const handleProducts = async () => {
		try {
			const data = await api.get('/products');

			setProducts(data);
		} catch (error) {
			console.log(error);
		}
	};

	useEffect(() => {
		handleProducts();
	}, []);

	return <>Example</>;
}
