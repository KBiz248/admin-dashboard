const cards = document.getElementsByClassName('card');

console.log(cards);

for(let i = 0; i < cards.length; i++){
    cards[i].classList.add('card'+i);
    const children = cards[i].children;
    children[0].style.gridArea = '1 / 1 / 2 / -1'
    children[1].style.gridArea = '2 / 1 / 3 / -1';
    children[2].style.gridColumn = '2 / 3';
    children[3].style.gridColumn = '3 / 4';
    children[4].style.gridColumn = '4 / 5';
}

