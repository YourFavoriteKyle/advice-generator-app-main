<script>
	import { getAdvice } from '../lib/utils.js';
	import { updateAdvice } from '../stores/advice.js';

	async function fetchAdvice() {
		let request = await getAdvice();
		updateAdvice(request);
	}
</script>

<button on:click={fetchAdvice} class="rounded-full bg-primary-green h-fit p-5 hover:shadow-glow">
	<img src="/images/icon-dice.svg" alt="dice icon" width="24" height="24" />
</button>
