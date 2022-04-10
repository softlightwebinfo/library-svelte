<script lang="ts">
	import CardChat from '$lib/apps/CardChat.svelte';
	import type { IContact } from '$lib/interfaces/IContact';
	const contacts: IContact[] = [
		{
			id: 1,
			title: 'Peter Dinklage',
			subTitle: 'Como estas?, estas bien?',
			date: '2020-10-02 10:20:10',
			image:
				'https://png.pngtree.com/png-vector/20190710/ourlarge/pngtree-user-vector-avatar-png-image_1541962.jpg'
		},
		{
			id: 2,
			title: 'Carlos Roberto',
			subTitle: 'Como estas?, estas bien?',
			date: '2020-10-02 10:20:10',
			image:
				'https://png.pngtree.com/png-vector/20190710/ourlarge/pngtree-user-vector-avatar-png-image_1541962.jpg'
		},
		{
			id: 3,
			title: 'Noah Orfila',
			date: '2020-10-02 10:20:10',
			subTitle: 'Como estas?, estas bien?',
			new: true,
			image:
				'https://png.pngtree.com/png-vector/20190710/ourlarge/pngtree-user-vector-avatar-png-image_1541962.jpg',
			messages: [
				{
					id: 1,
					user: 'Codeunic',
					date: '2020-10-02 10:10:02',
					avatar:
						'https://png.pngtree.com/png-vector/20190710/ourlarge/pngtree-user-vector-avatar-png-image_1541962.jpg',
					my: false,
					message:
						'Yes, in an organization stature, this is a must. Besides, we need to quickly establish all other professional appearances, e.g., having a website where members’ profile will be displayed along with additional organizational information. Providing services to existing members is more important than attracting new members at this moment, in my opinion..'
				},
				{
					id: 2,
					user: 'Codeunic',
					date: '2020-10-02 10:10:02',
					avatar:
						'https://png.pngtree.com/png-vector/20190710/ourlarge/pngtree-user-vector-avatar-png-image_1541962.jpg',
					my: false,
					message: 'What are you doing?'
				},
				{
					id: 3,
					user: 'Codeunic',
					date: '2020-10-02 10:10:02',
					avatar:
						'https://png.pngtree.com/png-vector/20190710/ourlarge/pngtree-user-vector-avatar-png-image_1541962.jpg',
					my: true,
					message: 'Nothing!'
				},
				{
					id: 4,
					user: 'Codeunic',
					date: '2020-10-02 10:10:02',
					avatar:
						'https://png.pngtree.com/png-vector/20190710/ourlarge/pngtree-user-vector-avatar-png-image_1541962.jpg',
					my: false,
					message: 'How are you?'
				},
				{
					id: 5,
					user: 'Codeunic',
					date: '2020-10-02 10:10:02',
					avatar:
						'https://png.pngtree.com/png-vector/20190710/ourlarge/pngtree-user-vector-avatar-png-image_1541962.jpg',
					my: true,
					message: 'Fine'
				}
			]
		},
		{
			id: 4,
			title: 'Pedro Dinklage',
			date: '2020-10-02 10:20:10',
			subTitle: 'Como estas?, estas bien?',
			image:
				'https://png.pngtree.com/png-vector/20190710/ourlarge/pngtree-user-vector-avatar-png-image_1541962.jpg'
		},
		{
			id: 5,
			title: 'Elena masto',
			date: '2020-10-02 10:20:10',
			subTitle: 'Como estas?, estas bien?',
			image:
				'https://png.pngtree.com/png-vector/20190710/ourlarge/pngtree-user-vector-avatar-png-image_1541962.jpg'
		},
		{
			id: 6,
			title: 'Tere tortura',
			date: '2020-10-02 10:20:10',
			subTitle: 'Como estas?, estas bien?',
			image:
				'https://png.pngtree.com/png-vector/20190710/ourlarge/pngtree-user-vector-avatar-png-image_1541962.jpg'
		}
	];
	let active = null;
</script>

<div class="m-10">
	<CardChat {active} {contacts} on:selected={({ detail }) => (active = detail.id)} />
</div>

<style lang="scss" global>
	@import '../lib/style.scss';
</style>
