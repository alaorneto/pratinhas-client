import { persistStore } from "./persistStore";

const initial = getAnonymousUser();

export const userStore = persistStore("authStore", initial);

export function getAnonymousUser() {
	return {
		"username": "Anonymous",
		"authenticated": false,
	};
}