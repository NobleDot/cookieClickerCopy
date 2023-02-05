
// My plan is to create parallel arrays of new producer attributes and use a function to spawn
// them in.

// So, basically every item in the "0" index relates to the first producer's attributes like it's name and rate and cost,
// every item in the "1" index relates to the second producer's attributes, etc...
let producerNames = ["Cute Arduino Robot Helper!", "Advanced Arduino Robot!", "Sentient Arduino Robot!", "Robot-manned Factory!"]
let producerRates = [1, 2, 5, 10]
let producerCosts = [15, 50, 100, 500]
let producerQuantities = [0, 0, 0, 0]
let buyButtonId = ["buy_helper", "buy_robot", "buy_sentient_robot", "buy_factory"]
let totalClicks = 0;


/// Idk i'm throwing shit at the wall at this point.
cuteBuy = undefined;


// Targeting the count of cookies.
let cookieCount = document.getElementsByClassName("cookie-count")[0];

// Targeting the image of the arduino as my cookie.
let arduninoElement = document.getElementById("arduinoPng");

// Adding the event listener for the Arduino.
arduninoElement.addEventListener("click", increaseCount);

// Function to increase the quantity of producers 
function increaseProducerQuantity(quantityIndex) {
    console.log("Increasing producer quantity...")
    let quantityVal = document.getElementsByClassName("producer-quantity-value")[quantityIndex]
    console.log("Quantity val is: " + quantityVal.textContent)
    quantityVal.textContent = quantityVal.textContent + 1
}
// callback function that increases the count of arduino's after clicking the image
function increaseCount() {
    console.log("increaseCount was invoked!");
    // console.log(cookieCount.textContent);
    totalClicks = totalClicks + 1;
    cookieCount.textContent = totalClicks;
    // console.log(cookieCount.textContent);
    if (totalClicks == 5) {
        // Create the new producer, appending it to the producer's section.
        newProducerUnlocked(producerNames[0], producerRates[0], producerCosts[0])
        // Add an event listener to it's buy button.
        const cuteBuy = document.getElementsByClassName("buy-button")[0]
        // Associate a click with an increase in the element's quantity value
        cuteBuy.addEventListener("click", increaseProducerQuantity(0))
        // console.log(cuteBuy)
    }

    // I need to fix these laters. After I figure out how to mess with the first producer correctly,
    // I'll pass over the technique to the others.
    else  if (totalClicks == 25) {
        newProducerUnlocked(producerNames[1], producerRates[1], producerCosts[1])
    } else if (totalClicks == 50) {
        newProducerUnlocked(producerNames[2], producerRates[2], producerCosts[2])
    } else if (totalClicks == 100) {
        newProducerUnlocked(producerNames[3], producerRates[3], producerCosts[3])
        // let buyElement4 = document.getElementsByClassName("buy-button")[3]
    }
}
// This function takes in arguments to define the attributes on new producers, like title and cost.
function newProducerUnlocked (producerTitle, producerRateValue, producerCost) {
    // Target the cookie-ranks section to add new producers to.
    let producerSection = document.getElementsByClassName("cookie-ranks")[0]
    // console.log(producerSection)

    // Create the new producer element
    let newProducer = document.createElement("div")
    newProducer.className = "producer"

    // Create its left column subsection.....
    let newLeftColumn = document.createElement("section")
    newLeftColumn.className = "producer-left-column"
    
    // Create the producer title section and add it to the left column subsection.
    let newProducerTitle = document.createElement("div")
    newProducerTitle.className = "producer-title"
    newProducerTitle.textContent = producerTitle
    newLeftColumn.appendChild(newProducerTitle)

    // Create the buy button and add it to the left column subsection
    let newProducerBuyButton = document.createElement("button")
    newProducerBuyButton.type = "button"
    newProducerBuyButton.className = "buy-button"
    newProducerBuyButton.textContent = "Buy"
    newLeftColumn.appendChild(newProducerBuyButton)

    // Add the new left column onto the new producer.
    newProducer.appendChild(newLeftColumn)

    // Now create it's right column subsection.....
    let newRightColumn = document.createElement("section")
    newRightColumn.className = "producer-right-column"

    // Create its producer-quantity section
    let newProducerQuantity = document.createElement("div")
    newProducerQuantity.className = "producer-quantity"
    newProducerQuantity.textContent = "Quantity: "

    // Create the element holding the dynamic quantity value and add it to the producer-quantity section
    let newProducerQuantityValue = document.createElement("span")
    newProducerQuantityValue.className = "producer-quantity-value"
    newProducerQuantityValue.textContent = 0
    newProducerQuantity.appendChild(newProducerQuantityValue)

    // Add the new Producer Quantity section to the right column.
    newRightColumn.appendChild(newProducerQuantity)

    // Create the new production rate section for the right column
    let newProducerRate = document.createElement("div")
    newProducerRate.className = "producer-rate"
    newProducerRate.textContent = "Arduino/second: "

    // Create the element holding the producer rate value and add it to the producer rate section
    let newProducerRateValue = document.createElement("span")
    newProducerRateValue.className = "producer-rate-value"
    newProducerRateValue.textContent = producerRateValue
    newProducerRate.appendChild(newProducerRateValue)

    // Add the new Producer Rate section to the right column
    newRightColumn.appendChild(newProducerRate)

    // Create the new cost section for the right column
    let newProducerCost = document.createElement("div")
    newProducerCost.className = "producer-cost"
    newProducerCost.textContent = "Cost: "

    // Create the element holidng the latest cost value and add it to the producer cost
    let newProducerCostValue = document.createElement("span")
    newProducerCostValue.className = "producer-cost-value"
    newProducerCostValue.textContent = producerCost

    // Add the producer cost value to the producer cost section.
    newProducerCost.appendChild(newProducerCostValue)

    // Add the producer cost section to the right column.
    newRightColumn.appendChild(newProducerCost)

    // Add the right column to the new producer element.
    newProducer.appendChild(newRightColumn)

    // Finally, add the new producer unlocked to the ranks-section column
    producerSection.appendChild(newProducer)
}

// Adding the passive-income generator part.
let intervalTimerId = undefined;
let numOfAutoGeneratedCookies = 1;

function addArduinosOverTime() {
    cookieCount.textContent = cookieCount.textContent + numOfAutoGeneratedCookies;
}

function intervalCallbackFunc() {
    intervalTimerId = setInterval(addArduinosOverTime, 1000)
}

if (cuteBuy) {
    cutBuy.addEventListener("click", intervalCallbackFunc)
}