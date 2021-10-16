<script context="module">
	export async function load({ session }) {
		if (session.user) {
			return {
				status: 302,
				redirect: '/app'
			};
		}
		return {};
	}
</script>

<script>
	import { session } from '$app/stores';
	import { goto } from '$app/navigation';
	import { send } from '$lib/auth';
	import { loadUserClaims } from '$lib/utils';
	import ListErrors from '$lib/ListErrors.svelte';
	let username = '';
	let password = '';
	let errors = null;
	async function submit(event) {
		const response = await send(`/auth/login`, { username, password });
		// TODO handle network errors
		errors = response.errors;

		if (response.access) {
			$session.user = loadUserClaims(response);
			goto('/');
		}
	}
</script>

<svelte:head>
	<title>Pratinhas - Entrar</title>
</svelte:head>

<div class="w-full h-screen flex items-center justify-center">
	<div class="bg-gray-200 w-96 h-auto rounded-lg pt-8 pb-8 px-8 flex flex-col items-center">
        <ListErrors {errors}/>

        <form on:submit|preventDefault={submit}>
            <fieldset class="form-group">
                <input class="w-full h-12 rounded-lg px-4 text-lg focus:ring-blue-600 mb-4" placeholder="usuário" type="text" required bind:value={username}>
            </fieldset>
            <fieldset class="form-group">
                <input class="w-full h-12 rounded-lg px-4 text-lg focus:ring-blue-600 mb-4" placeholder="senha" type="password" required bind:value={password}>
            </fieldset>
            <button class="w-full h-12 rounded-lg bg-blue-600 text-gray-200 uppercase font-semibold hover:bg-blue-700 text-gray-100 transition mb-4" type="submit">
                Entrar
            </button>
        </form>
    </div>
</div>