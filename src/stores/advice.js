import { writable } from 'svelte/store';

export const advice = writable({ slip: { id: 0, advice: '' } });

export function updateAdvice(newAdvice) {
	advice.update((cur) => {
		return newAdvice;
	});
}
