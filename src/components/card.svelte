<script>
	import Button from './button.svelte';
	import { advice, updateAdvice } from '../stores/advice.js';
	import { onMount } from 'svelte';
	import { getAdviceById } from '../lib/utils.js';

	onMount(async function () {
		let request = await getAdviceById(71);
		updateAdvice(request);
	});
</script>

<div class="flex h-screen">
	<div
		class="relative mx-auto mt-[14em] bg-secondary-gray-blue rounded-2xl text-center space-y-6 pt-12 px-8 w-[345px] max-h-[320px] desktop:px-[4rem] desktop:w-[540px] desktop:max-h-[335px]"
	>
		<header>
			<h1 class="text-primary-green font-medium text-sm desktop:font-semibold tracking-wide-xl ">
				ADVICE #{$advice.slip.id}
			</h1>
		</header>
		<main class="flex flex-col space-y-6">
			<p class="text-primary-cyan font-bold text-[1.4rem] desktop:text-[1.65rem]">
				"{$advice.slip.advice}"
			</p>
			<div class="flex justify-center">
				<img
					class="desktop:hidden"
					src="/images/pattern-divider-mobile.svg"
					alt="divider"
					width="295"
					height="16"
				/>
				<img
					class="hidden desktop:block"
					src="/images/pattern-divider-desktop.svg"
					alt="divider"
					width="444"
					height="16"
				/>
			</div>
			<div class="absolute inset-x-0 -bottom-8">
				<Button />
			</div>
		</main>
	</div>
</div>
