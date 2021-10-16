<script>   
    import Conta from './Conta.svelte'
    export let contas;
</script>

{#each contas as conta}
    <Conta conta={conta} />
{/each}