import { session } from '$app/stores';

const api = "http://localhost:8000/api";

export function post(endpoint, data, token) {
	endpoint = api + endpoint;

	return fetch(endpoint, {
		method: 'POST',
		credentials: 'include',
		body: JSON.stringify(data || {}),
		headers: {
			'Content-Type': 'application/json',
			'Authorization': 'Bearer ' + token
		}

		

	}).then((r) => r.json());
}

export function get(endpoint, token) {
	endpoint = api + endpoint;
	
	return fetch(endpoint, {
		method: 'GET',
		credentials: 'include',
		headers: {
			'Content-Type': 'application/json',
			'Authorization': 'Bearer ' + token
		}
	}).then((r) => r.json());
}


export function parseJwt (token) {
    var base64Url = token.split('.')[1];
    var base64 = base64Url.replace(/-/g, '+').replace(/_/g, '/');
    var jsonPayload = decodeURIComponent(atob(base64).split('').map(function(c) {
        return '%' + ('00' + c.charCodeAt(0).toString(16)).slice(-2);
    }).join(''));

    return JSON.parse(jsonPayload);
};

export function loadUserClaims(jwt) {
	var payload = parseJwt(jwt.access);
	// create user from user claims
	
	var userData = {
		"id": payload.user_id,
		"username": payload.username,
		"email": payload.email,
		"authenticated": true,
		"accessToken": jwt.access,
		"refreshToken": jwt.refresh
	}

	return userData;
}

async function refreshAccessToken() {
	var res = await post("/token/refresh/", {"refresh": $userStore.refreshToken});

}