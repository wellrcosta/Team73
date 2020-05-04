import numbro from 'numbro';

numbro.registerLanguage({
	languageTag: 'pt-BR',
	delimiters: {
		thousands: ',',
		decimal: '.',
	},
	abbreviations: {
		thousand: 'k',
		million: 'm',
		billion: 'b',
		trillion: 't',
	},
	ordinal: () => {
		return '';
	},
	currency: {
		symbol: 'R$ ',
		position: 'prefix',
		code: 'BRL',
	},
	formats: {
		fourDigits: {
			totalLength: 4,
			spaceSeparated: true,
			average: true,
		},
		fullWithTwoDecimals: {
			output: 'currency',
			mantissa: 2,
			spaceSeparated: true,
			thousandSeparated: true,
		},
		fullWithTwoDecimalsNoCurrency: {
			mantissa: 2,
			thousandSeparated: true,
		},
		fullWithNoDecimals: {
			output: 'currency',
			spaceSeparated: true,
			thousandSeparated: true,
			mantissa: 2,
		},
	},
});

numbro.setLanguage('pt-BR');

export default function Number(value) {
	let price = numbro(value).formatCurrency('currency');

	return price;
}
