const NEW_ORDER_MESSAGE = `Zoompy: [name], recebemos seu novo pedido ([order_number]) e em breve ele será processado!`;

const UPDATED_ORDER_MESSAGE =
	"Zoompy: [name], seu pedido ([order_number]) foi atualizado para '[new_status]'...";

function pad(str, width, padStr) {
	padStr = padStr || '0';
	str = str + '';
	return str.length >= width
		? str
		: new Array(width - str.length + 1).join(padStr) + str;
}

module.exports = {
	newOrderSms(name, orderId) {
		return NEW_ORDER_MESSAGE.replace('[name]', name).replace(
			'[order_number]',
			`#${pad(orderId, 6)}`
		);
	},

	updateOrderSms(name, orderId, newStatus) {
		return UPDATED_ORDER_MESSAGE.replace('[name]', name)
			.replace('[order_number]', `#${pad(orderId, 6)}`)
			.replace('[new_status]', newStatus);
	},
};
