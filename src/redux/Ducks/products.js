import _ from "lodash";

const INCREASE_QUANTITY = "INCREASE_QUANTITY";
const DECREASE_QUANTITY = "DECREASE_QUANTITY";
const ADD_PRODUCT = "ADD_PRODUCT";
const TOGGLE_VISIBILITY = "TOGGLE_VISIBILITY";

const initialState = { list: [], visibility: false };

const productsReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_PRODUCT: {
      const index = _.findIndex(state.list, { id: action.payload.id });
      if (index >= 0) {
        const { list } = state;
        list[index].quantity += 1;
        list[index].total += list[index].price;
        return { ...state, list: [...list] };
      } else {
        return {
          ...state,
          list: [
            ...state.list,
            { ...action.payload, quantity: 1, total: action.payload.price },
          ],
        };
      }
    }

    case INCREASE_QUANTITY: {
      const index = _.findIndex(state.list, { id: action.payload.id });
      if (index >= 0) {
        const newList = _.clone(state.list);
        newList[index].total += newList[index].price;
        newList[index].quantity += 1;
        return { ...state, list: newList };
      }
      return state;
    }

    case DECREASE_QUANTITY: {
      const index = _.findIndex(state.list, { id: action.payload.id });
      if (index >= 0) {
        const newList = _.clone(state.list);
        if (newList[index].quantity <= 1) {
          newList.splice(index, 1);
          return { ...state, list: newList };
        }
        newList[index].total -= newList[index].price;
        newList[index].quantity -= 1;
        return { ...state, list: newList };
      }
      return state;
    }
    case TOGGLE_VISIBILITY:
      return { ...state, visibility: !state.visibility };
    default:
      return state;
  }
};

export default productsReducer;

export const increaseProductQuantity = (payload) => ({
  type: INCREASE_QUANTITY,
  payload,
});

export const decreaseProductQuantity = (payload) => ({
  type: DECREASE_QUANTITY,
  payload,
});

export const addProductToProducts = (payload) => ({
  type: ADD_PRODUCT,
  payload,
});

export const toggleCardVisibility = () => ({ type: TOGGLE_VISIBILITY });
