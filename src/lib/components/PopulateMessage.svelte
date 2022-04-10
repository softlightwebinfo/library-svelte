<script lang="ts">
	import Container from './Container.svelte';
	export let message: string;
	export let user: string;
</script>

<section class="populateMessage">
	<Container>
		<h4>" {message} "</h4>
		<p>{user}</p>
	</Container>
</section>

<style lang="scss">
	.populateMessage {
		background-color: #151515;
		padding: 98px 108px;

		h4 {
			line-height: 2.2rem;
			font-style: italic;
			font-size: 32px;
			margin-bottom: 1.5em;
		}

		h4,
		p {
			text-align: center;
			color: white;
		}
	}
</style>
