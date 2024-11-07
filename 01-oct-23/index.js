let numbers = 7;
while(numbers <= 100){
    if(numbers % 7 === 3 ){
        // console.log(numbers);
    }
    numbers++;
}



for (let i = 0; i <= 100; i++) {
    if (i % 7 == 3 && i > 7) {
        // console.log(i);
    }
}


const n = 2;
for (let i = 1; i <= 10; i++){
    // console.log(n + "X" + i + "=" + n*i);
}

let sname = 'I am a dipti student';

function student () {
    if(sname){
        console.log(sname);
    }
    else{
        console.log('Your are not student in dipti');
    }
}

// student();


switch (new Date().getDay()) {
    case 0:
      day = "Sunday";
      break;
    case 1:
      day = "Monday";
      break;
    case 2:
       day = "Tuesday";
      break;
    case 3:
      day = "Wednesday";
      break;
    case 4:
      day = "Thursday";
      break;
    case 5:
      day = "Friday";
      break;
    case 6:
      day = "Saturday";
  }

  console.log(new Date().getDay());