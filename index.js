let budget = 2500000
let expenses = 0
alert("Welcome to your Trip Manager, Hildebrando!")


// 1st CASE


let eat = whilePrompt("Insert the number corresponding your breakfast selection:\n\n" +
    "1. Almojabana (it's been in the stand for a while) with soda: $15000\n" +
    "2. Subway with soda: $23000\n" +
    "3. Don't eat breakfast yet", (check) => check = 0 < check && check < 4 && !isNaN(Number(check)))

if (eat == "1") {
    alert("Hildebrando ate the almojabana with soda; he had to run to the closest bathroom not long after.")
    newBudget(15000)
} else if (eat == "2") {
    alert("Hildebrando ate the Subway with soda; it was good.")
    newBudget(23000)
} else {
    alert("Hildebrando decided to not eat breakfast yet, he'll wait until he arrives in Medellin")
}


// 2nd CASE


class Bag {
    constructor(dimensions) {
        this.dimensions = dimensions
    }

    getDimensions() {
        return this.dimensions
    }

    setDimensions(newDimensions) {
        this.dimensions = newDimensions
    }

    reduceDimensions() {
        let tempDimensions = this.getDimensions().map((value) => value)

        tempDimensions[0] = 55 / tempDimensions[0]
        tempDimensions[1] = 40 / tempDimensions[0]
        tempDimensions[2] = 20 / tempDimensions[0]
        let reductFactor = Math.min(...tempDimensions)

        this.setDimensions(this.getDimensions().map((value) => (value * reductFactor).toFixed(2)))
    }
}

let hilBag = new Bag([60, 40, 20])

if (hilBag.getDimensions()[0] >= 55 || hilBag.getDimensions()[1] >= 40 || hilBag.getDimensions()[2] >= 20) {
    hilBag.reduceDimensions()
    alert("Hildebrando's bag was too big, so they reduced its size at the airport:\n\n" +
        `New Height: ${hilBag.getDimensions()[0]}\n` +
        `New Width: ${hilBag.getDimensions()[1]}\n` +
        `New Depth: ${hilBag.getDimensions()[2]}\n`)
}


// 3rd CASE


let encPass = "01110010_01101001_01110111_01101001"

alert("*Hildebrando arrived in Medellin! His mobile data is failing though, so he needs to find the airport's wifi password*")
alert(`Hildebrando found the airport's wifi password: ${encPass}`)

const binCode = `${encPass}`.split("_")
let charCode = binCode.map((value) => String.fromCharCode(parseInt(value, 2))).join("")

alert(`The decoded password is: ${charCode}`)
newBudget(50000)


// 4th CASE


const regexUpper = /[AEIOU]/gi
const regexLower = /[aeiou]/gi

alert("*Hildebrando finally arrived in Macondo! He quickly noticed everyone uses a single vowel, the 'i' so he adjusted his speaking*")

let sentence = "'Taxi me puede llevar al hotel mariposas amarillas'"
sentence = sentence.replaceAll(regexUpper, 'I').replaceAll(regexLower, 'i')

alert(sentence + " said Hildebrando; he got the hang of it very easily")


// 5th CASE


alert("*When they got to the hotel, the taxi driver tried to make Hilberto pay him $300000," +
    "but he negotiated the payment to only be done if he loses against the taxi driver in a rock paper scissors game*")

let rpsArr = ['ROCK', 'PAPER', 'SCISSORS']
let rpsTaxi = rpsArr[Math.floor(Math.random() * rpsArr.length)]

let rpsHil = whilePrompt("Write your rock, paper, scissors selection:\n\n" +
    "*Rock\n" +
    "*Paper\n" +
    "*Scissors", (rps) => typeof rps === 'string' && (rps.toUpperCase() == 'ROCK' || rps.toUpperCase() == 'PAPER' || rps.toUpperCase() == 'SCISSORS')).toUpperCase()

alert(`Hilberto's Selection: ${rpsHil}\nTaxi Driver's Selection: ${rpsTaxi}`)
if (rpsTaxi == rpsHil) {
    alert("It's a Draw, nothing happened.")
}
else if ((rpsTaxi == "ROCK" && rpsHil == "PAPER") || (rpsTaxi == "PAPER" && rpsHil == "SCISSORS") || (rpsTaxi == "SCISSORS" && rpsHil == "ROCK")) {
    alert("Hilberto won so he didn't have to pay!")
} else {
    alert("The taxi driver won and Hilberto got scammed $300000")
    newBudget(300000)
}


// 6th CASE


alert("*Upon arriving to the hotel, Hilberto noticed that each activity in it involves certain color of clothing*")

let i = 1
let alive = true
while (i < 5) {
    let hotelAct = whilePrompt(`Write the color of the desired activity you wanna do today (day ${i}/4):\n\n` +
        "*Yellow: Visit the pool\n" +
        "*Green: Go on a walk\n" +
        "*Red: Visit the beach\n" +
        "*Blue: Inside-the-Hotel Activities", (rps) => typeof rps === 'string' && (rps.toUpperCase() == 'YELLOW' || rps.toUpperCase() == 'GREEN' || rps.toUpperCase() == 'RED' || rps.toUpperCase() == 'BLUE')).toUpperCase()

    let actOption

    if (hotelAct == "YELLOW") {
        alert("*Hilberto went to the pool, it has an odd smell but he didn't mind it too much*")
        actOption = confirm("Press 'Ok' if you want to swim in the pool, or 'Cancel' if you just want to sunbathe")
        if (actOption) {
            alert("*Hilberto got in the pool, but sooner than later he begins feeling out of breath and fainting. The pool had too much chlorine and Hilberto died of intoxication.*")
            alive = false
            break
        } else {
            alert("*Hilberto spent the day sunbathing by the pool*")
        }
    }

    else if (hotelAct == "GREEN") {
        alert("*Hilberto went on a walk in the nature, but he's already a bit tired and wants to come back*")
        actOption = confirm("Press 'Ok' if you want to go back, or 'Cancel' if you want to finish the walk")
        if (actOption) {
            alert("*Hilberto decided he was too tired to continue, so he tried to traceback his steps but ended up lost for a couple hours*")
        } else {
            alert("*Hilberto got to a beautiful waterfall and took some pictures*")
        }
    }

    else if (hotelAct == "RED") {
        alert("*Hilberto went to the beach, and he's wondering if he should play volleyball, swim in the ocean or go drink some cocktails*")
        actOption = whilePrompt("Insert the number corresponding Hilberto's choice:\n\n" +
            "1. Play Volleyball\n" +
            "2. Swim in the Ocean\n" +
            "3. Drink Cocktails", (check) => check = 0 < check && check < 4 && !isNaN(Number(check)))
        if (actOption == "1") {
            alert("*Hilberto chose to play Volleyball and he had a great time*")
        }
        else if (actOption == "2") {
            alert("*Hilberto swam in the ocean and also got to drive a jet ski!*")
        }
        else {
            alert("*Hildebrando spent the day drinking cocktails. After some time he began feeling sick and his vision got blurry; the alcohol was adultered and Hilberto had to cancel his trip.*")
            break
        }
    }

    else if (hotelAct == "BLUE") {
        alert("*Hilberto's gonna stay in the hotel today*")
        actOption = whilePrompt("Insert the number corresponding Hilberto's choice:\n\n" +
            "1. Play Bingo\n" +
            "2. Release the forbidden steps in the dance floor\n" +
            "3. Gamble in the Casino", (check) => check = 0 < check && check < 4 && !isNaN(Number(check)))
        if (actOption == "1") {
            alert("*Hilberto felt like playing Bingo today, and he won $50000*")
            budget += 50000
            alert(`New Budget: $${budget}`)
        }
        else if (actOption == "2") {
            alert("*Hilberto felt like dancing today, and he had a great time*")
        }
        else {
            alert("*Hilberto felt like losing his money, so he gambled in the casino and lost all of it except for the needed to buy a plane ticket back to his city*")
            if (budget > 150000) {
                newBudget(budget - 150000)
            }
            break
        }
    }

    i++
}


// THE END


alert(`Trip Summary\n\nDays in Macondo: ${i}\nWas Hilberto able to comeback or did he die?: ${alive ? "He lived" : "He died"}\nTotal Expenses: $${expenses}\n\nThe End.`)


// FUNCTIONS


function whilePrompt(msg, cond) {
    let theValue
    while (true) {
        theValue = prompt(msg)
        if (cond(theValue)) {
            break
        } else {
            alert("Please, insert a valid option!")
        }
    }
    return theValue
}

function newBudget(expense) {
    budget -= expense
    expenses += expense
    alert(`New Budget: $${budget}`)
}