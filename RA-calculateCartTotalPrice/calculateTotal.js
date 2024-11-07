function calculateTotal(card) {
    let totalPrice = 0;

    
    for (let i = 0; i < card.length; i++) {
        totalPrice += card[i].price;
    }
    return totalPrice;
}

const card = [
    { name: 'khata', price: 20 },
    { name: 'pen', price: 20 },
    { name: 'boi', price: 120 },
    { name: 'bag', price: 380 }
];


const totalPrice = calculateTotal(card);
console.log(totalPrice); 
