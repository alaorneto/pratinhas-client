<script>   
    import ExtratoItem from './ExtratoItem.svelte'
    export let lancamentos;
</script>

Painel Contas
{#each lancamentos as lancamento}
    <ExtratoItem item={lancamento} />
{/each}