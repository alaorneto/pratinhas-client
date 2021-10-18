<script>   
    import Conta from '$lib/components/extrato/Conta.svelte'
    export let contas;
</script>

{#each contas as conta}
    <Conta conta={conta} />
{/each}