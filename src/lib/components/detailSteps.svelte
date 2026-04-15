<script>
  export let method;
  console.log(method.steps);
</script>

<section>
  <h3>Uitdaging</h3>
  <button class="copy-btn">Kopieer stappenplan</button>
  {@html method.steps}
</section>

<style>
  p {
    margin: 5px;
    margin-left: 20px;
    padding: 10px;
  }
</style>