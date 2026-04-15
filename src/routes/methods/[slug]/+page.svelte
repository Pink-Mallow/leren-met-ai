<script>
  let { data } = $props()

  const { method } = data
  
  import MethodCard from '$lib/components/methodCard.svelte'

</script>

<header>
  <a href="/methods">Terug naar alle methodes</a>
  <button id="copy-btn">Deel deze methode</button>
</header>
<!-- the title and description. The rest is in the MethodCard component -->
<article>
  <h2>{method.title}</h2>
  <p>{method.description}</p>
</article>

<style>
  header a {
    margin: 10px;
    padding: 10px;
    text-decoration: none;
    color: var(--color-primary);
    font-weight: bold;
  }
  article {
    margin: 20px;
    padding: 20px;
    /* width: clamp(300px, 80%, 800px); */
    display: grid;
    border-radius: 10px;
    align-items: center;
    /* justify-items: center; */
    gap: 20px;
  }

  h2, p {
    margin: 5px;
    padding: 10px;
  }
  
</style>