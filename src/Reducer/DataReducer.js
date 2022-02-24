export function dataReducer(state, { type, payload }) {
  const decreaseMonth = (state, payload) => {
    return state.cart.map((cartItem) =>
      cartItem._id === payload._id
        ? { ...cartItem, month: cartItem.month - 1 }
        : cartItem
    );
  };

  const removeAdvisor = (state, payload) => {
    return state.cart.filter((cartItem) => cartItem._id !== payload._id);
  };

  switch (type) {
    case 'INITIALIZE_ADVISORS':
      console.log({ "loc": "reducer.INITIALIZE_ADVISORS", payload });
      return {
        ...state,
        allAdvisor: payload.allAdvisor
      }

    case 'INITIALIZE_CART':
      console.log({ "loc": "reducer.INITIALIZE_CART", payload });
      const cartToSave = payload.cart.map((payloadItem) => ({
        ...payloadItem.advisor,
        month: payloadItem.month,
      }));
      return { ...state, cart: cartToSave };

    case 'ADD_TO_CART':
      console.log({ "loc": "datareducer.add_to_cart", cart: state.cart });
      if (!state.cart.find((cartItem) => cartItem._id === payload._id)) {
        return {
          ...state,
          cartTotal: state.cartTotal + payload.price,
          cart: [...state.cart, { ...payload, month: 1 }],
        };
      }
      return state;
    case 'ADD_MONTHS':
      return {
        ...state,
        cartTotal: state.cartTotal - payload.price,
        cart: state.cart.map((cartItem) =>
          cartItem._id === payload._id
            ? { ...cartItem, month: cartItem.month + 1 }
            : cartItem
        ),
      };

    case 'REMOVE_MONTHS':
      return {
        ...state,
        cartTotal: state.cartTotal - payload.price,
        cart:
          payload.month > 1
            ? decreaseMonth(state, payload)
            : removeAdvisor(state, payload),
      };
    case 'LOGOUT':
      return {
        ...state,
        cart: [],
        cartTotal: 0,
        wishlist: [],
      };
    default:
      break;
  }
}

export const initialDataState = {
  allAdvisor: [],
  cart: [],
  cartTotal: 0,
}