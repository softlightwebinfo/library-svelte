<script>
	import { CONTEXT } from '$lib/settings';

	import { getContext } from 'svelte';

	export let dark = true;
	export let open = false;
	const { state } = getContext(CONTEXT.NAVBAR);
	$: _open = $state || open;
</script>

<aside class:dark class="DashboardSidebar" class:open={_open}>
	<slot />
</aside>

<style lang="scss">
	.DashboardSidebar {
		width: var(--dashboard-sidebar__width, 250px);
		transition: var(--transition);
		z-index: 1001;
		background: #fff;
		bottom: 0;
		margin-top: 0;
		position: fixed;
		top: 70px;
		-webkit-box-shadow: 0 0.75rem 1.5rem rgb(18 38 63 / 3%);
		box-shadow: 0 0.75rem 1.5rem rgb(18 38 63 / 3%);
	}
	.dark {
		background: var(--dark);
	}
	.open {
		:global(.Menu li:hover) {
			:global(a) {
				padding: 15px 20px;
				min-height: 55px;
				-webkit-transition: none;
				transition: none;
				position: relative;
				width: calc(190px + 70px);
				color: #556ee6;
				background-color: #f5f5f5;
				-webkit-transition: none;
				transition: none;
				background: #2e3548;
				color: #fff;
				:global(span) {
					display: inline;
					padding-left: 25px;
				}
			}
			:global(ul) {
				display: block;
				left: 70px;
				position: absolute;
				width: 190px;
				height: auto !important;
				-webkit-box-shadow: 3px 5px 10px 0 rgb(54 61 71 / 10%);
				box-shadow: 3px 5px 10px 0 rgb(54 61 71 / 10%);
				background-color: #2a3042;
				padding: 5px 0;
				z-index: 9999;
				margin-top: 55px;
				:global(li) {
					-webkit-box-shadow: none;
					box-shadow: none;
					padding: 8px 20px;
					position: relative;
					width: 190px;
					z-index: 6;
					color: #545a6d;
					:global(a) {
						box-shadow: none;
						padding: 8px 20px;
						position: relative;
						width: 190px;
						z-index: 6;
						color: #545a6d;
						width: 100%;
						min-height: 20px;
						display: flex;
						align-items: center;
						background: none;
						padding: 0;
					}
				}
			}
		}
		:global(.Menu li a) {
			padding: 15px 20px;
			min-height: 55px;
			-webkit-transition: none;
			transition: none;
			:global(i:first-child) {
				display: flex;
				justify-content: center;
				align-items: center;
			}
			:global(span) {
				display: none;
			}
			:global(i:last-child) {
				display: none;
			}
		}
		:global(.MenuTitle) {
			display: none;
		}
	}
</style>
