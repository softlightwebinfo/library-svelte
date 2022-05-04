<script>
	import { createEventDispatcher } from 'svelte';
	import Button from './Button.svelte';
	import ButtonToolbar from './ButtonToolbar.svelte';
	const dispatch = createEventDispatcher();
</script>

<ButtonToolbar style="margin-left: -10px">
	<Button on:click={(e) => dispatch('like', { e })} icon="fa fa-heart">Like</Button>
	<Button on:click={(e) => dispatch('comment', { e })} icon="fa fa-comments">Comment</Button>
	<Button on:click={(e) => dispatch('share', { e })} icon="fa fa-share">Share</Button>
</ButtonToolbar>
