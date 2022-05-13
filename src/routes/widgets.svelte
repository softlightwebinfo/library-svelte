<script lang="ts">
	import CardGrid from '$lib/components/CardGrid.svelte';
	import CardHolder from '$lib/components/CardHolder.svelte';
	import Col from '$lib/components/Col.svelte';
	import Dot from '$lib/components/Dot.svelte';
	import Row from '$lib/components/Row.svelte';
</script>

<div style="width: 600px;margin:auto;margin-top:40px;">
	<Row>
		<Col sm="6">
			<CardHolder title="Customers" data="58.39K" buttonText="See all" buttonUrl="/" theme="info" />
		</Col>
		<Col sm="6">
			<CardHolder title="Orders" data="58.39K" buttonText="See all" buttonUrl="/" theme="success" />
		</Col>
		<Col sm="6" class="mt-4">
			<CardHolder title="Orders" data="58.39K" buttonText="See all" buttonUrl="/" theme="success">
				<ul>
					<li><Dot />China</li>
					<li><Dot size="xs" theme="success" /> XS</li>
					<li><Dot size="sm" theme="success" /> SM</li>
					<li><Dot size="md" theme="success" /> MD</li>
					<li><Dot size="lg" theme="info" /> LG</li>
					<li><Dot size="xl" theme="info" /> XL</li>
					<li><Dot size="xxl" theme="info" /> XXL</li>
				</ul>
			</CardHolder>
		</Col>
		<Col sm="6" class="mt-4">
			<CardHolder title="Orders" data="58.39K" buttonText="See all" buttonUrl="/" theme="danger" />
		</Col>
	</Row>
</div>

<CardGrid shadow style="max-width: 1200px; margin:auto;margin-top:40px;">
	<CardHolder title="Customers" data="58.39K" buttonText="See all" buttonUrl="/" theme="info" />
	<CardHolder title="Customers" data="58.39K" buttonText="See all" buttonUrl="/" theme="info" />
	<CardHolder title="Customers" data="58.39K" buttonText="See all" buttonUrl="/" theme="info" />
	<CardHolder title="Customers" data="58.39K" buttonText="See all" buttonUrl="/" theme="info" />
	<CardHolder title="Customers" data="58.39K" buttonText="See all" buttonUrl="/" theme="info" />
	<CardHolder title="Customers" data="58.39K" buttonText="See all" buttonUrl="/" theme="info" />
	<CardHolder title="Customers" data="58.39K" buttonText="See all" buttonUrl="/" theme="info" />
	<CardHolder title="Customers" data="58.39K" buttonText="See all" buttonUrl="/" theme="info" />
	<CardHolder title="Customers" data="58.39K" buttonText="See all" buttonUrl="/" theme="info" />
</CardGrid>

<style lang="scss" global>
	@import '../lib/style.scss';
</style>
