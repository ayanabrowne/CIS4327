if(sodocument.readyState == 'loading'){
	document.addEventListener('DOMContentLoaded', eady);
}
else{
	ready();
}
function ready(){
	var removeItemBtn = document.getElementsByClassName("btn-ex");
	console.log(removeItemBtn);
	for(var i = 0; i < removeItemBtn.length; i++){
		var button = removeItemBtn[i];
		button.addEventListener('click', removeItem);
	}
}

function removeItem(){
	var clickedButton = event.target;
	buttonClicked.parentElement.parentElement.remove();
	updateTotal();
}

function updateTotal(){
	var cartItem = document.getElementsByClassName("current-cart")[0];
	var cartRow = cartItem.getElementsByClassName('cart-row');
	var total = 0;
	for (var i = 0;i < cartRow.length; i++){
		var cartRows = cartRow[i];
		var price = cartRow.getElementsByClassName('cartPrice')[0];
		var qty = cartRow.getElementsByClassName('cartQty')[0];
		console.log(price, qty);
		var subtotal = parseFloat(price.innerText.replace('$', ''));
		var qty2 = qty.value;
		total = total + (subtotal * qty2);
	}
	document.getElementsByClassName('cart-summary')[0].innerText = "$" + total;
}