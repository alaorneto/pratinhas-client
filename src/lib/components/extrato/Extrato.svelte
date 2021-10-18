<script>   
    import ExtratoItem from '$lib/components/extrato/ExtratoItem.svelte'
    export let lancamentos;
    export let saldo_inicial;
    export let saldo_final;

    let lang = 'pt-BR';
</script>


<div class="flex flex-col">
    <div class="-my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
        <div class="py-2 align-middle inline-block min-w-full sm:px-6 lg:px-8">
            <div class="shadow overflow-hidden border-b border-gray-200 sm:rounded-lg">
                <table class="min-w-full divide-y divide-gray-200">
                    <thead class="bg-gray-50">
                        <tr>
                            <th scope="col" class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Data</th>
                            <th scope="col" class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Descrição</th>
                            <th scope="col" class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Categoria</th>
                            <th scope="col" class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Valor</th>
                            <th scope="col" class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Saldo</th>
                        </tr>
                    </thead>
                    <tbody class="bg-white divide-y divide-gray-200">
                        <tr>
                            <td class="px-6 py-4 whitespace-nowrap">{(new Date(saldo_inicial.data_inicial)).toLocaleDateString(lang)}</td>
                            <td class="px-6 py-4 whitespace-nowrap">Saldo inicial</td>
                            <td class="px-6 py-4 whitespace-nowrap"></td>
                            <td class="px-6 py-4 whitespace-nowrap"></td>
                            <td class="px-6 py-4 whitespace-nowrap">{saldo_inicial.saldo_inicial}</td>
                        </tr>
                        {#each lancamentos as lancamento}
                            <ExtratoItem item={lancamento} locale={lang}></ExtratoItem>
                        {/each}
                        <tr>
                            <td class="px-6 py-4 whitespace-nowrap">{(new Date(saldo_final.data_final)).toLocaleDateString(lang)}</td>
                            <td class="px-6 py-4 whitespace-nowrap">Saldo final</td>
                            <td class="px-6 py-4 whitespace-nowrap"></td>
                            <td class="px-6 py-4 whitespace-nowrap"></td>
                            <td class="px-6 py-4 whitespace-nowrap">{saldo_final.saldo_final}</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    </div>
</div>
