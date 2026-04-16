<script>
  export let method;
  import DetailGuidelines from '$lib/components/detailGuidelines.svelte'
  import DetailSteps from '$lib/components/detailSteps.svelte'
  import DetailTips from '$lib/components/detailTips.svelte'
  import DetailLlm from '$lib/components/detailLlm.svelte'
</script>

<DetailGuidelines {method} />
<DetailSteps {method}/>
<DetailTips {method}/>