let carts = document.querySelectorAll('.add-to-cart');

let products = [
    {
        name: 'Club de Campo Tumbes',
        tag: 'Tumbes',
        price: 11990,
        inCart: 0
    },
    {
        name: 'Club de Golf El Alba',
        tag: 'Alba',
        price: 11990,
        inCart: 0
    },
    {
        name: 'Club de Campo Bellavista',
        tag: 'Bellavista',
        price: 11990,
        inCart: 0
    },
    {
        name: 'Club de Golf La Posada',
        tag: 'Posada',
        price: 11990,
        inCart: 0
    }
];



for (let i=0; i < carts.length; i++) {
    carts [i].addEventListener( 'click', () =>{
        cartNumbers(products[i]);
        totalCost(products[i])
    })
}


function onLoadCartNumber (){
    let productNumbers = localStorage.getItem('cartNumbers');
    if (productNumbers){
        document.querySelector('#top-cart span').textContent = productNumbers;
    }
}
function cartNumbers(product) {
   
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

    setItem(product);

}

function setItem(product) {
   let cartItems = localStorage.getItem('productsInCart');
   cartItems = JSON.parse(cartItems);
   
  if(cartItems !=null) {

    if(cartItems[product.tag] == undefined ) {
      cartItems = {
          ...cartItems,
          [product.tag]: product
      }      
    }
      cartItems[product.tag].inCart += 1;
  } else {
   product.inCart = 1;
   cartItems = {
        [product.tag]: product
      } 
    }

  localStorage.setItem("productsInCart", JSON.stringify(cartItems));

}

function totalCost(product) {
    //console.log("the product price is", product.price);
    let cartCost = localStorage.getItem ('totalCost');
   
    console.log("My cartCost is", cartCost);
    console.log(typeof cartCost );

    if(cartCost != null) {
        cartCost = parseInt(cartCost);
        localStorage.setItem("totalCost", cartCost + product.price);

    } else {
        localStorage.setItem("totalCost", product.price);

    }

}

onLoadCartNumber(); 
