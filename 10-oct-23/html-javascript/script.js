const first = document.getElementById('num');

const namta = 2;
for(let i = 0; i <= 10; i++){
    first.innerHTML += namta + 'X' + i + ' = ' + namta * i + '<br>'
}