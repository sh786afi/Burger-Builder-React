import React from "react";
import classes from "./Burger.module.css";
import BurgrIngredient from "./BurgerIngredient/BurgerIngredient";
const burger = props => {
  let transformedIngredients = Object.keys(props.ingredients)
    .map(igKey => {
      return [...Array(props.ingredients[igKey])].map((_, i) => {
        return <BurgrIngredient key={igKey + i} type={igKey} />;
      });
    })
    .reduce((arr, el) => {
      return arr.concat(el);
    }, []);

  if (transformedIngredients.length === 0) {
    transformedIngredients = <p>Please Start Adding Ingredients!</p>;
  }
  return (
    <div className={classes.Burger}>
      <BurgrIngredient type="bread-top" />
      {transformedIngredients}
      <BurgrIngredient type="bread-bottom" />
    </div>
  );
};

export default burger;
