let cart =
JSON.parse(localStorage.getItem("cart"))
|| [];

function addToCart(name,price){

cart.push({
name:name,
price:price
});

localStorage.setItem(
"cart",
JSON.stringify(cart)
);

alert(name + " added to cart!");
}

function removeItem(index){

cart.splice(index,1);

localStorage.setItem(
"cart",
JSON.stringify(cart)
);

renderCart();
}

function renderCart(){

let total = 0;

const cartItems =
document.getElementById("cartItems");

if(!cartItems) return;

cartItems.innerHTML = "";

cart.forEach((item,index)=>{

total += item.price;

cartItems.innerHTML += `
<div class="cart-item">
<span>
${item.name}
- ₹${item.price}
</span>

<button onclick="removeItem(${index})">
Remove
</button>
</div>
`;

});

document.getElementById("total")
.innerText = total;
}
