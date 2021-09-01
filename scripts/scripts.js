const sliderInput = document.getElementById("slider")


sliderInput.addEventListener('input', handleInputChange)




function handleInputChange(e) {
	// console.log(e.target.value)
	let target = e.target
	if (e.target.type !== 'range') {
		target = document.getElementById('range')
	}
	const min = target.min
	const max = target.max
	const val = target.value

	target.style.backgroundSize = (val - min) * 100 / (max - min) + '% 100%'
}

