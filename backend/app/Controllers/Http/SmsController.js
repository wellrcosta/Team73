'use strict';

const Config = use('Config');

const twilio = require('twilio');

const twilioAccountSid = Config.get('sms.accountSid');
const authToken = Config.get('sms.authToken');
const phoneNumber = Config.get('sms.phoneNumber');

const Client = new twilio(twilioAccountSid, authToken);

class SmsController {
	async send({ request, response }) {
		const { to, body, mediaUrl } = request.only(['to', 'body', 'mediaUrl']);

		if (!to || !body) {
			return response
				.status(400)
				.send("Parameters 'to' and 'body' are required!");
		}

		await Client.messages.create({
			to,
			from: phoneNumber,
			body,
			mediaUrl,
		});

		return response.status(201).send(`Message sent!`);
	}
}

module.exports = SmsController;
