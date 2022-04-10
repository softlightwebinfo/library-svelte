<script>
	import FullPage from '$lib/components/FullPage.svelte';
	import LoginForm from '$lib/components/LoginForm.svelte';
	import Sidebar from '$lib/components/Sidebar.svelte';
	import SubTitleHeading from '$lib/components/SubTitleHeading.svelte';
	import Title from '$lib/components/Title.svelte';
	import TitleHeading from '$lib/components/TitleHeading.svelte';
</script>

<FullPage>
	<div slot="content" class="p-10 flex flex-column mt-auto text-center">
		<TitleHeading>5k+ Satisfied clients</TitleHeading>
		<p>
			"Fantastic theme with a ton of options. If you just want the HTML to integrate with your
			project, then this is the package. You can find the files in the 'dist‘ folder...no need to
			install git and all the other stuff the documentation talks about. “
		</p>
	</div>
	<Sidebar slot="sidebar">
		<img
			style="width:200px;height: 200px;margin-left: auto;margin-right: auto;"
			src="https://www.codeunic.com/images/logo.png"
			alt=""
		/>
		<TitleHeading>Welcome Back !</TitleHeading>
		<SubTitleHeading>Sign in to continue to Codeunic.</SubTitleHeading>
		<LoginForm
			placeholderUser="Escribe tu correo electronico"
			placeholderPassword="Escribe tu contraseña"
		/>
		<span class="mt-3 text-center "> Don't have an account ? Signup now </span>
		<span class="text-center" style="margin-top:auto;"
			>© 2022 Codeunic. Crafted with by Codeunic</span
		>
	</Sidebar>
</FullPage>

<style lang="scss" global>
	@import '../lib/style.scss';
</style>
