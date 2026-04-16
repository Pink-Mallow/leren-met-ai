<script>
  export let method;
  import DetailLlm from '$lib/components/detailLlm.svelte'
</script>

<section>
  <h3>Uitdaging</h3>
  <div><DetailLlm {method}/></div>
  <button class="copy-btn">Kopieer stappenplan</button>
  {@html method.steps}
</section>

<!-- <style>
   {
    margin: 5px;
    margin-left: 20px;
    padding: 10px;
  }
</style> -->