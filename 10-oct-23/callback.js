const myFunction = (num1, num2,calBc) => {
    const sum = num1 + num2;
    calBc(sum)
}

const calBc = (sum) => {
    console.log('my result:', sum);
}

myFunction(4,6,calBc);

