import * as actionType from "../actions/actionTypes";
import { updateObject } from "../utility";
const initialState = {
  ingredients: null,
  totalPrice: 40,
  error: false,
  building: false
};
const INGREDIENT_PRICES = {
  salad: 50,
  chicken: 130,
  cheese: 40,
  meat: 100
};
const addIngredient = (state, action) => {
  const updatedIngredient = {
    [action.ingredientName]: state.ingredients[action.ingredientName] + 1
  };
  const updatedIngredients = updateObject(state.ingredients, updatedIngredient);
  const updateState = {
    ingredients: updatedIngredients,
    totalPrice: state.totalPrice + INGREDIENT_PRICES[action.ingredientName],
    building: true
  };
  return updateObject(state, updateState);
};
const removeIngredient = (state, action) => {
  const updatedIngredient = {
    [action.ingredientName]: state.ingredients[action.ingredientName] - 1
  };
  const updatedIngredients = updateObject(state.ingredients, updatedIngredient);
  const updateState = {
    ingredients: updatedIngredients,
    totalPrice: state.totalPrice + INGREDIENT_PRICES[action.ingredientName],
    building: true
  };
  return updateObject(state, updateState);
};
const setIngredient = (state, action) => {
  return updateObject(state, {
    ingredients: {
      cheese: action.ingredients.cheese,
      chicken: action.ingredients.chicken,
      meat: action.ingredients.meat,
      salad: action.ingredients.salad
    },
    error: false,
    totalPrice: 40,
    building: false
  });
};
const fetchIngredientsFailed = (state, action) => {
  return updateObject(state, { error: true });
};
const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actionType.ADD_INGREDIENT:
      return addIngredient(state, action);

    case actionType.REMOVE_INGREDIENT:
      return removeIngredient(state, action);

    case actionType.SET_INGREDIENTS:
      return setIngredient(state, action);
    case actionType.FETCH_INGREDIENTS_FAILED:
      return fetchIngredientsFailed(state, action);
  }

  return state;
};
export default reducer;
