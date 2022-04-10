<script>
	import gif from '$lib/svg/gif.svg';
	import xlsx from '$lib/svg/xlsx.svg';
	const icons = { gif, xlsx };
	export let name;
	$: type = name.slice(name.lastIndexOf('.') + 1);
</script>

<span style="background-image: url({icons[type]})">{name}</span>

<style>
	span {
		padding: 0 0 0 1.5em;
		background: 0 0.1em no-repeat;
		background-size: 1em 1em;
	}
</style>
