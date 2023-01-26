//--------------------Problem:1  radianToDegree -----------------------

function radianToDegree(radian) {

    if (typeof radian !== 'number') {
        return 'Please Provide a number'
    }
    else {
        const degree = radian * (180 / Math.PI)
        const fixedDegree = parseFloat(degree.toFixed(2))
        return fixedDegree
    }
}

// console.log('the Degree Value is :', radianToDegree(5));

// ----------------------- Problem:2  isJavaScriptFile -------------------------

function isJavaScriptFile(file) {
    if (typeof file !== 'string') {
        return 'Provide String as an input'
    }
    else {
        return file.endsWith('.js')
    }
}

// console.log('Check Js File: ', isJavaScriptFile('index.js'));

// --------------------------------- Problem 3: oilPrice ---------------------------------

function oilPrice(diselQuantity, petrolQuantity, octanQuantity) {
    if (typeof diselQuantity !== 'number' || typeof petrolQuantity !== 'number' || typeof octanQuantity !== 'number') {
        return 'Enter a Number Please'
    }
    else {
        const diselRatePerlitre = 114;
        const petrolRatePerlitre = 130;
        const octanRatePerlitre = 135;

        const totalDiselPrice = diselQuantity * diselRatePerlitre;
        const totalPetrolPrice = petrolQuantity * petrolRatePerlitre;
        const totalOctanPrice = octanQuantity * octanRatePerlitre;

        return totalDiselPrice + totalPetrolPrice + totalOctanPrice;
    }
}

// console.log('oil Price: ', oilPrice(1, 0, 2));

//--------------------------- Problem 4: publicBusFare --------------------------------

function publicBusFare(persons) {
    if (typeof persons !== 'number') {
        return 'Please enter a number'
    }
    else {
        const publicBusFarePerHead = 250
        const busCapacity = 50;
        const microCapacity = 11;
        const restPersonsAfterBus = persons % busCapacity;
        const restPersonsAfterMicro = restPersonsAfterBus % microCapacity;
        const totalCost = restPersonsAfterMicro * publicBusFarePerHead;
        return totalCost
    }
}

// console.log('Public Bus Cost:', publicBusFare(256));

// ------------------------------- Problem 5: isBestFriend ---------------------------------

function isBestFriend(firstFrnd, secondFrnd) {

    if ((typeof firstFrnd !== 'object' || Array.isArray(firstFrnd) === true) || (typeof secondFrnd !== 'object' || Array.isArray(secondFrnd) == true )) {
        return 'Enter an object as an input'
    }
    else if (firstFrnd.name.toLowerCase() === secondFrnd.friend.toLowerCase() && secondFrnd.name.toLowerCase() === firstFrnd.friend.toLowerCase()) {
        return true
    }
    else {
        return false
    }
}

// const friend1 = { name: 'Abul', friend: 'babul' }
// const friend2 = { name: 'babul', friend: 'abul' }

// console.log('Is two are best friends:',isBestFriend( friend1 , friend2));

