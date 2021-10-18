<script context="module">
	export async function load({ session }) {
		if (!session.user) {
			return {
				status: 302,
				redirect: '/login'
			};
		}
		return {};
	}
</script>

<script>
	import { page, session } from '$app/stores';
	import { send } from '$lib/auth'
	import '../../styles/tailwind-output.css';

	async function logout() {
		await send(`/auth/logout`);

		$session.user = null;
	}
</script>

<div class="relative bg-white">
	<div class="max-w-7xl mx-auto px-4 sm:px-6">
		<div
			class="flex justify-between items-center border-b-2 border-gray-100 py-6 md:justify-start md:space-x-10"
		>
			<div class="flex justify-start lg:w-0 lg:flex-1">
				<a href="/">
					<img
						class="h-8 w-auto sm:h-10"
						src="https://tailwindui.com/img/logos/workflow-mark-indigo-600.svg"
						alt=""
					/>
				</a>
			</div>

			<nav class="hidden md:flex space-x-10">
				<a href="/app/graficos" class="text-base font-medium text-gray-500 hover:text-gray-900" class:font-black={$page.path.startsWith('/app/graficos')}>
					Gráficos
				</a>

				<a href="/app/extrato" class="text-base font-medium text-gray-500 hover:text-gray-900" class:font-black={$page.path.startsWith('/app/extrato')}>
					Extrato
				</a>

				<a href="/app/orcamento" class="text-base font-medium text-gray-500 hover:text-gray-900" class:font-black={$page.path.startsWith('/app/orcamento')}>
					Orçamento
				</a>
			</nav>

			<div class="hidden md:flex items-center justify-end md:flex-1 lg:w-0">
				{#if $session.user}
					<span class="whitespace-nowrap text-base font-medium text-gray-500 mr-4"
						>Olá, {$session.user.username}!</span
					>
					<button class="whitespace-nowrap text-base font-medium text-gray-500 mr-4 hover:text-gray-900" on:click={logout}> Sair </button>
				{/if}

				{#if !$session.user}
					<a
						href="/login"
						class="whitespace-nowrap text-base font-medium text-gray-500 hover:text-gray-900"
					>
						Entrar
					</a>
					<a
						href="/register"
						class="ml-8 whitespace-nowrap inline-flex items-center justify-center px-4 py-2 border border-transparent rounded-md shadow-sm text-base font-medium text-white bg-indigo-600 hover:bg-indigo-700"
					>
						Cadastre-se
					</a>
				{/if}
			</div>
		</div>
		
		<div class="p-4">
			<slot></slot>
		</div>
	</div>
</div>


