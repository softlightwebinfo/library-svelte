<script>
	import Badge from '$lib/components/Badge.svelte';
</script>

<Badge>New</Badge>
<Badge secondary>Secondary</Badge>
<Badge secondary round>Secondary</Badge>
<Badge bg="primary" round>Primary BG</Badge>
<Badge bg="secondary" round>Secondary BG</Badge>
<Badge bg="success" round>Success BG</Badge>
<Badge bg="info" round>Info BG</Badge>
<Badge bg="light" round>Light BG</Badge>
<Badge bg="dark" round>Dark BG</Badge>
<Badge bg="warning" round>Waning BG</Badge>
<Badge bg="danger" round>Danger BG</Badge>
<Badge bg="alert" round>Alert BG</Badge>

<style lang="scss" global>
	@import '../lib/style.scss';
</style>
