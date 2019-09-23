'use strict';
const fs = require('fs');
const path = require('path');

module.exports = {
	BoxSDKConfig: {
		clientID: "",
		clientSecret: "",
		publicKeyID: "",
		privateKey: "",
		privateKeyFilename: "",
		passphrase: "",
		enterpriseID: "",
		primaryKey: "",
		secondaryKey: "",
		boxConfigFilePath: "config.json"
	},
	BoxOptions: {
		inMemoryStoreSize: "100",
		expiresAtFieldName: "expiresAt",
		boxAppUserIdFieldName: "box_appuser_id"
	},

	Auth0Config: {
		domain: "bchang55.auth0.com",
		clientId: "b5VpnIUHP0uBZLjItzURTtYTnktqbbvb",
		clientSecret: "P1DVRMsTmMB5KZ3BRjE3HJezJCQkJH0vAPwUa7mDz8JN45S8cSOcVgkeJvPhPBmd",
		callbackUrl: "http://localhost:3000/callback",
		sessionSecret: "securepassword",
		inMemoryStoreSize: "100",
	},

	RedisConfig: {
		port: "6379",
		address: "redis",
		password: "securepassword"
	},

	AppConfig: {
		domain: "http://localhost:3000"
	}
}