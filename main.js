// lib
// var Cart = function(itemObjs, targetEl, resultEl) {
//   var me = this;
//   this.itemObjs = itemObjs || [];
//   this.itemCollection = [];
//   this.targetEl = targetEl;
//   this.resultEl = resultEl;

//   // @fixme: вынести в отдельный класс / метод
//   this.render = function() {
//     me.targetEl.innerHTML = me.itemCollection.map(function(itemObj) {
//       return 'Товар: ' + itemObj.name + ' Цена: ' + itemObj.price
//     }).join('<br>');

//     me.resultEl.innerHTML = me.countCartPrice() + ' руб.';
//   }

//   this.countCartPrice = function() {
//     var price = 0;
//     for(var i=0; i<me.itemCollection.length; i++) {
//       price += me.itemCollection[i].price
//     }
//     return price;
//   }

//   this.addToCart = function(id) {
//     var foundObj = me.itemObjs.find(function(el) {
//       return el.id === id
//     })
//     if(!foundObj) {
//       alert('Элемент ' + id + ' не найден!');
//     } else {
//       me.itemCollection.push(foundObj);
//       me.render();
//     }
//   }
// }

function getCart(itemObjs, cartItemsEl, resultEl) {
  function getCartItems() {
    return JSON.parse(localStorage.getItem('cart')) || [];
  }
  
  function setCartItems(itemObjs) {
    localStorage.setItem('cart', JSON.stringify(itemObjs));
  }

  function getObjectById(id) {
    var foundObj = itemObjs.find(function(item) {
      return item.id === id
    })
    if(!foundObj) {
      alert('Элемент ' + id + ' не найден!');
    } else {
      return foundObj;
    }
  }
  function addToCart(id) {
    var itemObj = getObjectById(id);
    var currentObj = cartItems.find(function (item) {
      return item.id === id
    });
    if(currentObj) {
      currentObj.count += 1;
    } else {
      cartItems.push({
        id: itemObj.id,
        name: itemObj.name,
        price: itemObj.price,
        url: itemObj.url,
        count: 1
      });
    }
    updateCard();
  }
  
  function removeHandler (event) {
    var id = event.target.getAttribute('data-id');
    cartItems = cartItems.filter(function(item){
      return item.id !== id;
    })
    updateCard();
  }
  
  function minusHandler (event) {
    var id = event.target.getAttribute('data-id');
    var currentObj = cartItems.find(function (item) {
      return item.id === id
    });
    currentObj.count -= 1;
    // if (currentObj.count <= 0) {
    //   cartItems = cartItems.filter(function(item){
    //     return item.id !== id;
    //   })
    // }
  
    cartItems = cartItems.filter(function(item){
      return item.count > 0;
    })
    updateCard();
  }
  
  function plusHandler (event) {
    var id = event.target.getAttribute('data-id');
    addToCart(id);
    // cartItems.splice(index, 1);
    // alert("plus")
    // renderCart();
  }
  //@fixme global vars
  function updateCard() {
    setCartItems(cartItems);
    renderCart();
  }
  function renderCart() {
    var previousItemButtons = cartItemsEl.querySelectorAll('.cart-item button');
    for(var previousItemButton of previousItemButtons) {
      previousItemButton.removeEventListener('click', removeHandler);
    }
    cartItemsEl.innerHTML = '';
    resultEl.innerText = '';
    var price = 0;
    for(var i=0; i<cartItems.length; i++) {
      var cartItem = cartItems[i];
      price += cartItem.price * cartItem.count;
      var cartItemEl = document.createElement('div');
      cartItemEl.classList.add('cart-item');
      cartItemEl.innerHTML = `
      <p>Товар: ${cartItem.name} Цена: ${cartItem.price} Количество: ${cartItem.count}</p>
      <button class="plus-btn" data-id="${cartItems[i].id}">+</button>
      <button class="minus-btn" data-id="${cartItems[i].id}">-</button>
      <button class="del-btn" data-id="${cartItems[i].id}">Удалить</button>
     `
     cartItemEl.querySelector('.del-btn').addEventListener('click', removeHandler);
     cartItemEl.querySelector('.minus-btn').addEventListener('click', minusHandler);
     cartItemEl.querySelector('.plus-btn').addEventListener('click', plusHandler);
     cartItemsEl.append(cartItemEl)
     resultEl.innerText = `Стоимость  товаров: ${price} руб.`
    }
    if(!cartItems.length) {
      var pEl = document.createElement('p');
      pEl.innerText = `Корзина пуста`;
      cartItemsEl.append(pEl)
    }
  }

  var cartItems = getCartItems();
  return {
    render: renderCart,
    addToCart: addToCart
  }
}

function getCatalog (catalogEl, itemObjs, cart) {
  function renderCatalog() {
    catalogEl.innerHTML = '';
    for(var itemObj of itemObjs) {
      var itemEl = document.createElement('div');
      itemEl.setAttribute('data-id', itemObj.id);
      itemEl.classList.add ('block-kittens');
  
      // var h3El = document.createElement('h3');
      // itemEl.appendChild(h3El);
  
      itemEl.innerHTML = `
      <h3>${itemObj.name}</h3>
      <img src="${itemObj.url}" />
      <span class="price">Цена: ${itemObj.price} руб.</span>
      <button data-id="${itemObj.id}">Купить</button>
    `
      itemEl.querySelector('button').addEventListener('click', function(event) {
        var id = event.target.getAttribute('data-id');
        cart.addToCart(id)
      })
      catalogEl.appendChild(itemEl);
    }
  }
  return {
    render: renderCatalog
  }
}

// client code
var cartItemsEl = document.querySelector(".cart-items");
var resultEl = document.querySelector(".cart-result");
var itemObjs = [{
  id: '1',
  name: 'Рыжие',
  price: 100,
  url: 'https://placekitten.com/200/150',
},{
  id: '2',
  name: 'Темные',
  price: 150,
  url: 'https://placekitten.com/204/153',
},{
  id: '3',
  name: 'Котеньки',
  price: 50,
  url: 'https://placekitten.com/208/156'
}];

var cart = getCart(itemObjs, cartItemsEl, resultEl);

cart.render();

var catalogEl = document.querySelector("#catalog")
var catalog = getCatalog(catalogEl, itemObjs, cart);
catalog.render();
