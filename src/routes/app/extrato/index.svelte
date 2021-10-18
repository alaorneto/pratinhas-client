<script context="module">
    import { get } from '$lib/utils';

	export async function load({ session }) {
		let contas = await get('/core/contas/', session.user.access);
        let lancamentos = await get('/core/extrato/10/2021/', session.user.access);
        
		return { props: { 
                contas, 
                "lancamentos": lancamentos.itens,
                "saldo_inicial": lancamentos.inicio,
                "saldo_final": lancamentos.fim
            } 
        };
	}
</script>

<script>
    import Extrato from "$lib/components/extrato/Extrato.svelte";
    import PainelContas from "$lib/components/extrato/PainelContas.svelte";

    export let contas;
    export let lancamentos;
    export let saldo_inicial;
    export let saldo_final;
</script>

<div class="grid grid-cols-4 gap-1">
    <div>
        <PainelContas contas={contas}></PainelContas>
    </div>
    
    <div class="col-span-3">
        <Extrato lancamentos={lancamentos} saldo_inicial={saldo_inicial} saldo_final={saldo_final}></Extrato>
    </div>
</div>




