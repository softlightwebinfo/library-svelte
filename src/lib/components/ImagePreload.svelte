<script lang="ts">
	export let image: string;
	export let notFound = '/images/not-found.png';

	const preload = async (src) => {
		const resp = await fetch(src);
		const blob = await resp.blob();

		return new Promise(function (resolve) {
			let reader = new FileReader();
			reader.readAsDataURL(blob);
			reader.onload = () => resolve(reader.result);
			reader.onerror = (error) => reject('Error: ', error);
		});
	};
</script>

{#await preload(image)}
	Image is loading!
{:then base64}
	<img src={base64} />
{:catch}
	<img src={notFound} />
{/await}
