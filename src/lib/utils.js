export async function getAdvice() {
	let response = await fetch('https://api.adviceslip.com/advice');
	let data = await response.json();
	return data;
}

export async function getAdviceById(id) {
	let response = await fetch(`https://api.adviceslip.com/advice/${id}`);
	let data = await response.json();
	return data;
}
