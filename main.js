// lib
var Cart = function(itemObjs, targetEl, resultEl) {
  var me = this;
  this.itemObjs = itemObjs || [];
  this.itemCollection = [];
  this.targetEl = targetEl;
  this.resultEl = resultEl;

  // @fixme: вынести в отдельный класс / метод
  this.render = function() {
    me.targetEl.innerHTML = me.itemCollection.map(function(itemObj) {
      return 'Товар: ' + itemObj.name + ' Цена: ' + itemObj.price
    }).join('<br>');

    me.resultEl.innerHTML = me.countCartPrice() + ' руб.';
  }

  this.countCartPrice = function() {
    var price = 0;
    for(var i=0; i<me.itemCollection.length; i++) {
      price += me.itemCollection[i].price
    }
    return price;
  }

  this.addToCart = function(id) {
    var foundObj = me.itemObjs.find(function(el) {
      return el.id === id
    })
    if(!foundObj) {
      alert('Элемент ' + id + ' не найден!');
    } else {
      me.itemCollection.push(foundObj);
      me.render();
    }
  }
}

// client code
var itemObjs = [{
  id: '1',
  name: 'Ручка',
  price: 100,
},{
  id: '2',
  name: 'Бумага',
  price: 150,
},{
  id: '3',
  name: 'Карандаш',
  price: 50,
}];
var cartItemsEl = document.querySelector(".cart-items");
var resultEl = document.querySelector(".cart-result");
var cart = new Cart(itemObjs, cartItemsEl, resultEl);
var itemBtns = document.querySelectorAll(".item")

for(var itemBtn of itemBtns) {
  itemBtn.addEventListener ("click", function (event) {
    cart.addToCart(event.target.getAttribute('data-id'))
  })
}

