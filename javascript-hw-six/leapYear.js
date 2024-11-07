function leapYear(year){
    const remainder = year % 4;
    if (remainder === 0){
        return true;
    }
    else {
        return false;
    }

}

const myLeap = leapYear(2048);
console.log(myLeap);
const myNoLeap = leapYear(2050);
console.log(myNoLeap);

