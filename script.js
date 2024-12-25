const cards = document.getElementsByClassName('card');

console.log(cards);

const color = getComputedStyle(document.documentElement).getPropertyValue('--shadow-color');

console.log(color);

for(let i = 0; i < cards.length; i++){
    const children = cards[i].children;
    children[0].style.gridArea = '1 / 1 / 2 / -1'
    children[1].style.gridArea = '2 / 1 / 3 / -1';
    children[1].style.color = color;
    children[2].style.gridColumn = '2 / 3';
    children[3].style.gridColumn = '3 / 4';
    children[4].style.gridColumn = '4 / 5';
}

const trending = document.getElementById('trending-card').children;

console.log(trending);

for (let i = 0; i < trending.length; i++){
    trending[i].children[0].style.gridArea = '1 / 1 / 3 / 2';
    trending[i].children[0].style.height = '50px';
    trending[i].children[0].style.borderRadius = '50%';
    trending[i].children[0].style.marginRight = '16px';
    trending[i].children[1].style.gridArea = '1 / 2 / 2 / 3';
    trending[i].children[2].style.gridArea = '2 / 2 / 3 / 3';
}

