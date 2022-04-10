<script>
	import '$lib/style.scss';
	import Modal from '$lib/components/Modal.svelte';
	import Button from '$lib/components/Button.svelte';
	import ModalHeader from '$lib/components/ModalHeader.svelte';
	import ModalBody from '$lib/components/ModalBody.svelte';
	import TitleHeading from '$lib/components/TitleHeading.svelte';
	import SubTitleHeading from '$lib/components/SubTitleHeading.svelte';
	import ModalFooter from '$lib/components/ModalFooter.svelte';
	import Toolbar from '$lib/components/Toolbar.svelte';
	let open = false;

	const onClick = () => (open = true);
	const onClose = () => (open = false);
</script>

<Button primary on:click={onClick}>Click</Button>
<p style="height:2000px">
	Cras mattis consectetur purus sit amet fermentum. Cras justo odio, dapibus ac facilisis in,
	egestas eget quam. Morbi leo risus, porta ac consectetur ac, vestibulum at eros. Praesent commodo
	cursus magna, vel scelerisque nisl consectetur et. Vivamus sagittis lacus vel augue laoreet rutrum
	faucibus dolor auctor. Aenean lacinia bibendum nulla sed consectetur. Praesent commodo cursus
	magna, vel scelerisque nisl consectetur et. Donec sed odio dui. Donec ullamcorper nulla non metus
	auctor fringilla. Cras mattis consectetur purus sit amet fermentum. Cras justo odio, dapibus ac
	facilisis in, egestas eget quam. Morbi leo risus, porta ac consectetur ac, vestibulum at eros.
	Praesent commodo cursus magna, vel scelerisque nisl consectetur et. Vivamus sagittis lacus vel
	augue laoreet rutrum faucibus dolor auctor. Aenean lacinia bibendum nulla sed consectetur.
	Praesent commodo cursus magna, vel scelerisque nisl consectetur et. Donec sed odio dui. Donec
	ullamcorper nulla non metus auctor fringilla.
</p>
<Modal {open} on:close={onClose}>
	<ModalHeader on:close={onClose}>Modal Heading</ModalHeader>
	<ModalBody>
		<TitleHeading>Overflowing text to show scroll behavior</TitleHeading>
		<SubTitleHeading>
			Cras mattis consectetur purus sit amet fermentum. Cras justo odio, dapibus ac facilisis in,
			egestas eget quam. Morbi leo risus, porta ac consectetur ac, vestibulum at eros. Praesent
			commodo cursus magna, vel scelerisque nisl consectetur et. Vivamus sagittis lacus vel augue
			laoreet rutrum faucibus dolor auctor. Aenean lacinia bibendum nulla sed consectetur. Praesent
			commodo cursus magna, vel scelerisque nisl consectetur et. Donec sed odio dui. Donec
			ullamcorper nulla non metus auctor fringilla. Cras mattis consectetur purus sit amet
			fermentum. Cras justo odio, dapibus ac facilisis in, egestas eget quam. Morbi leo risus, porta
			ac consectetur ac, vestibulum at eros. Praesent commodo cursus magna, vel scelerisque nisl
			consectetur et. Vivamus sagittis lacus vel augue laoreet rutrum faucibus dolor auctor. Aenean
			lacinia bibendum nulla sed consectetur. Praesent commodo cursus magna, vel scelerisque nisl
			consectetur et. Donec sed odio dui. Donec ullamcorper nulla non metus auctor fringilla.
		</SubTitleHeading>
	</ModalBody>
	<ModalFooter>
		<Toolbar>
			<Button secondary on:click={onClose}>Close</Button>
			<Button primary>Save</Button>
		</Toolbar>
	</ModalFooter>
</Modal>
