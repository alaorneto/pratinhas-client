import { createCookie } from './createCookie';
import { post as login } from '$lib/utils';

export async function post(request) {
	const body = await login('/token/', {
        username: request.body.username,
        password: request.body.password
	});

	return createCookie(body);
}