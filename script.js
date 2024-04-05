const cartItems = [];

function addToCart(item, price) {
  cartItems.push({ name: item, price: price });
  updateCart();
}

function updateCart() {
  const cartList = document.getElementById('cart-items');
  const totalElement = document.getElementById('total');
  let total = 0;

  cartList.innerHTML = '';
  cartItems.forEach(item => {
    const li = document.createElement('li');
    li.textContent = `${item.name} - $${item.price.toFixed(2)}`;
    cartList.appendChild(li);
    total += item.price;
  });

  totalElement.textContent = `$${total.toFixed(2)}`;
}

function checkout() {
  const total = cartItems.reduce((acc, item) => acc + item.price, 0);
  alert(`Thank you for shopping with us! Your total is: $${total.toFixed(2)}`);
  cartItems.length = 0;
  updateCart();
}
