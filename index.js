// Code your solution in this file!
const returnFirstTwoDrivers = function(drivers) {

    return drivers.slice(0, 2);
}

const returnLastTwoDrivers = function(drivers) {
    return drivers.slice(-2);
}

const selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers];

function createFareMultiplier(multiplier) {
    return function fareMultiplier(fare) {
        //let fare



        return fare * multiplier //does the fare raised to the power of the multiplier

    }
}

const toBeReturned = function() {

}