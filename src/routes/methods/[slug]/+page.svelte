<script>
  let { data } = $props()

  const { method } = data
  import DetailCard from '$lib/components/detailCard.svelte'
  import DetailLecturer from '$lib/components/detailLecturer.svelte'
</script>

<header>
  <a href="/methods">Terug naar alle methodes</a>
  <button id="copy-btn">Deel deze methode</button>
</header>
<!-- the title and description. The rest is in the MethodCard component -->
<article>
  <h2>{method.title}</h2>
  <DetailLecturer {method}/>
  <p>{method.description}</p>
  <DetailCard {method} />
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
    display: grid;
    border-radius: 10px;
    gap: 20px;
  }
</style>