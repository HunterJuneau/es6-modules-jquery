import { getCartModal, chargeIt, showCartItems } from './modal.js';
import { getCartDom } from './cartDom.js';
import { setCart } from './../../helpers/data/cartData.js';

const makeCart = () => {
	$('#cart').html(getCartModal() + getCartDom());
	$('#charge-it').click(() => {
		const ccNum = $('#credit-card').val();
		chargeIt(ccNum);
	});

	showCartItems();
};

const addToCart = (array, index) => {
	const cartButton = $(`#cart-add-${index}`);

	cartButton.on('click', () => {
		setCart(array[index]);
    makeCart();
	});
};

export { addToCart };
