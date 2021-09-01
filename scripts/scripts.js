const sliderInput = document.getElementById("slider")
const pageViewOutput = document.getElementById("pageviews")
const rateInput = document.getElementById("switch")
const ratePriceOutput = document.getElementById("ratePrice")
const rateCycleOutput = document.getElementById("rateCycle")

sliderInput.addEventListener('input', handleInputChange)
rateInput.addEventListener('input', handleRate)

let value = 100
let yearlyBilling = false
function handleInputChange(e) {
	console.log(e.target.value)
	let target = e.target
	const min = target.min
	const max = target.max
	const val = target.value

	target.style.backgroundSize = (val - min) * 100 / (max - min) + '% 100%'

	if (e.target.value === '0') {
		value = 10
		pageViewOutput.innerText = "10k PAGEVIEWS"
	} else if (e.target.value === '25') {
		value = 50
		pageViewOutput.innerText = "50k PAGEVIEWS"
	} else if (e.target.value === '50') {
		value = 100
		pageViewOutput.innerText = "100k PAGEVIEWS"
	} else if (e.target.value === '75') {
		value = 500
		pageViewOutput.innerText = "500k PAGEVIEWS"
	} else if (e.target.value === '100') {
		value = 1
		pageViewOutput.innerText = "1M PAGEVIEWS"
	}
	handleRateRender()
}

function handleRate(e) {
	console.log(e.target.checked)
	yearlyBilling = e.target.checked
	handleRateRender()
}


function handleRateRender(){
	let ratePrice
	if (yearlyBilling === true) {
		if (value === 10) {
			ratePrice = 8 - (8 * 0.25)
		} else if (value === 50) {
			ratePrice = 12 - (12 * 0.25)
		}
		else if (value === 100) {
			ratePrice = 16 - (16 * 0.25)
		}
		else if (value === 500) {
			ratePrice = 24 - (24 * 0.25)
		}
		else if (value === 1) {
			ratePrice = 36 - (36 * 0.25)
		}
	} else {
		if (value === 10) {
			ratePrice = 8
		} else if (value === 50) {
			ratePrice = 12
		} else if (value === 100) {
			ratePrice = 16
		} else if (value === 500) {
			ratePrice = 24
		} else if (value === 1) {
			ratePrice = 36
		}
	}
	ratePriceOutput.innerText = "$" + ratePrice.toFixed(2)
}

