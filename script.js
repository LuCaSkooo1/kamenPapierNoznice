const objectCounter = {
	papier: 0,
	kamen: 0,
	noznice: 0,
}
//Funkcia samotnej hry
function startGame() {
	let selectedObject = ""
	let numberGen = Math.floor(Math.random() * 3)
	let enemySelection = ""
	let playerScoreValue = parseInt(
		document.getElementById("playerScoreValue").innerHTML
	)
	let botScoreValue = parseInt(
		document.getElementById("botScoreValue").innerHTML
	)
	let result = ""

	alert("Hra začala!")

	console.log(numberGen)
	selectedObject = prompt(
		"Napíšte K pre kameň, P pre papier alebo N pre nožnice"
	)

	if (numberGen == 0) {
		enemySelection = "kameň"
		objectCounter.kamen++

		if (selectedObject === "N" || selectedObject === "n") {
			objectCounter.noznice++
			result = "Prehral si!"
			alert(`Počítač zvolil ${enemySelection}, ${result}`)
			botScoreValue++
		} else if (selectedObject === "P" || selectedObject === "p") {
			objectCounter.papier++
			result = "Vyhral si!"
			alert(`Počítač zvolil ${enemySelection}, ${result}`)
			playerScoreValue++
		} else if (selectedObject === "K" || selectedObject === "k") {
			objectCounter.kamen++
			result = "Remíza!"
			alert(`Počítač zvolil ${enemySelection}, ${result}`)
		} else {
			alert("Nenapísali ste korektný objekt")
		}
	}
	if (numberGen == 1) {
		enemySelection = "papier"
		objectCounter.papier++

		if (selectedObject == "N" || selectedObject === "n") {
			objectCounter.noznice++
			result = "Vyhral si!"
			alert(`Počítač zvolil ${enemySelection}, ${result}`)
			playerScoreValue++
		} else if (selectedObject == "P" || selectedObject === "p") {
			objectCounter.papier++
			result = "Remíza!"
			alert(`Počítač zvolil ${enemySelection}, ${result}`)
		} else if (selectedObject == "K" || selectedObject === "k") {
			objectCounter.kamen++
			result = "Prehral si!"
			alert(`Počítač zvolil ${enemySelection}, ${result}`)
			botScoreValue++
		} else {
			alert("Nenapísali ste korektný objekt")
		}
	}
	if (numberGen == 2) {
		enemySelection = "nožnice"
		objectCounter.noznice++

		if (selectedObject == "N" || selectedObject === "n") {
			objectCounter.noznice++
			result = "Remíza!"
			alert(`Počítač zvolil ${enemySelection}, ${result}`)
		} else if (selectedObject == "P" || selectedObject === "p") {
			objectCounter.papier++
			result = "Prehral si!"
			alert(`Počítač zvolil ${enemySelection}, ${result}`)
			botScoreValue++
		} else if (selectedObject == "K" || selectedObject === "k") {
			objectCounter.kamen++
			result = "Vyhral si!"
			alert(`Počítač zvolil ${enemySelection}, ${result}`)
			playerScoreValue++
		} else {
			alert("Nenapísali ste korektný objekt")
		}
	}
	let prevLap = [enemySelection, selectedObject, result]

	console.log(prevLap)
	console.log(objectCounter)

	document.getElementById("playerScoreValue").innerHTML = playerScoreValue
	document.getElementById("botScoreValue").innerHTML = botScoreValue

	console.log(selectedObject)
}
