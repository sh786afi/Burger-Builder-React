import * as actionType from "./actions";

const initialState = {
  ingredients: {
    salad: 0,
    chicken: 0,
    cheese: 0,
    meat: 0
  },
  totalPrice: 40
};
const INGREDIENT_PRICES = {
  salad: 50,
  chicken: 130,
  cheese: 40,
  meat: 100
};
const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actionType.ADD_INGREDIENT:
      return {
        ...state,
        ingredients: {
          ...state.ingredients,
          [action.ingredientName]: state.ingredients[action.ingredientName] + 1
        },
        totalPrice: state.totalPrice + INGREDIENT_PRICES[action.ingredientName]
      };
    case actionType.REMOVE_INGREDIENT:
      return {
        ...state,
        ingredients: {
          ...state.ingredients,
          [action.ingredientName]: state.ingredients[action.ingredientName] - 1
        },
        totalPrice: state.totalPrice - INGREDIENT_PRICES[action.ingredientName]
      };
  }
  return state;
};
export default reducer;
