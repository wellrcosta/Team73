import React, { useState } from 'react';

interface Person {
	firstName: string;
	lastName: string;
	fone: string;
	administrator: boolean;
}

interface Props {
	text: string;
	active: boolean;
	i?: number;
	fn?: (sendMail: boolean) => void;
	fn1?: () => number;
	fn2?: () => string;
	fn3?: () => boolean;
	person?: Person;
}

const Button: React.FC<Props> = (props) => {
	const [quantity, setQuantity] = useState<number>(1);

	if (props.i) setQuantity(props.i);

	if (props.active && quantity >= 1) {
		return (
			<div>
				<input>props.text</input>
			</div>
		);
	} else {
		return <div></div>;
	}
};

export default Button;
