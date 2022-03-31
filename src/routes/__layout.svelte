<script>
	import '../app.css';
</script>

<svelte:head>
	<link rel="preconnect" href="https://fonts.googleapis.com" />
	<link rel="preconnect" href="https://fonts.gstatic.com" />
	<link
		href="https://fonts.googleapis.com/css2?family=Manrope:wght@200;300;400;500;600;700;800&display=swap"
		rel="stylesheet"
	/>

	<meta name="description" content="Frontend Mentor | Advice Generator App" />
	<meta name="theme-color" content="#53FFAB" />

	<title>Frontend Mentor | Advice Generator App</title>
</svelte:head>

<div class="h-screen bg-secondary-dark-blue">
	<slot />
</div>
