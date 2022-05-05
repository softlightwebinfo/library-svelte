<script lang="ts">
	export let image: string;
	const notFound = '/images/not-found.png';

	const preload = async (src) => {
		const resp = await fetch(src);
		const blob = await resp.blob();

		return new Promise(function (resolve, reject) {
			let reader = new FileReader();
			reader.readAsDataURL(blob);
			reader.onload = () => {
				if (reader.result == 'data:') {
					reject('No se encuentra la imagen');
					return;
				}
				resolve(reader.result);
			};
			reader.onerror = (error) => reject('Error 2: ' + error);
		});
	};
</script>

{#await preload(image)}
	Image is loading!
{:then base64}
	<img src={base64} />
{:catch e}
	<img src={notFound} />
{/await}
