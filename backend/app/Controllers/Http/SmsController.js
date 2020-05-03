'use strict';

const Config = use('Config');

const twilio = require('twilio');

const twilioAccountSid = Config.get('sms.accountSid');
const authToken = Config.get('sms.authToken');
const phoneNumber = Config.get('sms.phoneNumber');

const Client = new twilio(twilioAccountSid, authToken);

class SmsController {
	async store({ request, response }) {
		const { data } = request.only(['to', 'body', 'mediaUrl']);

		await this.send(...data);

		return response.status(201).send(`Message sent!`);
	}

	async send(to, body, mediaUrl) {
		to = `+55${to}`;

		await Client.messages.create({
			to,
			from: phoneNumber,
			body,
			mediaUrl,
		});
	}
}

module.exports = SmsController;
