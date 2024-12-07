const cards = document.getElementsByClassName('card');

console.log(cards);

for(let i = 0; i < cards.length; i++){
    cards[i].classList.add('card'+i);
    let title = cards[i].children[0];
    title.style.gridArea = '1 / 1 / 2 / -1'
    const children = cards[i].children;
    children[1].style.gridArea = '2 / 1 / 3 / -1';
    children[2].style.gridColumn = '2 / 3';
    children[3].style.gridColumn = '3 / 4';
    children[4].style.gridColumn = '4 / 5';
    //const children = cards[i].children;
    //children[0].style.gridArea = 'title'+i;
    //children[0].style.gridArea = 'title'+i;
   // cards[i].children[0].style = 'grid-area: title'+i;
}

