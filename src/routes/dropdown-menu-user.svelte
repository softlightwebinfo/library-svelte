<script lang="ts">
	import '$lib/style.scss';
	import DropdownMenuUser from '$lib/components/DropdownMenuUser.svelte';
	import SubCard from '$lib/components/SubCard.svelte';
import Dark from '$lib/components/Dark.svelte';
import Center from '$lib/components/Center.svelte';
import Button from '$lib/components/Button.svelte';
</script>

<div>
	<DropdownMenuUser title="Hola nik Jone" subTitle="Disponible" noPadding>
		<Dark padding>
			<SubCard title="Mi perfil" subTitle="Ver detalles personales" icon="fa fa-home" />
			<SubCard title="Mi perfil" subTitle="Ver detalles personales" icon="fa fa-home" />
			<SubCard title="Mi perfil" subTitle="Ver detalles personales" icon="fa fa-home" />
			<SubCard title="Mi perfil" subTitle="Ver detalles personales" icon="fa fa-home" />
		</Dark>
		<section slot="footer">
			<Center>
				<Button icon="fa fa-unlock" size="lg" primaryDark rounded>Desconectar</Button>
			</Center>
		</section>
	</DropdownMenuUser>
</div>

<style lang="scss">
	section{
		padding: 15px;
	}
	div {
		max-width: 600px;
		margin: auto;
		margin-top: 80px;
	}
</style>
