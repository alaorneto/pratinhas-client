<script>   
    export let item;
    export let locale;
</script>


<tr>
    <td class="px-6 py-4 whitespace-nowrap">{(new Date(item.data)).toLocaleDateString(locale)}</td>
    <td class="px-6 py-4 whitespace-nowrap">{item.descricao}</td>
    <td class="px-6 py-4 whitespace-nowrap">{item.categoria}</td>
    <td class="px-6 py-4 whitespace-nowrap">{item.valor}</td>
    <td class="px-6 py-4 whitespace-nowrap">{item.saldo_corrente}</td>
</tr>