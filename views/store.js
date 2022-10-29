const open = document.getElementById('openCartBtn')
const close = document.getElementById('close')
const container = document.querySelector('.cart-display-section');

open.addEventListener('click',()=>{
    container.classList.add('active');
})
close.addEventListener('click',()=>{
    container.classList.remove('active');
})

//DOM Manipulation
window.addEventListener('DOMContentLoaded',()=>{
    axios.get(`http://localhost:3000/limited?page=0`)
    .then(productInfo=>{
        console.log(productInfo.data.products)
      let products = productInfo.data.products;
       let container="";
        let parent = document.getElementById("rows");
       for( let i =0;i<productInfo.data.products.length;i++)
       {
        let title = productInfo.data.products[i].title;
        console.log(title)
        let imageSrc = productInfo.data.products[i].imageUrl;
        let price = productInfo.data.products[i].price;
        let prod = productInfo.data.products[i].id;
         container+=` <div class="bag">
                 <h4 class="bag-title" >${title}</h4>
               <img src="${imageSrc}"  class="images" alt="" width="300px" height="300px">
               <div class="price-cart">
                      <h3 class="price">${price}</h3>  
                  <button type="button" class="addtocart" id="btn" onClick="addToCartClicked(${prod})">ADD TO CART</button>
                </div>
             </div>`
    }
    parent.innerHTML = container;
})
.catch(err=> console.log(err))
// var removeButtonClicked = document.getElementsByClassName('cart-item-remove-button');
// for(var i =0; i<removeButtonClicked.length;i++)
// {
//     var button = removeButtonClicked[i];
//     button.addEventListener('click', removeCartItem)
// }

// var quantityInputs = document.getElementsByClassName('cart-row-item-quantity')
// {
//     for(var i =0;i<quantityInputs.length;i++)
//     {
//         var input = quantityInputs[i];
//         input.addEventListener('change',quantityChanged)
//     }
// }

// var addtocartButton = document.getElementsByClassName('addtocart')
// {
//     for(var i =0; i<addtocartButton.length;i++)
//     {
//         var button = addtocartButton[i];
//         button.addEventListener('click',addToCartClicked)
//     }
//     document.getElementsByClassName('purchase-button')[0].addEventListener('click', purchaseClicked) 
// }




// function purchaseClicked(event)
// {
//     alert('thank u for shopping')
//     var cartItems = document.getElementsByClassName('cart-items')[0]
//      while(cartItems.hasChildNodes())
//      {
//         cartItems.removeChild(cartItems.firstChild)
//      }
//      updateCartTotal()
// }
// function addToCartClicked(event)
// {
//     var button = event.target;
//     var shopItem = button.parentElement.parentElement;
//     var  title = shopItem.getElementsByClassName('bag-title')[0].innerText;
//     var  price = shopItem.getElementsByClassName('price')[0].innerText;
//     var  image = shopItem.getElementsByClassName('images')[0].src;

//     console.log(title,price,image)
//     addToCart(title,price,image)
//     updateCartTotal()
// }

// function addToCart(title,price,image)
// {
//     var cartRow = document.createElement('div');
//     cartRow.classList.add('cart-row')
//     var cartItem = document.getElementsByClassName('cart-items')[0]
//     var cartItemName = document.getElementsByClassName("cart-title")
//     for(var i =0;i<cartItemName.length;i++)
//     {
//         if(cartItemName[i].innerText == title )
//         {
//             alert('add to cart')
//             return
//         }
//     }
//     var cartRowContent = `
//     <div class="show-cart">
//     <div class="cart-items-row-column">
//       <img src="${image}" class="cart-images" alt="" width="50" >
//       <span class="cart-title">${title}</span>
//     </div>
//     <div >
//     <span class="cart-price">${price}</span>
//      <input type="number"  class="cart-row-item-quantity"  value="1">
//      <button class="cart-item-remove-button">REMOVE</button>
//      </div>
//      </div>
//     `
//     cartRow.innerHTML = cartRowContent;
//     cartItem.append(cartRow)
//     cartRow.getElementsByClassName('cart-item-remove-button')[0].addEventListener('click',removeCartItem)
//     cartRow.getElementsByClassName('cart-row-item-quantity')[0].addEventListener('change',quantityChanged)
// }

// function removeCartItem(event)
// {
//     var buttonClicked = event.target;
//     buttonClicked.parentElement.parentElement.remove();
//     updateCartTotal();
// }

// function quantityChanged(event)
// {
//     var input = event.target
//     if(isNaN(input.value) || input.value <= 0 )
//     {
//         input.value = 1;
//     }
//     updateCartTotal();
// }

// function updateCartTotal()
// {
//       var cartItemContainer = document.getElementsByClassName('cart-items')[0]
//       var cartRows = cartItemContainer.getElementsByClassName('cart-row'); 
//       var total =0;
//       for(var i =0; i<cartRows.length;i++)
//       {
//         var cartRow = cartRows[i];
//         var priceElement = cartRow.getElementsByClassName('cart-price')[0]
//         var quantityElement = cartRow.getElementsByClassName('cart-row-item-quantity')[0]
//         var price = parseFloat(priceElement.innerText.replace('$' , ''))
//         var quantity = quantityElement.value
//         total = total + (price*quantity);

//       }
//       total = Math.round(total);
//       document.getElementsByClassName('total-purchase-price')[0].innerText = '$' + total;
// }

// window.addEventListener('DOMContentLoaded',()=>{
    // axios.get('http://localhost:3000/products')
    // .then((result)=>{
    //     //   console.log(result.data.products)
    //       let div = document.getElementById('rows')
    //       div.innerHTML = "";
    //       let container=""; 

    //       for(let i =0;i < result.data.products.length;i++)
    //       {
    //         let title = result.data.products[i].title;
    //         // console.log(title)
    //         let imageSrc =result.data.products[i].imageUrl;
    //         let price =result.data.products[i].price;
    //         let prod = result.data.products[i].id;
    //         container+=`
    //         <div class="bag">
    //         <h4 class="bag-title" >${title}</h4>
    //         <img src="${imageSrc}"  class="images" alt="" width="300px" height="300px">
    //         <div class="price-cart">
    //             <h3 class="price">${price}</h3>  
    //             <button type="button" class="addtocart" id="btn" onclick= "addToCartClicked(${prod})">ADD TO CART</button>
    //         </div>
    //     </div>`
    //       }
    //     //   console.log()
    //       div.innerHTML = container;
    //     //   console.log(div)
        getDetailsCart()
        pagination()
    })
    // .catch(err=>console.log(err))
// })

let c = 0;
let cc = 1;
let pag = document.getElementById('pagination');

function pagination(e) {
    axios.get("http://localhost:3000/products")
    .then((productInfo)=>{
        console.log(productInfo.data)
      let number_of_pages;
      if(productInfo.data.products.length % 2 == 0) {
         number_of_pages = Math.trunc(((productInfo.data.products.length)/2))
      } else {
         number_of_pages = Math.trunc(((productInfo.data.products.length)/2)+1)
      }

      for (let i = 0; i < number_of_pages; i++) {
        pag.innerHTML += `<button class="pagebtn" id="?page=${c++}">${cc++}</button> `;
        console.log(pag)
      }
    })
    .catch(err=> NotifyUser(err))
  }

  pag.addEventListener('click', (e)=>{
    let id = e.target.id;
    console.log(id)
    axios.get(`http://localhost:3000/limited${id}`)
    .then(productInfo=>{
        console.log(productInfo.data.products)
      let products = productInfo.data.products;
       let container="";
        let parent = document.getElementById("rows");
       for( let i =0;i<productInfo.data.products.length;i++)
       {
        let title = productInfo.data.products[i].title;
        console.log(title)
        let imageSrc = productInfo.data.products[i].imageUrl;
        let price = productInfo.data.products[i].price;
        let prod = productInfo.data.products[i].id;
         container+=` <div class="bag">
                 <h4 class="bag-title" >${title}</h4>
               <img src="${imageSrc}"  class="images" alt="" width="300px" height="300px">
               <div class="price-cart">
                      <h3 class="price">${price}</h3>  
                  <button type="button" class="addtocart" id="btn" onClick="addToCartClicked(${prod})">ADD TO CART</button>
                </div>
             </div>`

       }


        parent.innerHTML = container;
    })
    .catch(err=> console.log(err))
  })

function addToCartClicked(prod)
{
    axios.post('http://localhost:3000/cart',{productId : prod})
    .then(response => {
        if(response.status ===200)
        {
            NotifyUser(response.data.message)
        }
        else{
            throw new Error(response.data.message);
        }
        getDetailsCart()
    })
    .catch((errMsg) => {
        console.log(errMsg)
        NotifyUser(errMsg)
    }
    )}
        // console.log(response)
//     })
//     .catch(err => console.log(err))
// }

// // /  TO PRODUCT ADDEE SUCCESSFULLY NOTIFICATION 
// const section =document.querySelector('.section-of-bag')
// const contain= document.getElementById('container');


// section.addEventListener('click',()=>{
//    cretaeNotification();
// });

// function cretaeNotification()
// {
//     const Notifi = document.createElement('div');
//     Notifi.classList.add('toast')
//     Notifi.innerText="Product added successfully";

//     contain.appendChild(Notifi);

//     setTimeout(() =>{
//         Notifi.remove();
//     },3000)
// }

function NotifyUser(message)
{
    const container = document.getElementById('container');
    const Notifi = document.createElement('div');
    Notifi.classList.add('notifi')
    Notifi.innerText=`${message}`;
    container.appendChild(Notifi);

    setTimeout(() =>{
        Notifi.remove();
    },3000)
}

function  getDetailsCart()
{
    axios.get('http://localhost:3000/cart')
    .then(response =>{
        let parentElement = document.getElementById('cart-item');
        let container = "";
        for(let i=0;i<response.data.products.length;i++)
        {
            const title = response.data.products[i].title;
            let imageSrc =response.data.products[i].imageUrl;
            let price =response.data.products[i].price;
            let prodId = response.data.products[i].id;
            container+=`
            <div class="show-cart">
               <div class="cart-items-row-column">
                  <img src="${imageSrc}" class="cart-images" alt="" width="50" >
                 <span class="cart-title">${title}</span>
             </div>
            
                 <div >
                 <span class="cart-price">${price}</span>
                  <input type="number"  class="cart-row-item-quantity"  value="1">
                 <button class="cart-item-remove-button" onclick="removeItem(${prodId})">REMOVE</button>
                  </div>
                </div>`
        }
        parentElement.innerHTML=container;
        updateCartTotal()
        //   removeItem()
    })
    .catch(err => console.log(err))
}

function removeItem(prodId)
{
    axios.delete(`http://localhost:3000/cart-delete-item/${prodId}`)
    .then(result =>{
        if(result.status === 200)
        {
            var removeButtonClicked = document.getElementsByClassName('cart-item-remove-button');
            for(var i =0; i<removeButtonClicked.length;i++)
            {
                var button = removeButtonClicked[i];
                button.addEventListener('click', removeCartItem)
            }
        }
        else{
            throw new Error
        }

    })
    .catch(err => console.log(err))


}


function removeCartItem(event)
{
    var buttonClicked = event.target;
    buttonClicked.parentElement.parentElement.remove();
    updateCartTotal();
}
function updateCartTotal()
{
      var cartItemContainer = document.getElementsByClassName('cart-items')[0]
      var cartRows = cartItemContainer.getElementsByClassName('show-cart'); 
      var total =0;
      console.log(cartRows)
      for(var i =0; i<cartRows.length;i++)
      {
        var cartRow = cartRows[i];
        var priceElement = cartRow.getElementsByClassName('cart-price')[0]
        var quantityElement = cartRow.getElementsByClassName('cart-row-item-quantity')[0]
        var price = parseFloat(priceElement.innerText)
        var quantity = quantityElement.value
        total = total + (price*quantity);

      }
      total = Math.round(total);
      document.getElementsByClassName('total-purchase-price')[0].innerText = '$' + total;
    }
//purchaseBUTTON 

const purchaseBtn = document.getElementById('purchase-btn');

purchaseBtn.addEventListener('click',(productId)=>{
    console.log("purchaseid")
    axios.post(`http://localhost:3000/CreateOrder`,{productId : productId})
   .then(response =>{
    console.log("purchase",response)
   })
    .catch(err =>console.log(err))
})
