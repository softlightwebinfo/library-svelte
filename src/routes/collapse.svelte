<script>
	import '$lib/style.scss';
	import Collapse from '$lib/components/Collapse.svelte';
	import Group from '$lib/components/Group.svelte';
	import Toolbar from '$lib/components/Toolbar.svelte';
	let data = [...new Array(10)].map((item, index) => ({
		open: false
	}));
</script>

{#each data as item}
	<Collapse title="¿Que es codeunic stream?" bind:open={item.open}>
		Es un hecho establecido desde hace mucho tiempo que un lector se distraerá con el contenido
		legible de una página cuando mire su diseño. El punto de usar Lorem Ipsum es que tiene una
		distribución de letras más o menos normal, en lugar de usar 'Contenido aquí, contenido aquí', lo
		que hace que parezca un inglés legible.
	</Collapse>
{/each}
<Collapse title="¿Que es codeunic stream?" let:open>
	<Toolbar alignCenter spaceBetween slot="header">
		<h2>
			<i class="fa fa-user" />
			Prueba de titulo
		</h2>
		<i class={open ? 'fa fa-user' : 'fa fa-home'} />
	</Toolbar>
</Collapse>
