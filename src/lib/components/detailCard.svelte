<script>
  export let method;
  import DetailGuidelines from '$lib/components/detailGuidelines.svelte'
  import DetailSteps from '$lib/components/detailSteps.svelte'
  import DetailTips from '$lib/components/detailTips.svelte'
</script>

<DetailGuidelines {method} />
<DetailSteps {method}/>
<DetailTips {method}/>