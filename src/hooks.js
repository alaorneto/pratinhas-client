import { loadUserClaims } from '$lib/utils';
import * as cookie from 'cookie';

export async function handle({ request, resolve }) {
	const cookies = cookie.parse(request.headers.cookie || '');
	const jwt = cookies.jwt && Buffer.from(cookies.jwt, 'base64').toString('utf-8');
	let json = null;
	
	if (jwt) {
		json = JSON.parse(jwt);
	}

	request.locals.user = json ? loadUserClaims(json) : null;

	return await resolve(request);
}

export function getSession({ locals }) {
	return {
		user: locals.user && {
			username: locals.user.username,
			email: locals.user.email,
			access: locals.user.accessToken
		}
	};
}