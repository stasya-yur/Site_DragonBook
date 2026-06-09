document.querySelector('.order-cart__pay-btn').addEventListener('click', function() {
    this.classList.add('paid');
    this.querySelector('span').textContent = "Оплачено";
    document.querySelector('.order-cart__status').textContent = "Оплачено"
  });