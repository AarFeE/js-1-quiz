let budget = 2500000
alert("Welcome to your Trip Planner, Hildebrando!")


// CASE 1

let eat = whilePrompt("Insert the number corresponding your breakfast selection:\n\n" +
    "1. Almojabana (it's been in the stand for a while) with soda: $15000\n" +
    "2. Subway with soda: $23000\n" +
    "3. Don't eat breakfast yet", (value) => 0 < eat < 4)

console.log(eat == "1")
if (eat == "1") {
    budget -= 15000
    alert("Hildebrando ate the almojabana with soda; he had to run to the closest bathroom not long after.")
} else if (eat == "2") {
    budget -= 23000
    alert("Hildebrando ate the Subway with soda; it was good.")
} else if (eat == "3") {
    alert("Hildebrando decided to not eat breakfast yet, he'll wait until he arrives in Medellin")
} else {
    alert("Please, insert a valid option!")
}


// CASE 2


class Bag {
    constructor(dimensions) {
        this.dimensions = dimensions

        this.getDimensions = function () {
            return this.dimensions
        }

        this.setDimensions = function (newDimensions) {
            this.dimensions = newDimensions
        }

        this.reduceDimensions = function () {
            let tempDimensions = this.getDimensions().map((value) => value)

            tempDimensions[0] = 55 / tempDimensions[0]
            tempDimensions[1] = 40 / tempDimensions[0]
            tempDimensions[2] = 20 / tempDimensions[0]
            let reductFactor = Math.min(...tempDimensions)

            this.setDimensions(this.getDimensions().map((value) => (value * reductFactor).toFixed(2)))
        }
    }
}

let hilBag = new Bag([60, 40, 20])

if (hilBag.getDimensions()[0] >= 55 || hilBag.getDimensions()[1] >= 40 || hilBag.getDimensions()[2] >= 20) {
    hilBag.reduceDimensions()
    alert("Hildebrando's bag was too big, so we reduced its size:\n\n" +
        `New Height: ${hilBag.getDimensions()[0]}\n` +
        `New Width: ${hilBag.getDimensions()[1]}\n` +
        `New Depth: ${hilBag.getDimensions()[2]}\n`)
}


// CASE 3


alert("Hildebrando found the airport's wifi password: 01110010_01101001_01110111_01101001")

const binCode = "01110010_01101001_01110111_01101001".split("_")
let charCode = binCode.map((value) => String.fromCharCode(parseInt(value, 2))).join("")

alert(`The decoded password is: ${charCode}`)


// FUNCTIONS


function whilePrompt(msg, cond) {
    let theValue = prompt(msg)

    if (cond) {
        return theValue
    } else {
        alert("Please, insert a valid option!")
    }
}