let carts = document.querySelectorAll('.add-to-cart');

let products = [
    {
        name: 'Club de Campo Tumbes',
        tag: 'Tumbes',
        price: 11.990,
        inCart: 0
    },
    {
        name: 'Club de Golf El Alba',
        tag: 'Alba',
        price: 11.990,
        inCart: 0
    },
    {
        name: 'Club de Campo Bellavista',
        tag: 'Bellavista',
        price: 11.990,
        inCart: 0
    },
    {
        name: 'Club de Golf La Posada',
        tag: 'Posada',
        price: 11.990,
        inCart: 0
    }
];

for (let i=0; i < carts.length; i++) {
    carts [i].addEventListener( 'click', () =>{
        cartNumbers();
    })
}

function onLoadCartNumber (){
    let productNumbers = localStorage.getItem('cartNumbers');
    if (productNumbers){
        document.querySelector('#top-cart span').textContent = productNumbers;
    }
}
function cartNumbers() {
    let productNumbers = localStorage.getItem('cartNumbers');

    productNumbers = parseInt(productNumbers);

    if (productNumbers) {
        localStorage.setItem('cartNumbers',productNumbers + 1);
        document.querySelector('#top-cart span').textContent = productNumbers + 1;
    }
    else {
        localStorage.setItem('cartNumbers', 1);
        document.querySelector('#top-cart span').textContent = 1;
    }
}

onLoadCartNumber();
