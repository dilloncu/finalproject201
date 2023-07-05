"use strict";

  function updateProduct(product, price, isIncreasing) {

    let inputField = document.getElementById(product + '-input');
    let quantity = inputField.value;
    if (isIncreasing == true) {
      quantity = parseInt(quantity) + 1;
    } else
    if (quantity > 0) {
      quantity = parseInt(quantity) - 1;
    }
    inputField.value = quantity;
  
    
    let updatePrice = document.getElementById(product + '-total');
    updatePrice.innerText = quantity * price;
  
    
    calculateTotal();
}

  
  
  function getInputValue(product) {
    let productInput = document.getElementById(product + '-input');
    let productQuantity = parseInt(productInput.value);
    return productQuantity;
  }
  

  
  function calculateTotal() {
    let sec1Total = getInputValue('sec1') * 7.99;
    let sec2Total = getInputValue('sec2') * 7.99;
  
    let subTotal = sec1Total + sec2Total;
    let delivery = subTotal / 2;
    let totalPrice = subTotal + delivery;

    document.getElementById('subtotal').innerText = subTotal;
    document.getElementById('delivery').innerText = delivery;
    document.getElementById('total-price').innerText = totalPrice;

    }


  
  document.getElementById('sec1add').addEventListener('click', function () {
    updateProduct('sec1', 7.99, true);
  });
  
  document.getElementById('sec1min').addEventListener('click', function () {
    updateProduct('sec1', 7.99, false);
  });
  document.getElementById('sec2add').addEventListener('click', function () {
    updateProduct('sec2', 7.99, true);
  });
  document.getElementById('sec2min').addEventListener('click', function () {
    updateProduct('sec2', 7.99, false);
  });