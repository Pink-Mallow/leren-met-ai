<script>
  export let method;
  import DetailGuidelines from '$lib/components/detailGuidelines.svelte'
  import DetailSteps from '$lib/components/detailSteps.svelte'
</script>

<DetailGuidelines {method} />
<DetailSteps {method}/>