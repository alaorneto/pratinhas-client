<script context="module">
    import { get } from '$lib/utils';

	export async function load({ session }) {
		let contas = await get('/core/contas/', session.user.access);
        let lancamentos = await get('/core/contas/', session.user.access);
		return { props: { contas, lancamentos } };
	}
</script>

<script>
    import Extrato from "./extrato.svelte";
    import PainelContas from "./PainelContas.svelte";

    export let contas;
    export let lancamentos;
</script>

<PainelContas contas={contas} />

<Extrato lancamentos={lancamentos} />