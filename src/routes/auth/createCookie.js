export function createCookie(body) {

	if (body.errors) {
		return { status: 401, body };
	}

	const json = body;
	const stringfied = JSON.stringify(json);
	const value = Buffer.from(stringfied).toString('base64');
    
	return {
		headers: {
			'set-cookie': `jwt=${value}; Path=/; HttpOnly`,
		},
		body
	};
}