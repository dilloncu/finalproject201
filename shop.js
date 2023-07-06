"use strict";


function userPurchase() {
  alert("Thank you for your purchase");
}

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
    localStorage.setItem(product, quantity)
    
    let updatePrice = document.getElementById('subtotal');
    updatePrice.innerText = quantity * price;
  
    

    calculateTotal();
}

  
  
  function getInputValue(product) {
    let productInput = document.getElementById(product + '-input');
    let productQuantity = parseInt(productInput.value);
    return productQuantity;
  }
  

  
  function calculateTotal() {
    
    let sec1Total = getInputValue('sec1') * 7.00;
    let sec2Total = getInputValue('sec2') * 7.00;
    let sec3Total = getInputValue('sec3') * 7.00;
    let sec4Total = getInputValue('sec4') * 7.00;
    let sec5Total = getInputValue('sec5') * 7.00;
  
    let subTotal = sec1Total + sec2Total + sec3Total + sec4Total + sec5Total;
    let delivery = subTotal / 4;
    let totalPrice = subTotal + delivery;

    document.getElementById('subtotal').innerText = subTotal;
    document.getElementById('delivery').innerText = delivery;
    document.getElementById('total-price').innerText = totalPrice;

    }


  
  document.getElementById('sec1add').addEventListener('click', function () {
    updateProduct('sec1', 7.00, true);
  });

  document.getElementById('sec1min').addEventListener('click', function () {
    updateProduct('sec1', 7.00, false);
  });
  document.getElementById('sec2add').addEventListener('click', function () {
    updateProduct('sec2', 7.00, true);
  });
  document.getElementById('sec2min').addEventListener('click', function () {
    updateProduct('sec2', 7.00, false);
  });

  document.getElementById('sec3add').addEventListener('click', function () {
    updateProduct('sec3', 7.00, true);
  });
  document.getElementById('sec3min').addEventListener('click', function () {
    updateProduct('sec3', 7.00, false);
  });

  document.getElementById('sec4add').addEventListener('click', function () {
    updateProduct('sec4', 7.00, true);
  });
  document.getElementById('sec4min').addEventListener('click', function () {
    updateProduct('sec4', 7.00, false);
  });

  document.getElementById('sec5add').addEventListener('click', function () {
    updateProduct('sec5', 7.00, true);
  });
  document.getElementById('sec5min').addEventListener('click', function () {
    updateProduct('sec5',  false);
  });


function pageLoad(){
  //check whether they have local storage
  if(localStorage.getItem("sec1", 0)){
    document.getElementById("sec1-input").value=localStorage.getItem("sec1")
  } else{
    localStorage.setItem("sec1", 0)
  }

  if(localStorage.getItem("sec2", 0)){
    document.getElementById("sec2-input").value=localStorage.getItem("sec2")
  } else{
    localStorage.setItem("sec2", 0)
  }

  if(localStorage.getItem("sec3", 0)){
    document.getElementById("sec3-input").value=localStorage.getItem("sec3")
  } else{
    localStorage.setItem("sec3", 0)
  }

  if(localStorage.getItem("sec4", 0)){
    document.getElementById("sec4-input").value=localStorage.getItem("sec4")
  } else{
    localStorage.setItem("sec4", 0)
  }

  if(localStorage.getItem("sec5", 0)){
    document.getElementById("sec5-input").value=localStorage.getItem("sec5")
  } else{
    localStorage.setItem("sec5", 0)
  }
  calculateTotal()

  
}

pageLoad()

