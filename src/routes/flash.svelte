<script>
	import Flash from '$lib/components/Flash.svelte';
	import Shadow from '$lib/components/Shadow.svelte';
	const data = [
		'A-HA theme is multi-purpose solution for any kind of business',
		'8 Hidden Costs of Starting and Running a Business',
		'Satelite cost tens of millions or even hundreds of millions of dollars to build'
	];
</script>

<Shadow>
	<Flash {data} />
</Shadow>

<style lang="scss" global>
	@import '../lib/style.scss';
</style>
