import CartActionTypes from "./cart.types";
import addItemToCart from "./cart.utlis";

const INITIAL_STATE = {
	hidden: true,
	cartItems: [],
};

const cartRducer = (state = INITIAL_STATE, action) => {
	switch (action.type) {
		case CartActionTypes.TOGGLE_CART_HIDDEN:
			return {
				...state,
				hidden: !state.hidden,
			};
		case CartActionTypes.ADD_ITEMS:
			return {
				...state,
				cartItems: addItemToCart(state.cartItems, action.payload),
			};
		default:
			return state;
	}
};
export default cartRducer;
