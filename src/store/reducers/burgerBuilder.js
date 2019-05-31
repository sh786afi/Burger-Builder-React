import * as actionType from "../actions/actionTypes";

const initialState = {
  ingredients: null,
  totalPrice: 40,
  error: false
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
    case actionType.SET_INGREDIENTS:
      return {
        ...state,
        ingredients: {
          cheese: action.ingredients.cheese,
          chicken: action.ingredients.chicken,
          meat: action.ingredients.meat,
          salad: action.ingredients.salad
        },
        error: false
      };
    case actionType.FETCH_INGREDIENTS_FAILED:
      return {
        ...state,
        error: true
      };
  }

  return state;
};
export default reducer;
